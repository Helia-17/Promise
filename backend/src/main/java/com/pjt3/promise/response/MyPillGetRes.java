package com.pjt3.promise.response;

import java.util.List;

import lombok.Data;

@Data
public class MyPillGetRes {
	private int alarmId;
	private String alarmDayStart;
	private String alarmDayEnd;
	private List<MediGetRes> alarmMediList;
}
