package com.pjt3.promise.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.QUser;
import com.pjt3.promise.entity.User;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class UserRepositorySupport {
	
	@Autowired
	private JPAQueryFactory query;
	
	QUser qUser = QUser.user;
	
	public List<User> getShareUserList(String searchKeyword){
		List<User> shareUserList = query.select(Projections.bean(User.class, qUser.userEmail, qUser.userNickname))
				.from(qUser)
				.where(qUser.userEmail.contains(searchKeyword), qUser.userNickname.contains(searchKeyword)).fetch();
		
		return shareUserList;
		
	}
}
