package com.pjt3.promise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pjt3.promise.repository.VisualRepositorySupport;
import com.pjt3.promise.response.UsersTagGetRes;

@Service
public class VisualServiceimpl implements VisualService {

	@Autowired
	VisualRepositorySupport visualRepositorySupport;
	
	@Override
	public List<UsersTagGetRes> getUsersTagListInfo() {
		// 1) 한 유저의 중복된 태그 처리는?
		// 1-1) 중복 상관없이 모두 카운트 -> 그냥 알람 테이블에서 태그만 싹다 카운트
		// 1-2) 한 유저의 중복된 태그는 하나로 카운트 -> 일단 유저별로 구분한 다음 태그 뽑기
		// 일단 1-1로 결정!
		
		// 9개뽑고 1개를 기타로 빼기
		
		List<UsersTagGetRes> usersTagList = visualRepositorySupport.getUsersTagListInfo();
//		System.out.println(usersTagList.size());
//		for(UsersTagGetRes userTagInfo : usersTagList) System.out.println(userTagInfo.toString());
		return usersTagList;
	}

}
