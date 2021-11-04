package com.pjt3.promise.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pjt3.promise.entity.Pharmacy;
import com.pjt3.promise.repository.PharmacyRepository;
import com.pjt3.promise.repository.PharmacyRepositorySupport;
import com.pjt3.promise.response.PharmacyGetRes;

@Service
public class PharmacyServiceImpl implements PharmacyService {
	
	@Autowired
	PharmacyRepository pharmacyRepository;
	
	@Autowired
	PharmacyRepositorySupport pharmacyRepositorySupport;
	

	@Override
	public List<PharmacyGetRes> getPharmacyListByLatLong(double lat, double lon) {
		List<PharmacyGetRes> pharmacyListGetRes = new ArrayList<>();
		List<Pharmacy> pharmacyList = new ArrayList<>();
		
		pharmacyList = pharmacyRepositorySupport.getPharmacyList(lat, lon);
		
		for (Pharmacy pharmacy : pharmacyList) {
			PharmacyGetRes pharmacyGetRes = new PharmacyGetRes();
			
			pharmacyGetRes.setPharmId(pharmacy.getPharmId());
			pharmacyGetRes.setPharmName(pharmacy.getPharmName());
			pharmacyGetRes.setPharmAddr(pharmacy.getPharmAddr());
			pharmacyGetRes.setPharmTel(pharmacy.getPharmTel());
			pharmacyGetRes.setPharmLat(pharmacy.getPharmLat());
			pharmacyGetRes.setPharmLong(pharmacy.getPharmLong());
			
			pharmacyListGetRes.add(pharmacyGetRes);
		}
		
		return pharmacyListGetRes;
	}

}