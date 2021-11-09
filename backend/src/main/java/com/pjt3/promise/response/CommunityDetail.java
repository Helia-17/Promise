package com.pjt3.promise.response;

import java.util.Date;

import lombok.Data;

@Data
public class CommunityDetail {
	String userNickname;	// 게시자 닉네임
	String commuTitle;		// 게시글 제목
	String commuContents;	// 게시 일자
	Date commuDate;		// 게시 일자
}
