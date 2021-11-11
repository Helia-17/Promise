package com.pjt3.promise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pjt3.promise.common.auth.PMUserDetails;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.response.PharmacyGetRes;
import com.pjt3.promise.service.PharmacyService;

@CrossOrigin(
        origins = {"http://localhost:3000", "https://k5a201.p.ssafy.io/"},
        allowCredentials = "true", 
        allowedHeaders = "*", 
        methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.OPTIONS}
)
@RequestMapping("/pharmacies")
@RestController
public class PharmacyController {
	
	@Autowired
	PharmacyService pharmacyService;
	
	@GetMapping("")
	public ResponseEntity<List<PharmacyGetRes>> getPharmacyListByLatLon(Authentication authentication, @RequestParam double lat, double lon, int week, String curTime){
		try {
			PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();
			List<PharmacyGetRes> pharmacyList = pharmacyService.getPharmacyListByLatLong(lat, lon, week, curTime);
			
			if (pharmacyList.size() == 0) {
				return ResponseEntity.status(400).body(pharmacyList);
			}
			
			return ResponseEntity.status(200).body(pharmacyList);
			
		} catch(NullPointerException e) {
			e.printStackTrace();
			return ResponseEntity.status(420).body(null);
		}
	}
	
}
