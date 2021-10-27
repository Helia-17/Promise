package com.pjt3.promise.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.response.AlarmShareGetRes;
import com.pjt3.promise.service.AlarmShareService;

@CrossOrigin(
        origins = { "http://localhost:3000", "https://k5a201.p.ssafy.io/" },
        allowCredentials = "true",
        allowedHeaders = "*",
        methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT, RequestMethod.OPTIONS })
@RequestMapping("/sharings")
@RestController
public class AlarmShareController {
	
    static String userEmail = "test2@naver.com";
    
    @Autowired
    AlarmShareService alarmShareService;
    
    @Autowired
    UserRepository userRepository;


	@GetMapping()
	public ResponseEntity<?> getAlarmShareList(){
		try {
			
			User user = userRepository.findUserByUserEmail(userEmail);
	        
	        List<AlarmShareGetRes> alarmShareList = alarmShareService.getAlarmShareList(user);
	        Map<String, List> map = new HashMap<String, List>();
			map.put("alarmShareList", alarmShareList);
			
			return ResponseEntity.status(200).body(map);
			
		} catch (NullPointerException e) {
			return null;
		} catch (Exception e) {
			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}

	}
	
	@DeleteMapping("/accept")
	public ResponseEntity<?> acceptAlarmShare(@RequestParam int asId){
		try {	
	        
			int result = 0;
	        result = alarmShareService.acceptAlarmShare(asId);
			
	        if(result == 1) {			
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "알람 수락 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
			}
			
		} catch (NullPointerException e) {
			return null;
		} catch (Exception e) {
			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}

	}
	
	@DeleteMapping("/reject")
	public ResponseEntity<?> rejectAlarmShare(@RequestParam int alarmId){
		try {	
	        
			int result = 0;
	        result = alarmShareService.rejectAlarmShare(alarmId);
			
	        if(result == 1) {			
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "알람 거절 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
			}
			
		} catch (NullPointerException e) {
			return null;
		} catch (Exception e) {
			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}

	}
	
}
