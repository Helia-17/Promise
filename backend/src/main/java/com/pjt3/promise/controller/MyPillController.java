package com.pjt3.promise.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.response.MyPillGetRes;
import com.pjt3.promise.response.MyPillHistoryGetRes;
import com.pjt3.promise.service.MyPillService;

@CrossOrigin(origins = { "http://localhost:3000",
		"https://k5a201.p.ssafy.io/" }, allowCredentials = "true", allowedHeaders = "*", methods = { RequestMethod.GET,
				RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT, RequestMethod.OPTIONS })
@RequestMapping("/mypills")
@RestController
public class MyPillController {
    
    @Autowired
    MyPillService myPillService;
    
	@GetMapping()
	public ResponseEntity<?> getMyPillList(Authentication authentication) {

		try {

			PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();

			List<MyPillGetRes> alarmList = myPillService.getMyPillList(user);
			
			Map<String, List> map = new HashMap<String, List>();
			map.put("alarmList", alarmList);
			
			return ResponseEntity.status(200).body(map);

		} catch (NullPointerException e) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
		} catch (Exception e) {
			return ResponseEntity.status(404).body(BaseResponseBody.of(500, "Internal Server Error"));
		} 

	}
	
	@GetMapping("/history")
	public ResponseEntity<?> getMyPillHistoryList(Authentication authentication, @RequestParam int pageNum) {
		MyPillHistoryGetRes myPillHistoryGetRes = new MyPillHistoryGetRes();
		try {

			PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();

			myPillHistoryGetRes = myPillService.getMyPillHistoryList(user, pageNum);

			return ResponseEntity.status(200).body(myPillHistoryGetRes);

		} catch (NullPointerException e) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
		} catch (Exception e) {
			return ResponseEntity.status(404).body(BaseResponseBody.of(500, "Internal Server Error"));
		}

	}
}
