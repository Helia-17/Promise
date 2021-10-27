package com.pjt3.promise.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.QMediAlarm;
import com.pjt3.promise.entity.QTag;
import com.pjt3.promise.entity.QUserMedicine;
import com.pjt3.promise.response.AlarmDetailGetRes;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class MediAlarmRepositorySupport {

    @Autowired
    private JPAQueryFactory query;
    
    QMediAlarm qMediAlarm = QMediAlarm.mediAlarm;
    
    QUserMedicine qUserMedicine = QUserMedicine.userMedicine;
    
    QTag qTag = QTag.tag;
    
    public AlarmDetailGetRes getAlarmInfo(int alarmId) {

    	AlarmDetailGetRes alarmDetailGetRes = query.select(Projections.bean(AlarmDetailGetRes.class,
    			qMediAlarm.alarmId, qMediAlarm.alarmTitle, qMediAlarm.alarmYN, qMediAlarm.alarmDays,
    			qMediAlarm.alarmTime1, qMediAlarm.alarmTime2, qMediAlarm.alarmTime3, qMediAlarm.alarmTime4, qMediAlarm.alarmTime5,
    			qMediAlarm.alarmDayStart, qMediAlarm.alarmDayEnd))
    			.from(qMediAlarm).where(qMediAlarm.alarmId.eq(alarmId)).fetchOne();
    	if(alarmDetailGetRes != null) {
        	List<String> alarmMediList = query.select(qUserMedicine.unName)
        			.from(qUserMedicine).where(qUserMedicine.mediAlarm.alarmId.eq(alarmId)).fetch();

        	List<String> tagList = query.select(qTag.tagName)
        			.from(qTag).where(qTag.mediAlarm.alarmId.eq(alarmId)).fetch();
        	alarmDetailGetRes.setAlarmMediList(alarmMediList);
        	alarmDetailGetRes.setTagList(tagList);
    	}
    	
    	return alarmDetailGetRes;

    }
    
    
}
