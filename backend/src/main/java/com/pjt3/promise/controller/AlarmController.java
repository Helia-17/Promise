package com.pjt3.promise.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.request.AlarmPostReq;
import com.pjt3.promise.request.AlarmPutReq;
import com.pjt3.promise.service.AlarmService;

@CrossOrigin(
        origins = { "http://localhost:3000", "https://k5a201.p.ssafy.io/" },
        allowCredentials = "true",
        allowedHeaders = "*",
        methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT, RequestMethod.OPTIONS })
@RequestMapping("/alarms")
@RestController
public class AlarmController {

    static String userEmail = "test1@naver.com";

    @Autowired
    AlarmService alarmService;

    @Autowired
    UserRepository userRepository;

    @PostMapping()
    public ResponseEntity<?> insertAlarm(@RequestBody AlarmPostReq alarmPostReq){
        try {

            int result = 0;
            User user = userRepository.findUserByUserEmail(userEmail);
            result = alarmService.insertAlarm(user, alarmPostReq);

            if(result == 1) {			
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "알람 입력 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "알람 입력 실패"));
			}

        } catch (NullPointerException e) {
            return null;           
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> updateAlarm(@RequestBody AlarmPutReq alarmPutReq){
    	
    	try {

            int result = 0;
            User user = userRepository.findUserByUserEmail(userEmail);
            result = alarmService.updateAlarm(user, alarmPutReq);

            if(result == 1) {			
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "알람 수정 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "알람 수정 실패"));
			}

        } catch (NullPointerException e) {
            return null;           
        }
    }
    
}
