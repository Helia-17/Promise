package com.pjt3.promise.service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pjt3.promise.repository.PharmacyRepositorySupport;
import com.pjt3.promise.response.PharmacyGetRes;

@Service
public class PharmacyServiceImpl implements PharmacyService {

	@Autowired
	PharmacyRepositorySupport pharmacyRepositorySupport;
	
	@Override
	public List<PharmacyGetRes> getPharmacyList(String pharmAddrCity, String pharmAddrGu) {
		
		List<PharmacyGetRes> pharmacyListGetRes = new ArrayList<>();
		pharmacyListGetRes = pharmacyRepositorySupport.getPharmacyList(pharmAddrCity, pharmAddrGu);
		return pharmacyListGetRes;	
	}

}

/*
 * 내 주변 약국 조회
 * 
 *  1. 지도 페이지 접속
 *  2. 현재 위치를 받아냄
 *  3. 현재 위치 위,경도로 city, gu를 얻어서 POST/pharmacies 호출
 */
