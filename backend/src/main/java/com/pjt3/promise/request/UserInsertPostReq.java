package com.pjt3.promise.request;

import lombok.Data;

@Data
public class UserInsertPostReq {
	String userEmail;
	String userPassword;
	String userNickname;
	String userProfileUrl;
	String petName;
	int userJoinType;
}
