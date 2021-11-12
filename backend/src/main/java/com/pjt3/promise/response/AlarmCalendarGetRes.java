package com.pjt3.promise.response;

import lombok.Data;

@Data
public class AlarmCalendarGetRes {
	private int alarmId;
	private String alarmDayStart;
	private String alarmDayEnd;

}
