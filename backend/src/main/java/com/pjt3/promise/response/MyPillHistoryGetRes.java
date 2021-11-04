package com.pjt3.promise.response;

import java.util.List;

import lombok.Data;

@Data
public class MyPillHistoryGetRes {
	 private List<MyAlarmHistory> alarmHistoryList;
	 int totalPageCnt;

}
