package com.pjt3.promise.request;

import lombok.Data;

@Data
public class CommunitySearchPostReq {
	int pageNum;
	String searchKeyword;
}
