package com.pjt3.promise.service;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.request.AlarmPostReq;
import com.pjt3.promise.request.AlarmPutReq;

public interface AlarmService {
    int insertAlarm(User user, AlarmPostReq alarmsPostReq);

	int updateAlarm(User user, AlarmPutReq alarmPutReq);

	int deleteAlarm(int alarmId);
}
