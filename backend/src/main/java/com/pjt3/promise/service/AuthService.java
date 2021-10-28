package com.pjt3.promise.service;

import com.pjt3.promise.request.UserLoginPostReq;
import com.pjt3.promise.response.UserLoginPostRes;

public interface AuthService {
	UserLoginPostRes login(UserLoginPostReq loginInfo);
	
}
