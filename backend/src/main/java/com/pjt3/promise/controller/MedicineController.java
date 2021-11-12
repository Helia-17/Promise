package com.pjt3.promise.controller;

import com.pjt3.promise.common.auth.PMUserDetails;
import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.response.MediDetailGetRes;
import com.pjt3.promise.response.MediGetRes;
import com.pjt3.promise.response.MediSearchGetRes;
import com.pjt3.promise.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(
        origins = { "http://localhost:3000", "https://k5a201.p.ssafy.io/" },
        allowCredentials = "true",
        allowedHeaders = "*",
        methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT, RequestMethod.OPTIONS })
@RequestMapping("/medicines")
@RestController
public class MedicineController {

    @Autowired
    MedicineService medicineService;

    @GetMapping("/alarm")
    public ResponseEntity<?> getMediAutoSearchList(Authentication authentication, @RequestParam String searchKeyword){
        try {
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
            User user = userDetails.getUser();
        	
            List<MediGetRes> mediList = medicineService.getMediAutoListInfo(searchKeyword);

//            Map<String, List> map = new HashMap<String, List>();
//            map.put("mediList", mediList);

            return ResponseEntity.status(200).body(mediList);
        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch(Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> getMediSearchList(Authentication authentication, @RequestParam String searchKeyword){
        try {
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
            User user = userDetails.getUser();
        	
            List<MediSearchGetRes> mediList = medicineService.getMediSearchListInfo(searchKeyword);

            Map<String, List> map = new HashMap<String, List>();
            map.put("mediList", mediList);

            return ResponseEntity.status(200).body(map);
        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch(Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @GetMapping("/detail/{mediSerialNum}")
    public ResponseEntity<?> getMediDetailList(Authentication authentication, @PathVariable String mediSerialNum){
        try {
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
            User user = userDetails.getUser();
        	
        	MediDetailGetRes mediInfo = medicineService.getMediDetailInfo(mediSerialNum);

            return ResponseEntity.status(200).body(mediInfo);
        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch(Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
}
