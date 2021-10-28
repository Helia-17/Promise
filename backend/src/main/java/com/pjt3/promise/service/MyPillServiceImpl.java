package com.pjt3.promise.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.MediAlarmRepositorySupport;
import com.pjt3.promise.response.MyAlarmHistory;
import com.pjt3.promise.response.MyPillGetRes;
import com.pjt3.promise.response.MyPillHistoryGetRes;

@Service
public class MyPillServiceImpl implements MyPillService {
	
	@Autowired
	MediAlarmRepositorySupport mediAlarmRepositorySupport;

	@Override
	public List<MyPillGetRes> getMyPillList(User user) {
		
		LocalDate now = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		String today = now.format(formatter);
		
		List<MyPillGetRes> alarmList = mediAlarmRepositorySupport.getMyPillList(user, today);
		return alarmList;
	}
	
    private int calcTotalPageCnt(int total, int limit) {
        int totalPageCnt = 0;
        if (total % limit > 0) totalPageCnt = total / limit + 1;
        else totalPageCnt = total / limit;
        return totalPageCnt;
    }


	@Override
	public MyPillHistoryGetRes getMyPillHistoryList(User user, int pageNum) {
		
		MyPillHistoryGetRes myPillHistoryGetRes = new MyPillHistoryGetRes();
		
		int limit = 5;

		int total = mediAlarmRepositorySupport.getTotalCountMyPillHistoryList(user);
		int totalPageCnt = calcTotalPageCnt(total, limit);
		int offset = (pageNum-1)*limit;
		List<MyAlarmHistory> alarmHistoryList = mediAlarmRepositorySupport.getMyPillHistoryList(user, limit, offset);
		
		myPillHistoryGetRes.setTotalPageCnt(totalPageCnt);
		myPillHistoryGetRes.setAlarmHistoryList(alarmHistoryList);

		return myPillHistoryGetRes;

	}

}
