package com.pjt3.promise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.AlarmShareRepository;
import com.pjt3.promise.repository.AlarmShareRepositorySupport;
import com.pjt3.promise.repository.MediAlarmRepository;
import com.pjt3.promise.response.AlarmShareGetRes;

@Service
public class AlarmShareServiceImpl implements AlarmShareService {

	private static final int SUCCESS = 1;
	private static final int FAIL = -1;

	@Autowired
	AlarmShareRepository alarmShareRepository;

	@Autowired
	MediAlarmRepository mediAlarmRepository;

	@Autowired
	AlarmShareRepositorySupport alarmShareRepositorySupport;

	@Override
	public List<AlarmShareGetRes> getAlarmShareList(User user) {
		return alarmShareRepositorySupport.getAlarmInfo(user);
	}

	@Override
	public int acceptAlarmShare(int asId) {
		try {

			alarmShareRepository.deleteById(asId);
			return SUCCESS;

		} catch (Exception e) {
			return FAIL;
		}
	}

	@Override
	public int rejectAlarmShare(int alarmId) {
		try {

			mediAlarmRepository.deleteById(alarmId);
			return SUCCESS;

		} catch (Exception e) {
			return FAIL;
		}
	}

}
