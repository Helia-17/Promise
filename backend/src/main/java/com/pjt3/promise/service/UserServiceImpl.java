package com.pjt3.promise.service;

import org.springframework.stereotype.Service;

import com.pjt3.promise.entity.User;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Override
	public User insertUser() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getUserByUserEmail(String userEmail) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getUserByUserNickname(String userNickname) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getUserByRefreshToken(String refreshToken) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int deleteUser(String userEmail) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateProfile() {
		// TODO Auto-generated method stub
		return 0;
	}

}
