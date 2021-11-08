package com.pjt3.promise.repository;

import com.pjt3.promise.entity.QMedicine;
import com.pjt3.promise.response.MediDetailGetRes;
import com.pjt3.promise.response.MediSearchGetRes;
import com.querydsl.core.types.Projections;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MedicineRepositorySupport {

    @Autowired
    private JPAQueryFactory query;

    QMedicine qMedicine = QMedicine.medicine;
    
    public List<String> getMediAutoListInfo(String searchKeyword) {
        List<String> mediList = query.select(qMedicine.mediName)
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
    
}
