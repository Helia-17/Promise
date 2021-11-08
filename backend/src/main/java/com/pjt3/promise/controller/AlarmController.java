package com.pjt3.promise.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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

import com.pjt3.promise.common.auth.PMUserDetails;
import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.request.AlarmOCRPostReq;
import com.pjt3.promise.request.AlarmPostReq;
import com.pjt3.promise.request.AlarmPutReq;
import com.pjt3.promise.request.TakeHistoryPostReq;
import com.pjt3.promise.response.AlarmDetailGetRes;
import com.pjt3.promise.response.AlarmGetRes;
import com.pjt3.promise.service.AlarmService;
import com.pjt3.promise.service.PetService;

@CrossOrigin(
        origins = { "http://localhost:3000", "https://k5a201.p.ssafy.io/" },
        allowCredentials = "true",
        allowedHeaders = "*",
        methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT, RequestMethod.OPTIONS })
@RequestMapping("/alarms")
@RestController
public class AlarmController {

    @Autowired
    AlarmService alarmService;
    
    @Autowired
    PetService petService;

    
    @PostMapping()
    public ResponseEntity<?> insertAlarm(Authentication authentication, @RequestBody AlarmPostReq alarmPostReq){
        try {
        	
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();

            int result = 0;
            result = alarmService.insertAlarm(user, alarmPostReq);

            if(result == 1) {			
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "알람 입력 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "알람 입력 실패"));
			}

        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch (Exception e) {
        	return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
    
    
    @PutMapping()
    public ResponseEntity<?> updateAlarm(Authentication authentication, @RequestBody AlarmPutReq alarmPutReq){
    	
    	try {
        	
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();

            int result = 0;
            result = alarmService.updateAlarm(user, alarmPutReq);

            if(result == 1) {			
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "알람 수정 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "알람 수정 실패"));
			}

        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
        } catch (Exception e) {
        	return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
    
    
    @DeleteMapping("/{alarmId}")
    public ResponseEntity<?> deleteAlarm(Authentication authentication, @PathVariable int alarmId){
    	
    	try {

        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();
    		
            int result = 0;
            result = alarmService.deleteAlarm(alarmId);

            if(result == 1) {			
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "알람 삭제 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "알람 삭제 실패"));
			}

        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
        } catch (Exception e) {
        	return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
    
    
    @GetMapping("/detail/{alarmId}")
    public ResponseEntity<?> getAlarmInfo(Authentication authentication, @PathVariable int alarmId){
    	
    	try {
    		
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();

            AlarmDetailGetRes alarmDetailGetRes = alarmService.getAlarmInfo(alarmId);
            
            if(alarmDetailGetRes == null) {
            	return ResponseEntity.status(404).body(BaseResponseBody.of(404, "알람 정보가 존재하지 않습니다."));
            }
            
            return ResponseEntity.status(200).body(alarmDetailGetRes);

        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch (Exception e) {
        	return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
    
    
    @PostMapping("/check")
    public ResponseEntity<?> insertTakeHistory(Authentication authentication, @RequestBody TakeHistoryPostReq takeHistoryPostReq){
    	try {
    		
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();
    		
    		int result = 0;
    		result = alarmService.insertTakeHistory(user, takeHistoryPostReq);
    		
    		if(result == 1) {
    			
    			int result2 = petService.increasePetExp(1, user);
        		if(result2 == 1) {
        			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "복용 이력 등록 성공/경험치 등록 성공"));
        		} else {
        			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "복용 이력 등록 성공/경험치 등록 성공"));
        		}
        		
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "복용 이력 등록 실패"));
			}
    		
    	} catch (NullPointerException e) {
    		return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
    	} catch (Exception e) {
    		return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}

    }
    
    
    @GetMapping()
    public ResponseEntity<?> getProgressAlarmList(Authentication authentication){
    	try {
    		
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();
    		
    		List<AlarmGetRes> alarmList = alarmService.getProgressAlarmList(user);
    		
	        Map<String, List> map = new HashMap<String, List>();
			map.put("alarmList", alarmList);
			
			return ResponseEntity.status(200).body(map);
			
    	} catch (NullPointerException e) {
    		return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
    	} catch (Exception e) {
    		return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}
    }
    
    @GetMapping("/{periodType}")
    public ResponseEntity<?> getPastAlarmList(Authentication authentication, @PathVariable int periodType){
    	try {
    		
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();

    		List<AlarmGetRes> alarmList = alarmService.getPastAlarmList(periodType, user);
    		
	        Map<String, List> map = new HashMap<String, List>();
			map.put("alarmList", alarmList);
			
			return ResponseEntity.status(200).body(map);
			
    	} catch (NullPointerException e) {
    		return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
    	} catch (Exception e) {
    		return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}
    }
    
    
    @PostMapping("/ocr")
    public ResponseEntity<?> getOCRMediList(Authentication authentication, @RequestBody AlarmOCRPostReq alarmOCRPostReq){
    	try {
    		
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();
			
			List<String> mediList = alarmService.getOCRMediList(alarmOCRPostReq.getText());
    		
	        Map<String, List> map = new HashMap<String, List>();
			map.put("mediList", mediList);
			
			return ResponseEntity.status(200).body(map);
			
    	} catch (NullPointerException e) {
    		return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
    	} catch (Exception e) {
    		return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}
    }
}
