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
//            try {
//                user = userDetails.getUser();
//            } catch (NullPointerException e) {
//                return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
//            }
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
//            User user;
//            try {
//                user = userDetails.getUser();
//            } catch (NullPointerException e) {
//                return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
//            }
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
//            User user;
//            try {
//                user = userDetails.getUser();
//            } catch (NullPointerException e) {
//                return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
//            }
        	MediDetailGetRes mediInfo = medicineService.getMediDetailInfo(mediSerialNum);

            return ResponseEntity.status(200).body(mediInfo);
        } catch(Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
}
