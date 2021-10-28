package com.pjt3.promise.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.response.UsersTagGetRes;
import com.pjt3.promise.service.VisualService;


@RequestMapping("/visual")
@RestController
public class VisualController {
	 @Autowired
	 VisualService visualService;

	 @GetMapping()
	 public ResponseEntity<?> getUsersTagInfo(){
        // Authentication authentication
        try {
//          LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//          User user;
//          user = userDetails.getUser();
        	
            List<UsersTagGetRes> UsersTagList = visualService.getUsersTagListInfo();

            Map<String, List> map = new HashMap<String, List>();
            map.put("UsersTagList", UsersTagList);

            return ResponseEntity.status(200).body(map);
        } catch(Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
}
