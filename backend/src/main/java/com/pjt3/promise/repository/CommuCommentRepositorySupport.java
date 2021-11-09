package com.pjt3.promise.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.QCommunityComment;
import com.pjt3.promise.response.CommuCommentDetail;
import com.pjt3.promise.response.CommunityDetail;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class CommuCommentRepositorySupport {
	
	@Autowired
    private JPAQueryFactory query;
	
	QCommunityComment qCommunityComment = QCommunityComment.communityComment;

	public List<CommuCommentDetail> getCommuCommentDetailList(int commuId) {
		System.out.println("support-getCommuCommentDetailList");
		List<CommuCommentDetail> commuCommentDetailList = query.select(Projections.bean(CommuCommentDetail.class,
				qCommunityComment.user.userNickname, qCommunityComment.commentContents, qCommunityComment.commentDate))
    			.from(qCommunityComment)
    			.where(qCommunityComment.community.commuId.eq(commuId))
                .fetch();
		return commuCommentDetailList;
	}
	
	
}
