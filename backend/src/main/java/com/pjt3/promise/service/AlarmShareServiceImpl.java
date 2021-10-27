package com.pjt3.promise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.AlarmShareRepositorySupport;
import com.pjt3.promise.response.AlarmShareGetRes;

@Service
public class AlarmShareServiceImpl implements AlarmShareService {
	
	@Autowired
	AlarmShareRepositorySupport alarmShareRepositorySupport;

	@Override
	public List<AlarmShareGetRes> getAlarmShareList(User user) {
		return alarmShareRepositorySupport.getAlarmInfo(user);
	}

}
