package com.pjt3.promise.response;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class CommuCommentGetRes {
	String userNickname;	// 게시자 닉네임
	String commuTitle;		// 게시글 제목
	Date commuDate;		// 게시 일자
	String commuContents;	// 게시글 내용
	List<CommuCommentDetail> commuCommentDetailList;		// 해당 게시글 댓글 리스트
}
