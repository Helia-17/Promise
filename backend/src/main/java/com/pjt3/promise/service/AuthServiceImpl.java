package com.pjt3.promise.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pjt3.promise.common.auth.JwtAuthenticationFilter;
import com.pjt3.promise.common.util.JwtTokenUtil;
import com.pjt3.promise.common.util.RedisUtil;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.request.UserLoginPostReq;
import com.pjt3.promise.response.UserLoginPostRes;

@Service("AuthService")
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	UserService userService;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RedisUtil redisUtil;
	
	JwtAuthenticationFilter jwtAuthenticationFilter;

	@Override
	public UserLoginPostRes login(UserLoginPostReq loginInfo) {
		String userEmail = loginInfo.getUserEmail();
		
		try {
			User user = userService.getUserByUserEmail(userEmail);
			
			String accessToken = JwtTokenUtil.getToken(userEmail);
			String refreshToken = JwtTokenUtil.getRefreshToken();
			
			// userRepository 에 Redis로 accessToken, refreshToken 저장.
			redisUtil.setData(userEmail, refreshToken);
			
			return new UserLoginPostRes(200, "로그인에 성공하였습니다.", accessToken, refreshToken);
			
		} catch (NullPointerException e) {
			return new UserLoginPostRes(404, "존재하지 않는 계정입니다.", null, null);
		}
		
		
	}

}
