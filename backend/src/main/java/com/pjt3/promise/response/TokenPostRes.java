package com.pjt3.promise.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TokenPostRes {
	int statusCode;
	String message;
	String accessToken;
	String refreshToken;
}
