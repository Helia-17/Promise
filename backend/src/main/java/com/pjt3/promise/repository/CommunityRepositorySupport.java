package com.pjt3.promise.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.QCommunity;
import com.pjt3.promise.response.CommunityDetail;
import com.pjt3.promise.response.CommunityListDetail;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class CommunityRepositorySupport {
	
	@Autowired
    private JPAQueryFactory query;
	
	QCommunity qCommunity = QCommunity.community;
	
	public int getCommunityTotalCount() {
		Long total = query.select(qCommunity.commuId).from(qCommunity).fetchCount();
		return Integer.parseInt(total.toString());
	}
	
	public int getCommunitySearchCount(String searchKeyword) {
		Long total = query.select(qCommunity.commuId).from(qCommunity).where(qCommunity.commuTitle.contains(searchKeyword)).fetchCount();
		return Integer.parseInt(total.toString());
	}
	

	public List<CommunityListDetail> getCommunityDetailList(int limit, int offset) {
		List<CommunityListDetail> communityDetailList = query.select(Projections.bean(CommunityListDetail.class,
    			qCommunity.commuId, qCommunity.user.userNickname, qCommunity.commuTitle, qCommunity.commuDate))
    			.from(qCommunity)
    			.offset(offset)
                .limit(limit)
                .orderBy(qCommunity.commuDate.desc())
                .fetch();
		return communityDetailList;
	}
	
	public List<CommunityListDetail> getCommunitySearchList(int limit, int offset, String searchKeyword) {
		List<CommunityListDetail> communityDetailList = query.select(Projections.bean(CommunityListDetail.class,
    			qCommunity.commuId, qCommunity.user.userNickname, qCommunity.commuTitle, qCommunity.commuDate))
    			.from(qCommunity)
    			.where(qCommunity.commuTitle.contains(searchKeyword))
    			.offset(offset)
                .limit(limit)
                .orderBy(qCommunity.commuDate.desc())
                .fetch();
		return communityDetailList;
	}
	
	public CommunityDetail getCommunityDetail(int commuId) {
		CommunityDetail communityDetail = query.select(Projections.bean(CommunityDetail.class,
	    			qCommunity.user.userNickname, qCommunity.commuTitle, qCommunity.commuContents, qCommunity.commuDate))
	    			.from(qCommunity)
	    			.where(qCommunity.commuId.eq(commuId))
	                .fetchOne();

		return communityDetail;
	}
}
