package com.pjt3.promise.response;

import java.util.List;

import lombok.Data;

@Data
public class CommunityListGetRes {
	 List<CommunityListDetail> CommunityDetailList;
	 int totalPageCnt;
}
