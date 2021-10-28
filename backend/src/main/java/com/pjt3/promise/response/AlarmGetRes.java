package com.pjt3.promise.response;

import lombok.Data;

@Data
public class AlarmGetRes {
	private int alarmId;
	private String alarmTitle;
	private String alarmDayStart;
	private String alarmDayEnd;
	
}
