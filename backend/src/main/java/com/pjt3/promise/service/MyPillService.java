package com.pjt3.promise.service;

import java.util.List;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.response.MyAlarmHistory;
import com.pjt3.promise.response.MyPillGetRes;
import com.pjt3.promise.response.MyPillHistoryGetRes;

public interface MyPillService {

	List<MyPillGetRes> getMyPillList(User user);

	MyPillHistoryGetRes getMyPillHistoryList(User user, int pageNum);

}
