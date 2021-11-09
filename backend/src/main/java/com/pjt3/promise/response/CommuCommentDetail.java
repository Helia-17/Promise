package com.pjt3.promise.response;

import java.util.Date;

import lombok.Data;

@Data
public class CommuCommentDetail {
	String userNickname;		// 댓글 작성자 닉네임	
	String commentContents;		// 댓글 내용
	Date commentDate;			// 댓글 작성 일자
}
