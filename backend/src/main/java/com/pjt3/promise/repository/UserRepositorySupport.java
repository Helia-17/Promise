package com.pjt3.promise.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.QUser;
import com.pjt3.promise.response.ShareUserGetRes;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class UserRepositorySupport {
	
	@Autowired
	private JPAQueryFactory query;
	
	QUser qUser = QUser.user;
	
	public List<ShareUserGetRes> getShareUserList(String searchKeyword){
		List<ShareUserGetRes> shareUserList = query.select(Projections.bean(ShareUserGetRes.class, qUser.userEmail, qUser.userNickname))
				.from(qUser)
				.where(qUser.userEmail.contains(searchKeyword).or(qUser.userNickname.contains(searchKeyword)) ).fetch();
		
		return shareUserList;
		
	}
}
