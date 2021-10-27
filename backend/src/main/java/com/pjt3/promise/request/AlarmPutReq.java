package com.pjt3.promise.request;

import java.util.List;

import lombok.Data;

@Data
public class AlarmPutReq {
	private int alarmId;
    private String alarmTitle;
    private int alarmYN;
    private String alarmDays;
    private String alarmTime1;
    private String alarmTime2;
    private String alarmTime3;
    private String alarmTime4;
    private String alarmTime5;
    private String alarmDayStart;
    private String alarmDayEnd;
    private List<String> alarmMediList;
    private List<String> tagList;
}
