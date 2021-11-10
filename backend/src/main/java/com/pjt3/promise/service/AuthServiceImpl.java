package com.pjt3.promise.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.pjt3.promise.common.auth.JwtAuthenticationFilter;
import com.pjt3.promise.common.util.JwtTokenUtil;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.request.TokenPostReq;
import com.pjt3.promise.request.UserLoginPostReq;
import com.pjt3.promise.response.TokenPostRes;
import com.pjt3.promise.response.UserLoginPostRes;

@Service("AuthService")
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	UserService userService;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	JwtAuthenticationFilter jwtAuthenticationFilter;

	@Override
	public UserLoginPostRes login(UserLoginPostReq loginInfo) {
		String userEmail = loginInfo.getUserEmail();
		String userPassword = loginInfo.getUserPassword();
		
		try {
			User user = userService.getUserByUserEmail(userEmail);
			
			String accessToken = JwtTokenUtil.getToken(userEmail);
			String refreshToken = JwtTokenUtil.getRefreshToken();
			
			if (passwordEncoder.matches(userPassword, user.getUserPassword())) {
				user.setRefreshToken(refreshToken);
				userRepository.save(user);
				
				return new UserLoginPostRes(200, "로그인에 성공하였습니다.", accessToken, refreshToken);				
			} else {
				return new UserLoginPostRes(401, "잘못된 비밀번호 입니다.", null, null);
			}
			
			
		} catch (NullPointerException e) {
			return new UserLoginPostRes(404, "존재하지 않는 계정입니다.", null, null);
		}
		
	}

	@Override
	public TokenPostRes reissue(TokenPostReq refreshToken) {
		String token = refreshToken.getRefreshToken();
		if (JwtTokenUtil.validateToken(token)) {
			User user = userService.getUserByRefreshToken(token);
			if (user == null) {
				return new TokenPostRes(420, "올바른 사용자가 아닙니다.", null, null);
			}
			String userEmail = user.getUserEmail();
			
			String newAccessToken = JwtTokenUtil.getToken(userEmail);
			String newRefreshToken = JwtTokenUtil.getRefreshToken();
			
			user.setRefreshToken(newRefreshToken);
			userRepository.save(user);
			
			TokenPostRes tokenPostRes = new TokenPostRes(200, "토큰 재발급", newAccessToken, newRefreshToken);
			return tokenPostRes;
		}
		TokenPostRes tokenPostRes = new TokenPostRes(421, "만료된 토큰. 재 로그인 필요", null, null);
		return tokenPostRes;
	}
	
	

}
