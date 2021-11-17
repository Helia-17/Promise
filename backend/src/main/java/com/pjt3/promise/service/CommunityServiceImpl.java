package com.pjt3.promise.service;

import com.pjt3.promise.entity.Community;
import com.pjt3.promise.entity.CommunityComment;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.CommuCommentRepository;
import com.pjt3.promise.repository.CommuCommentRepositorySupport;
import com.pjt3.promise.repository.CommunityRepository;
import com.pjt3.promise.repository.CommunityRepositorySupport;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.response.CommuCommentDetail;
import com.pjt3.promise.response.CommuCommentGetRes;
import com.pjt3.promise.response.CommunityDetail;
import com.pjt3.promise.response.CommunityListDetail;
import com.pjt3.promise.response.CommunityListGetRes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CommunityServiceImpl implements CommunityService{

    private static final String CommuCommentDetail = null;

	@Autowired
    UserRepository userRepository;

    @Autowired
    CommunityRepository communityRepository;

    @Autowired
    CommunityRepositorySupport communityRepositorySupport;
    
    @Autowired
    CommuCommentRepository commuCommentRepository;

    @Autowired
    CommuCommentRepositorySupport commuCommentRepositorySupport;
    
    @Override
    public int insertCommunityPost(String commuTitle, String commuContents, User user) {
        try {
            Community community = new Community();
            community.setCommuTitle(commuTitle);
            community.setCommuContents(commuContents);
            community.setUser(user);
            communityRepository.save(community);
            return 1;
        } catch(Exception e) {
            return -1;
        }
    }

    @Override
    public int updateCommunityPost(int commuId, String commuTitle, String commuContents) {
        try {
            Community community = communityRepository.findCommunityByCommuId(commuId);
            community.setCommuTitle(commuTitle);
            community.setCommuContents(commuContents);
            communityRepository.save(community);
            return 1;
        } catch(Exception e) {
            return -1;
        }
    }

    @Transactional
    @Override
    public int deleteCommunityPost(int commuId) {
        try {
            communityRepository.deleteByCommuId(commuId);
            return 1;
        } catch(Exception e) {
            return -1;
        }
    }

    @Override
    public int insertCommuComment(int commuId, String commentContents, User user) {
        try {
            CommunityComment commuComment = new CommunityComment();
            commuComment.setCommentContents(commentContents);
            commuComment.setCommunity(communityRepository.findCommunityByCommuId(commuId));
            commuComment.setUser(user);
            commuCommentRepository.save(commuComment);
            return 1;
        } catch(Exception e) {
            return -1;
        }
    }

    @Override
    public int updateCommuComment(int commentId, String commentContents) {
        try {
            CommunityComment commuComment = commuCommentRepository.findCommunityCommentByCommentId(commentId);
            commuComment.setCommentContents(commentContents);
            commuCommentRepository.save(commuComment);
            return 1;
        } catch(Exception e) {
            return -1;
        }
    }

    @Transactional
    @Override
    public int deleteCommuComment(int commentId) {
        try {
            commuCommentRepository.deleteByCommentId(commentId);
            return 1;
        } catch(Exception e) {
            return -1;
        }
    }

	@Override
	public CommunityListGetRes getCommunityList(int pageNum) {
		CommunityListGetRes communityListGetRes = new CommunityListGetRes();
		
		int limit = 8;
		
		int total = communityRepositorySupport.getCommunityTotalCount();
		int totalPageCnt = calcTotalPageCnt(total, limit);
		int offset = (pageNum-1)*limit;
		
		List<CommunityListDetail> communityDetailList = communityRepositorySupport.getCommunityDetailList(limit, offset);
		
		communityListGetRes.setTotalPageCnt(totalPageCnt);
		communityListGetRes.setCommunityDetailList(communityDetailList);

		return communityListGetRes;
	}
	
	@Override
	public CommuCommentGetRes getCommuCommentDetail(int commuId) {	
		CommuCommentGetRes commuCommentGetRes = new CommuCommentGetRes();
		CommunityDetail communityDetail = communityRepositorySupport.getCommunityDetail(commuId);
		commuCommentGetRes.setUserNickname(communityDetail.getUserNickname());
		commuCommentGetRes.setCommuTitle(communityDetail.getCommuTitle());
		commuCommentGetRes.setCommuContents(communityDetail.getCommuContents());
		commuCommentGetRes.setCommuDate(communityDetail.getCommuDate());
			
		List<CommuCommentDetail> commentDetailList = commuCommentRepositorySupport.getCommuCommentDetailList(commuId);
		commuCommentGetRes.setCommuCommentDetailList(commentDetailList);

		return commuCommentGetRes;
	}
	
	@Override
	public CommunityListGetRes getCommunitySearchList(int pageNum, String searchWord) {
		CommunityListGetRes communityListGetRes = new CommunityListGetRes();
		
		int limit = 8;
		
		int total = communityRepositorySupport.getCommunitySearchCount(searchWord);
		int totalPageCnt = calcTotalPageCnt(total, limit);
		int offset = (pageNum-1)*limit;
		
		List<CommunityListDetail> communityDetailList = communityRepositorySupport.getCommunitySearchList(limit, offset, searchWord);
		
		communityListGetRes.setTotalPageCnt(totalPageCnt);
		communityListGetRes.setCommunityDetailList(communityDetailList);

		return communityListGetRes;
	}
	
	private int calcTotalPageCnt(int total, int limit) {
        int totalPageCnt = 0;
        if (total % limit > 0) totalPageCnt = total / limit + 1;
        else totalPageCnt = total / limit;
        return totalPageCnt;
    }

}
