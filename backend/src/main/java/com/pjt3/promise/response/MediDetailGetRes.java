package com.pjt3.promise.response;

import lombok.Data;

@Data
public class MediDetailGetRes {
    String mediSerialNum;	// 일련번호
    String mediName;		// 제품명
    String mediCompany;		// 업체명
    String mediImgUrl;		// 약이미지
    String mediIngredient;	// 주성분
    String mediEfficacy;	// 효능
    String mediTakeWay;		// 사용방법
    String mediPrecautionsBefore;	// 사용전주의사항
    String mediPrecautionsAfter;	// 사용상주의사항
    String mediNotWith;		// 사용동안주의약/음식
    String mediAllergy;		// 주의이상반응
    String mediStoreWay;	// 보관방법
    int mediElderlyCare;	// 노인주의
    int mediPregnancyCare;	// 임부금기
    int mediAgeCare;		// 특정연령금기
    String mediClass;		// 분류명
}
