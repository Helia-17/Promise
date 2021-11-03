package com.pjt3.promise.service;

import java.util.List;

import com.pjt3.promise.entity.Pharmacy;
import com.pjt3.promise.response.PharmacyGetRes;

public interface PharmacyService {
//	List<PharmacyGetRes> getPharmacyList(String pharmAddrCity, String pharmAddrGu);
	List<PharmacyGetRes> getPharmacyListByLatLong(double lat, double lon);
}
