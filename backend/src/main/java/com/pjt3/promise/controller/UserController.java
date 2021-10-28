package com.pjt3.promise.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	// 닉네임 중복 체크 (회원가입 시)
	@GetMapping("/nickname/{userNickname}")
	public ResponseEntity<BaseResponseBody> checkDuplicatedNickname(@PathVariable String userNickname){
		User user = userService.getUserByUserNickname(userNickname);
		if (user != null) {
			return ResponseEntity.status(409).body(BaseResponseBody.of(409, "다른 회원이 사용중인 닉네임입니다."));
		}
		else {
			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "사용할 수 있는 닉네임입니다."));	
		}
	}
	
	// 닉네임 중복 체크 (가입 후 회원정보 수정 시)
	@GetMapping("/me/nickname/{userNickname}")
	public ResponseEntity<BaseResponseBody> checkDuplicatedNicknameUpdate (Authentication authentication, @PathVariable String userNickname){
		try {
			User user = userService.getUserByUserNickname(userNickname);
			PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			String nickName = userDetails.getUser().getUserNickname();
			if (user != null) {
				if(!nickName.equals(userNickname)) {
					return ResponseEntity.status(409).body(BaseResponseBody.of(409, "다른 회원이 사용중인 닉네임입니다."));	
				}
				else {				
					return ResponseEntity.status(200).body(BaseResponseBody.of(200, "현재 회원님이 사용중인 닉네임입니다. (사용할 수 있는 닉네임입니다.)"));	
				}
			}
			else {
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "사용할 수 있는 닉네임입니다."));	
			}
		} catch (NullPointerException e) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
		}
	}
	
	// 회원 탈퇴
	@DeleteMapping()
	public ResponseEntity<BaseResponseBody> deleteUser (Authentication authentication){
		try {
			PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			String userEmail = userDetails.getUsername();
			
			if (userService.deleteUser(userEmail) == 1) {
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "회원탈퇴에 성공하셨습니다."));
			}
			else {
				return ResponseEntity.status(404).body(BaseResponseBody.of(404, "회원탈퇴중에 문제가 발생하였습니다."));			
			}
		} catch (NullPointerException e) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "만료된 토큰입니다."));
		}
	} 
}





























