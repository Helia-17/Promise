package com.pjt3.promise.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pjt3.promise.common.util.JwtTokenUtil;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.request.TokenPostReq;
import com.pjt3.promise.request.UserLoginPostReq;
import com.pjt3.promise.response.TokenPostRes;
import com.pjt3.promise.response.UserLoginPostRes;
import com.pjt3.promise.service.AuthService;
import com.pjt3.promise.service.UserService;

@CrossOrigin(
        origins = {"http://localhost:3000", "https://k5a201.p.ssafy.io/"},
        allowCredentials = "true", 
        allowedHeaders = "*", 
        methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.OPTIONS}
)
@RequestMapping("/auth")
@RestController
public class AuthController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	AuthService authService;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/login")
	public ResponseEntity<UserLoginPostRes> login(@RequestBody UserLoginPostReq loginInfo){
		UserLoginPostRes userLoginPostRes = authService.login(loginInfo);
		int statusCode = userLoginPostRes.getStatusCode();
		
		return ResponseEntity.status(statusCode).body(userLoginPostRes);
	}

	@PostMapping("/social")
	public ResponseEntity<UserLoginPostRes> social(@RequestBody UserLoginPostReq loginInfo){
		UserLoginPostRes userLoginPostRes = authService.social(loginInfo);
		int statusCode = userLoginPostRes.getStatusCode();
		
		return ResponseEntity.status(statusCode).body(userLoginPostRes);
	}
	
	@PostMapping("/reissue")
	public ResponseEntity<TokenPostRes> reissue(@RequestBody TokenPostReq refreshToken){
		return ResponseEntity.status(200).body(authService.reissue(refreshToken));
	}
	
}
