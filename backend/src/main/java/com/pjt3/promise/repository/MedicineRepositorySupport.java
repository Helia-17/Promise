package com.pjt3.promise.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.QMedicine;
import com.pjt3.promise.response.AlarmOCRRes;
import com.pjt3.promise.response.MediDetailGetRes;
import com.pjt3.promise.response.MediGetRes;
import com.pjt3.promise.response.MediSearchGetRes;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class MedicineRepositorySupport {

    @Autowired
    private JPAQueryFactory query;

    QMedicine qMedicine = QMedicine.medicine;
    
    public List<MediGetRes> getMediAutoListInfo(String searchKeyword) {
    	List<MediGetRes> mediList = query.select(Projections.bean(MediGetRes.class, qMedicine.mediSerialNum, qMedicine.mediName))
                .from(qMedicine).where(qMedicine.mediName.contains(searchKeyword))
                .fetch();
        return mediList;
    }
    
    public List<MediSearchGetRes> getMediSearchListInfo(String searchKeyword) {
        List<MediSearchGetRes> mediList = query.select(Projections.bean(MediSearchGetRes.class, qMedicine.mediSerialNum, qMedicine.mediName, qMedicine.mediCompany, qMedicine.mediElderlyCare, qMedicine.mediPregnancyCare, qMedicine.mediAgeCare))
                .from(qMedicine).where(qMedicine.mediName.contains(searchKeyword))
                .fetch();
        return mediList;
    }
    
    public MediDetailGetRes getMediDetailInfo(String mediSerialNum) {
    	MediDetailGetRes mediInfo = query.select(Projections.bean(MediDetailGetRes.class, qMedicine.mediSerialNum, qMedicine.mediName, qMedicine.mediCompany, qMedicine.mediImgUrl, qMedicine.mediIngredient, qMedicine.mediEfficacy, qMedicine.mediTakeWay, qMedicine.mediPrecautionsBefore, qMedicine.mediPrecautionsAfter, qMedicine.mediNotWith, qMedicine.mediAllergy, qMedicine.mediStoreWay, qMedicine.mediElderlyCare, qMedicine.mediPregnancyCare, qMedicine.mediAgeCare, qMedicine.mediClass))
                .from(qMedicine).where(qMedicine.mediSerialNum.eq(mediSerialNum)).fetchOne();
        return mediInfo;
    }
    
    public List<AlarmOCRRes> getOCRMediListInfo(String searchKeyword) {
        List<AlarmOCRRes> mediList = query.select(Projections.bean(AlarmOCRRes.class,  qMedicine.mediName, qMedicine.mediSerialNum))
                .from(qMedicine).where(qMedicine.mediName.contains(searchKeyword))
                .fetch();
        return mediList;
    }
    
}
