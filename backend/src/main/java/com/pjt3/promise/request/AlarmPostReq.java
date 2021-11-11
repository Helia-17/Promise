package com.pjt3.promise.request;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class AlarmPostReq {

    private String alarmTitle;
    private int alarmYN;
    private String alarmTime;
    private String alarmDayStart;
    private String alarmDayEnd;
    private List<String> alarmMediList;
    private List<String> tagList;
    private List<String> shareEmail;
}
