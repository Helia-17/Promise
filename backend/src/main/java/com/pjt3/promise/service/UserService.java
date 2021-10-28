package com.pjt3.promise.service;

import com.pjt3.promise.entity.User;

public interface UserService {
	User insertUser();
//	User insertUser(UserRegisterPostReq userRegisterInfo);
	
	User getUserByUserEmail(String userEmail);
	User getUserByUserNickname(String userNickname);
	User getUserByRefreshToken(String refreshToken);
	
//	UserInfoGetRes getUserInfo(User user);
	
	int deleteUser(String userEmail);
	
	int update();
	int updateProfile();
//	int update(User user, UserInfoPutReq userUpdateInfo);
//	int updateProfile(User user, UserProfilePostReq userProfileInfo);
}
