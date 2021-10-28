package com.pjt3.promise.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
import com.pjt3.promise.request.TakeHistoryPostReq;
import com.pjt3.promise.response.AlarmDetailGetRes;
import com.pjt3.promise.response.AlarmGetRes;
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
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
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
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
			}

        } catch (NullPointerException e) {
            return null;           
        }
    }
    
    
    @DeleteMapping("/{alarmId}")
    public ResponseEntity<?> deleteAlarm(@PathVariable int alarmId){
    	
    	try {

            int result = 0;

            result = alarmService.deleteAlarm(alarmId);

            if(result == 1) {			
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "알람 삭제 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
			}

        } catch (NullPointerException e) {
            return null;           
        }
    }
    
    
    @GetMapping("/detail/{alarmId}")
    public ResponseEntity<?> getAlarmInfo(@PathVariable int alarmId){
    	
    	try {

            AlarmDetailGetRes alarmDetailGetRes = alarmService.getAlarmInfo(alarmId);
            if(alarmDetailGetRes == null) {
            	return ResponseEntity.status(404).body(BaseResponseBody.of(404, "알람 정보가 존재하지 않습니다."));
            }
            return ResponseEntity.status(200).body(alarmDetailGetRes);

        } catch (NullPointerException e) {
            return null;           
        } catch (Exception e) {
        	return ResponseEntity.status(404).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
    
    
    @PostMapping("/check")
    public ResponseEntity<?> insertTakeHistory(@RequestBody TakeHistoryPostReq takeHistoryPostReq){
    	try {
    		
    		int result = 0;
    		User user = userRepository.findUserByUserEmail(userEmail);
    		
    		result = alarmService.insertTakeHistory(user, takeHistoryPostReq);
    		
    		if(result == 1) {			
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "복용 이력 등록 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
			}
    		
    	} catch (NullPointerException e) {
    		return null;
    	} catch (Exception e) {
    		return ResponseEntity.status(404).body(BaseResponseBody.of(500, "Internal Server Error"));
		}

    }
    
    
    @GetMapping()
    public ResponseEntity<?> getProgressAlarmList(){
    	try {
    		
    		User user = userRepository.findUserByUserEmail(userEmail);
    		
    		List<AlarmGetRes> alarmList = alarmService.getProgressAlarmList(user);
	        Map<String, List> map = new HashMap<String, List>();
			map.put("alarmList", alarmList);
			return ResponseEntity.status(200).body(map);
			
    	} catch (NullPointerException e) {
    		return null;
    	} catch (Exception e) {
    		return ResponseEntity.status(404).body(BaseResponseBody.of(500, "Internal Server Error"));
		}
    }
    
    @GetMapping("/{periodType}")
    public ResponseEntity<?> getPastAlarmList(@PathVariable int periodType){
    	try {
    		
    		User user = userRepository.findUserByUserEmail(userEmail);

    		List<AlarmGetRes> alarmList = alarmService.getPastAlarmList(periodType, user);
	        Map<String, List> map = new HashMap<String, List>();
			map.put("alarmList", alarmList);
			return ResponseEntity.status(200).body(map);
			
    	} catch (NullPointerException e) {
    		return null;
    	} catch (Exception e) {
    		return ResponseEntity.status(404).body(BaseResponseBody.of(500, "Internal Server Error"));
		}
    }
    
}
