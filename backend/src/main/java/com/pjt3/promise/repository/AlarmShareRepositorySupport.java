package com.pjt3.promise.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.AlarmShare;
import com.pjt3.promise.entity.QAlarmShare;
import com.pjt3.promise.entity.QMediAlarm;
import com.pjt3.promise.entity.QUser;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.response.AlarmShareGetRes;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class AlarmShareRepositorySupport {
	
    @Autowired
    private JPAQueryFactory query;
    
    QAlarmShare qAlarmShare = QAlarmShare.alarmShare;
    
    QMediAlarm qMediAlarm = QMediAlarm.mediAlarm;
    
    QUser qUser = QUser.user;
    
    public List<AlarmShareGetRes> getAlarmInfo(User user) {
    	
    	List<AlarmShareGetRes> alarmShareList = query.select(Projections.bean(AlarmShareGetRes.class,
    			qAlarmShare.user.userNickname, qAlarmShare.mediAlarm.alarmId))
    			.from(qAlarmShare)
    			.where(qAlarmShare.mediAlarm.user.eq(user)).fetch();
    	
    	return alarmShareList;

    }

}
