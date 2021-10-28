package com.pjt3.promise.controller;

import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.entity.Medicine;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.response.MediDetailGetRes;
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
    public ResponseEntity<?> getMediAutoSearchList(@RequestParam String searchKeyword){
        // Authentication authentication
        try {
//            LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//            User user;
//            user = userDetails.getUser();
        	
            List<String> mediList = medicineService.getMediAutoListInfo(searchKeyword);

            Map<String, List> map = new HashMap<String, List>();
            map.put("mediList", mediList);

            return ResponseEntity.status(200).body(map);
        } catch(Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> getMediSearchList(@RequestParam String searchKeyword){
        // Authentication authentication
        try {
//          LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//          User user;
//          user = userDetails.getUser();
        	
            List<MediSearchGetRes> mediList = medicineService.getMediSearchListInfo(searchKeyword);

            Map<String, List> map = new HashMap<String, List>();
            map.put("mediList", mediList);

            return ResponseEntity.status(200).body(map);
        } catch(Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @GetMapping("/detail/{mediSerialNum}")
    public ResponseEntity<?> getMediDetailList(@PathVariable String mediSerialNum){
        // Authentication authentication
        try {
//          LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//          User user;
//          user = userDetails.getUser();
        	
        	MediDetailGetRes mediInfo = medicineService.getMediDetailInfo(mediSerialNum);

            return ResponseEntity.status(200).body(mediInfo);
        } catch(Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
}
