package com.pjt3.promise.service;

import java.util.List;

import com.pjt3.promise.response.PharmacyGetRes;

public interface PharmacyService {
	List<PharmacyGetRes> getPharmacyListByLatLong(double lat, double lon, int week, String curTime);
}
