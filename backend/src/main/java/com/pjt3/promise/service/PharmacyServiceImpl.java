package com.pjt3.promise.service;

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