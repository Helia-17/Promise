package com.pjt3.promise.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.Pharmacy;
import com.pjt3.promise.entity.QPharmacy;

@Repository
public class PharmacyRepositorySupport {
	
	@Autowired
	PharmacyRepository pharmacyRepository;
	
	QPharmacy qPharmacy = QPharmacy.pharmacy;

	LocalDate nowDate = LocalDate.now();
	
	LocalTime nowTime = LocalTime.now();
	
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HHmm");
	
	public List<Pharmacy> getPharmacyList(double lat, double lon){
		
		List<Pharmacy> pharmacyList = new ArrayList<>();
		
		int week = nowDate.getDayOfWeek().getValue();
		String curTime = nowTime.format(formatter);
		System.out.println("curTime : " + curTime);
		
		// 월
		if (week == 1) {
			pharmacyList = pharmacyRepository.findByLatLongMon(lat, lon, curTime);
		}
		
		// 화
		else if (week == 2) {
			pharmacyList = pharmacyRepository.findByLatLongTue(lat, lon, curTime);
		}
		
		// 수
		else if (week == 3) {
			pharmacyList = pharmacyRepository.findByLatLongWed(lat, lon, curTime);
		}
		
		// 목
		else if (week == 4) {
			pharmacyList = pharmacyRepository.findByLatLongThu(lat, lon, curTime);
		}
		
		// 금
		else if (week == 5) {
			pharmacyList = pharmacyRepository.findByLatLongFri(lat, lon, curTime);
		}
		
		// 토
		else if (week == 6) {
			pharmacyList = pharmacyRepository.findByLatLongSat(lat, lon, curTime);
		}
		
		// 일
		else {
			pharmacyList = pharmacyRepository.findByLatLongSun(lat, lon, curTime);
		}
		
		return pharmacyList;
	}
	
}
