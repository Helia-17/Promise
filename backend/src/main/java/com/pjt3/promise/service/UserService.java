package com.pjt3.promise.service;

import java.util.List;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.request.UserInfoPutReq;
import com.pjt3.promise.request.UserInsertPostReq;
import com.pjt3.promise.request.UserProfilePostReq;
import com.pjt3.promise.response.ShareUserGetRes;
import com.pjt3.promise.response.UserInfoGetRes;

public interface UserService {
	User insertUser(UserInsertPostReq userInsertInfo);	
	User getUserByUserEmail(String userEmail);
	User getUserByUserNickname(String userNickname);
	User getUserByRefreshToken(String refreshToken);
	UserInfoGetRes getUserInfo(User user);
	int deleteUser(String userEmail);
	int update(User user, UserInfoPutReq userUpdateInfo);
	int updateProfile(User user, UserProfilePostReq userProfileInfo);
	List<ShareUserGetRes> getShareUserList(String searchKeyword, String userEmail, String userNickname);
}
