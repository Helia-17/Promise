package com.pjt3.promise.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.QPharmacy;
import com.pjt3.promise.response.PharmacyGetRes;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class PharmacyRepositorySupport {
	
	@Autowired
	private JPAQueryFactory query;
	
	QPharmacy qPharmacy = QPharmacy.pharmacy;

	LocalDate nowDate = LocalDate.now();
	
	LocalTime nowTime = LocalTime.now();
	
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HHss");
	
	public List<PharmacyGetRes> getPharmacyList(String pharmAddrCity, String pharmAddrGu) {
		
		int week = nowDate.getDayOfWeek().getValue();
		String curTime = nowTime.format(formatter);
			
		// 월
		if (week == 1) {
			List<PharmacyGetRes> pharmacyList = query.select(Projections.bean(PharmacyGetRes.class, 
					qPharmacy.pharmId, qPharmacy.pharmName, qPharmacy.pharmTel, qPharmacy.pharmAddr, qPharmacy.pharmLat, qPharmacy.pharmLong))
					.from(qPharmacy)
					.where(qPharmacy.pharmAddrCity.contains(pharmAddrCity), qPharmacy.pharmAddrGu.contains(pharmAddrGu),
							qPharmacy.monOpenTime.loe(curTime), qPharmacy.monCloseTime.goe(curTime)).fetch();
			return pharmacyList;
		}
		
		// 화
		else if (week == 2) {
			List<PharmacyGetRes> pharmacyList = query.select(Projections.bean(PharmacyGetRes.class, 
					qPharmacy.pharmId, qPharmacy.pharmName, qPharmacy.pharmTel, qPharmacy.pharmAddr, qPharmacy.pharmLat, qPharmacy.pharmLong))
					.from(qPharmacy)
					.where(qPharmacy.pharmAddrCity.contains(pharmAddrCity), qPharmacy.pharmAddrGu.contains(pharmAddrGu),
							qPharmacy.tueOpenTime.loe(curTime), qPharmacy.tueCloseTime.goe(curTime)).fetch();
			return pharmacyList;
		}
		
		// 수
		else if (week == 3) {
			List<PharmacyGetRes> pharmacyList = query.select(Projections.bean(PharmacyGetRes.class, 
					qPharmacy.pharmId, qPharmacy.pharmName, qPharmacy.pharmTel, qPharmacy.pharmAddr, qPharmacy.pharmLat, qPharmacy.pharmLong))
					.from(qPharmacy)
					.where(qPharmacy.pharmAddrCity.contains(pharmAddrCity), qPharmacy.pharmAddrGu.contains(pharmAddrGu),
							qPharmacy.wedOpenTime.loe(curTime), qPharmacy.wedCloseTime.goe(curTime)).fetch();
			return pharmacyList;
		}
		
		// 목
		else if (week == 4) {
			List<PharmacyGetRes> pharmacyList = query.select(Projections.bean(PharmacyGetRes.class, 
					qPharmacy.pharmId, qPharmacy.pharmName, qPharmacy.pharmTel, qPharmacy.pharmAddr, qPharmacy.pharmLat, qPharmacy.pharmLong))
					.from(qPharmacy)
					.where(qPharmacy.pharmAddrCity.contains(pharmAddrCity), qPharmacy.pharmAddrGu.contains(pharmAddrGu),
							qPharmacy.thuOpenTime.loe(curTime), qPharmacy.thuCloseTime.goe(curTime)).fetch();
			return pharmacyList;
		}
		
		// 금
		else if (week == 5) {
			List<PharmacyGetRes> pharmacyList = query.select(Projections.bean(PharmacyGetRes.class, 
					qPharmacy.pharmId, qPharmacy.pharmName, qPharmacy.pharmTel, qPharmacy.pharmAddr, qPharmacy.pharmLat, qPharmacy.pharmLong))
					.from(qPharmacy)
					.where(qPharmacy.pharmAddrCity.contains(pharmAddrCity), qPharmacy.pharmAddrGu.contains(pharmAddrGu),
							qPharmacy.friOpenTime.loe(curTime), qPharmacy.friCloseTime.goe(curTime)).fetch();
			return pharmacyList;
		}
		
		// 토
		else if (week == 6) {
			List<PharmacyGetRes> pharmacyList = query.select(Projections.bean(PharmacyGetRes.class, 
					qPharmacy.pharmId, qPharmacy.pharmName, qPharmacy.pharmTel, qPharmacy.pharmAddr, qPharmacy.pharmLat, qPharmacy.pharmLong))
					.from(qPharmacy)
					.where(qPharmacy.pharmAddrCity.contains(pharmAddrCity), qPharmacy.pharmAddrGu.contains(pharmAddrGu),
							qPharmacy.satOpenTime.loe(curTime), qPharmacy.satCloseTime.goe(curTime)).fetch();
			return pharmacyList;
		}
		
		// 일
		else {
			List<PharmacyGetRes> pharmacyList = query.select(Projections.bean(PharmacyGetRes.class, 
					qPharmacy.pharmId, qPharmacy.pharmName, qPharmacy.pharmTel, qPharmacy.pharmAddr, qPharmacy.pharmLat, qPharmacy.pharmLong))
					.from(qPharmacy)
					.where(qPharmacy.pharmAddrCity.contains(pharmAddrCity), qPharmacy.pharmAddrGu.contains(pharmAddrGu),
							qPharmacy.sunOpenTime.loe(curTime), qPharmacy.sunCloseTime.goe(curTime)).fetch();
			return pharmacyList;
		}
	}
}
