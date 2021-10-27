package com.pjt3.promise.controller;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.request.AlarmPostReq;
import com.pjt3.promise.service.AlarmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

        } catch (NullPointerException e) {

        }
        return null;
    }
}
