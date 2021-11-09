package com.pjt3.promise.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.pjt3.promise.entity.Pet;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.PetRepository;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.repository.UserRepositorySupport;
import com.pjt3.promise.request.UserInfoPutReq;
import com.pjt3.promise.request.UserInsertPostReq;
import com.pjt3.promise.request.UserProfilePostReq;
import com.pjt3.promise.response.ShareUserGetRes;
import com.pjt3.promise.response.UserInfoGetRes;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PetRepository petRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	UserRepositorySupport userRepositorySupport;

	@Override
	public User insertUser(UserInsertPostReq userInsertInfo) {
		User user = new User();
		
		user.setUserEmail(userInsertInfo.getUserEmail());
		user.setUserPassword(passwordEncoder.encode(userInsertInfo.getUserPassword()));
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
		return userRepository.deleteUserByUserEmail(userEmail);
	}

	@Override
	public int update(User user, UserInfoPutReq userUpdateInfo) {
		try {
			String userNickname = userUpdateInfo.getUserNickname();
			String petName = userUpdateInfo.getPetName();
			Pet pet = petRepository.findPetByUser(user);
			
			if (userRepository.findUserByUserNickname(userNickname) != null &&
					user.getUserNickname().equals(userNickname)) {
						return 2;
					}

			pet.setPetName(petName);
			
			userUpdateInfo.setUserNickname(userNickname);
			BeanUtils.copyProperties(userUpdateInfo, user);
			userRepository.save(user);
			return 1;
			
		} catch(Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

	@Override
	public int updateProfile(User user, UserProfilePostReq userProfileInfo) {
		try {
			String userProfileUrl = userProfileInfo.getUserProfileUrl();
			user.setUserProfileUrl(userProfileUrl);
			userRepository.save(user);
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

	@Override
	public UserInfoGetRes getUserInfo(User user) {
		UserInfoGetRes userInfo = new UserInfoGetRes();
		Pet pet = petRepository.findPetByUser(user);
		
		userInfo.setStatusCode(200);
		userInfo.setMessage("조회에 성공했습니다.");
		userInfo.setPetName(pet.getPetName());
		userInfo.setPetLevel(pet.getPetLevel());
		
		BeanUtils.copyProperties(user, userInfo);
		
		return userInfo;
	}

	@Override
	public List<ShareUserGetRes> getShareUserList(String searchKeyword) {
		List<ShareUserGetRes> shareUserList = userRepositorySupport.getShareUserList(searchKeyword);
		return shareUserList;
	}

}
