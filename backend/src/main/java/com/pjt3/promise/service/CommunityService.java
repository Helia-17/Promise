package com.pjt3.promise.service;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.response.CommuCommentGetRes;
import com.pjt3.promise.response.CommunityListGetRes;

public interface CommunityService {
    int insertCommunityPost(String commuTitle, String commuContents, User user);
    int updateCommunityPost(int commuId, String commuTitle, String commuContents);
    int deleteCommunityPost(int commuId);
    int insertCommuComment(int commuId, String commentContents, User user);
    int updateCommuComment(int commentId, String commentContents);
    int deleteCommuComment(int commentId);
	CommunityListGetRes getCommunityList(int pageNum);
	CommuCommentGetRes getCommuCommentDetail(int commuId);
	CommunityListGetRes getCommunitySearchList(int pageNum, String searchWord);
}
