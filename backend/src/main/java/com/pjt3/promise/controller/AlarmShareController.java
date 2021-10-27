package com.pjt3.promise.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	
}
