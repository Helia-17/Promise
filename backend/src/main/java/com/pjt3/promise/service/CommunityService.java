package com.pjt3.promise.service;

public interface CommunityService {
    int insertCommunityPost(String commuTitle, String commuContents);
    int updateCommunityPost(int commuId, String commuTitle, String commuContents);
    int deleteCommunityPost(int commuId);
    int insertCommuComment(int commuId, String commentContents, String userEmail);
    int updateCommuComment(int commentId, String commentContents);
    int deleteCommuComment(int commentId);
}
