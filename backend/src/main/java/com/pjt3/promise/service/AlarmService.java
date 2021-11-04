package com.pjt3.promise.service;

import java.util.List;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.request.AlarmPostReq;
import com.pjt3.promise.request.AlarmPutReq;
import com.pjt3.promise.request.TakeHistoryPostReq;
import com.pjt3.promise.response.AlarmDetailGetRes;
import com.pjt3.promise.response.AlarmGetRes;
import com.pjt3.promise.response.MyPillGetRes;

public interface AlarmService {
    int insertAlarm(User user, AlarmPostReq alarmsPostReq);

	int updateAlarm(User user, AlarmPutReq alarmPutReq);

	int deleteAlarm(int alarmId);

	AlarmDetailGetRes getAlarmInfo(int alarmId);

	int insertTakeHistory(User user, TakeHistoryPostReq takeHistoryPostReq);

	List<AlarmGetRes> getProgressAlarmList(User user);

	List<AlarmGetRes> getPastAlarmList(int periodType, User user);
}
