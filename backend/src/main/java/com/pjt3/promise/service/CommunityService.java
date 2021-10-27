package com.pjt3.promise.service;

import com.pjt3.promise.entity.User;

public interface CommunityService {
    int insertCommunityPost(String commuTitle, String commuContents, String userEmail);
    // int insertCommunityPost(String commuTitle, String commuContents, User user);
    int updateCommunityPost(int commuId, String commuTitle, String commuContents);
    int deleteCommunityPost(int commuId);
    int insertCommuComment(int commuId, String commentContents, String userEmail);
    // int insertCommuComment(int commuId, String commentContents, User user);
    int updateCommuComment(int commentId, String commentContents);
    int deleteCommuComment(int commentId);
}
