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
		int userLoginType = loginInfo.getUserLoginType();
		
		try {
			// 회원 가입 되어 있는 유저
			User user = userService.getUserByUserEmail(userEmail);
			int userJoinType = user.getUserJoinType();
			
			String accessToken = JwtTokenUtil.getToken(userEmail);
			String refreshToken = JwtTokenUtil.getRefreshToken();
			
			// 보내온 userJoinType이 다르면 DB의 userJoinType을 알려주고 로그인 reject
			if (userPassword == "" || userLoginType != userJoinType) {
				if (userJoinType == 1) {
					return new UserLoginPostRes(402, "Google 계정으로 가입된 계정입니다. Google로 계속하기를 시도해주세요.", null, null);		
				}
				else {
					return new UserLoginPostRes(403, "Apple 계정으로 가입된 계정입니다. Apple로 계속하기를 시도해주세요.", null, null);								
				}
			} else {				
				if (passwordEncoder.matches(userPassword, user.getUserPassword())) {
					user.setRefreshToken(refreshToken);
					userRepository.save(user);
					
					return new UserLoginPostRes(200, "로그인에 성공하였습니다.", accessToken, refreshToken);				
				} else {
					return new UserLoginPostRes(401, "잘못된 비밀번호 입니다.", null, null);
				}
			}
			
			
		} catch (NullPointerException e) {
			return new UserLoginPostRes(404, "존재하지 않는 계정입니다.", null, null);
		}
		
	}

	@Override
	public UserLoginPostRes social(UserLoginPostReq loginInfo) {
		String userEmail = loginInfo.getUserEmail();
		String userPassword = loginInfo.getUserPassword();
		int userLoginType = loginInfo.getUserLoginType();
		
		try {
			User user = userService.getUserByUserEmail(userEmail);
			int userJoinType = user.getUserJoinType();
			
			String accessToken = JwtTokenUtil.getToken(userEmail);
			String refreshToken = JwtTokenUtil.getRefreshToken();
			
			if (userLoginType != userJoinType) {
				if (userJoinType == 1) {
					return new UserLoginPostRes(402, "Google 계정으로 가입된 계정입니다. Google로 계속하기를 시도해주세요.", null, null);		
				}
				else if(userJoinType == 2){
					return new UserLoginPostRes(403, "Apple 계정으로 가입된 계정입니다. Apple로 계속하기를 시도해주세요.", null, null);								
				}
				else {
					return new UserLoginPostRes(405, "일반 계정으로 가입된 계정입니다. 일반 로그인을 시도해주세요.", null, null);								
				}
			} else {				
				if (passwordEncoder.matches(userPassword, user.getUserPassword())) {
					user.setRefreshToken(refreshToken);
					userRepository.save(user);
					
					return new UserLoginPostRes(200, "로그인에 성공하였습니다.", accessToken, refreshToken);				
				} else {
					return new UserLoginPostRes(401, "잘못된 비밀번호 입니다.", null, null);
				}
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
