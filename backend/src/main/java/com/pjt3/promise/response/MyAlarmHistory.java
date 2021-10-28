package com.pjt3.promise.response;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class MyAlarmHistory {
	private String alarmTitle;
	private Date thTime;
	private int alarmId;
	private List<String> alarmMediList;
	
}
