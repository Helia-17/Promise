package com.pjt3.promise.service;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.request.AlarmPostReq;

public interface AlarmService {
    int insertAlarm(User user, AlarmPostReq alarmsPostReq);
}
