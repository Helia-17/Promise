package com.pjt3.promise.request;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class AlarmPutReq {
	private int alarmId;
    private String alarmTitle;
    private int alarmYN;
    private String alarmTime;
    private String alarmDayStart;
    private String alarmDayEnd;
    private List<String> alarmMediList;
    private List<String> tagList;
}
