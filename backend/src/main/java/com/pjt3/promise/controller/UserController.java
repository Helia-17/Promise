package com.pjt3.promise.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.config.RepositoryNameSpaceHandler;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pjt3.promise.common.auth.PMUserDetails;
import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.request.UserInsertPostReq;
import com.pjt3.promise.response.UserInfoGetRes;
import com.pjt3.promise.service.PetService;
import com.pjt3.promise.service.UserService;

@CrossOrigin(
        origins = {"http://localhost:3000", "https://k5a201.p.ssafy.io/"},
        allowCredentials = "true", 
        allowedHeaders = "*", 
        methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.OPTIONS}
)
@RequestMapping("/users")
@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	PetService petService;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	// 회원가입
	@PostMapping()
	public ResponseEntity<BaseResponseBody> insertUser(@RequestBody UserInsertPostReq insertInfo){
		User userGetByEmail = userService.getUserByUserEmail(insertInfo.getUserEmail());
		User userGetByNickname = userService.getUserByUserNickname(insertInfo.getUserNickname());
		if (userGetByEmail != null && userGetByNickname != null) {
			return ResponseEntity.status(411).body(BaseResponseBody.of(411, "Email과 닉네임 모두 사용중입니다."));
		}
		else if (userGetByEmail != null) {
			return ResponseEntity.status(409).body(BaseResponseBody.of(409, "이미 가입된 Email입니다."));
		}
		else if (userGetByNickname != null) {
			return ResponseEntity.status(410).body(BaseResponseBody.of(410, "다른 회원이 사용하고 계신 닉네임입니다."));
		}
		else {
			userService.insertUser(insertInfo);
			petService.insertPet(insertInfo);
			
			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "환영합니다. 회원가입에 성공하셨습니다."));
		}
	}
	
	// 내 정보 조회
	@GetMapping()
	public ResponseEntity<UserInfoGetRes> getUserInfo(Authentication authentication){
		try {
			PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();
			UserInfoGetRes userInfo = userService.getUserInfo(user);
			
			return ResponseEntity.status(200).body(userInfo);
		} catch (NullPointerException e) {
			return ResponseEntity.status(420).body(new UserInfoGetRes(420, "만료된 토큰입니다."));
		}
	}
	
}
