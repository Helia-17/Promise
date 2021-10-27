package com.pjt3.promise.repository;

import com.pjt3.promise.entity.QMedicine;
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

    public List<MediSearchGetRes> getMediSearchListInfo(String searchKeyword) {
        List<MediSearchGetRes> mediList = query.select(Projections.bean(MediSearchGetRes.class, qMedicine.mediSerialNum, qMedicine.mediName, qMedicine.mediCompany, qMedicine.mediElderlyCare, qMedicine.mediPregnancyCare, qMedicine.mediAgeCare))
                .from(qMedicine).where(qMedicine.mediName.contains(searchKeyword))
                .fetch();
        return mediList;
    }
}
