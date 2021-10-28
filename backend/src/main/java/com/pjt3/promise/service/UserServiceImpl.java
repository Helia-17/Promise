package com.pjt3.promise.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pjt3.promise.entity.Pet;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.PetRepository;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.request.UserInsertPostReq;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PetRepository petRepository;

	@Override
	public User insertUser(UserInsertPostReq userInsertInfo) {
		User user = new User();
		Pet pet = new Pet();
		
		user.setUserEmail(userInsertInfo.getUserEmail());
		user.setUserNickname(userInsertInfo.getUserNickname());
		user.setUserProfileUrl(userInsertInfo.getUserProfileUrl());
		user.setUserJoinType(userInsertInfo.getUserJoinType());
		
		return userRepository.save(user);
	}

	@Override
	public User getUserByUserEmail(String userEmail) {
		User user = userRepository.findUserByUserEmail(userEmail);
		return user;
	}

	@Override
	public User getUserByUserNickname(String userNickname) {
		User user = userRepository.findUserByUserNickname(userNickname);
		return user;
	}

	@Override
	public User getUserByRefreshToken(String refreshToken) {
		User user = userRepository.findUserByRefreshToken(refreshToken);
		return user;
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
