package com.pjt3.promise.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoGetRes {
	
	int statusCode;
	String message;
	String userEmail;
	String userNickname;
	String userProfileUrl;
	int userJoinType;
	String refreshToken;
	String petName;
	int petLevel;
	
	public UserInfoGetRes(int statusCode, String message) {
		this.statusCode = statusCode;
		this.message = message;
	}
}
