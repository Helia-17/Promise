package com.pjt3.promise.controller;

import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.request.CommuCommentInsertReq;
import com.pjt3.promise.request.CommuCommentUpdateReq;
import com.pjt3.promise.request.CommuPostInsertReq;
import com.pjt3.promise.request.CommuPostUpdateReq;
import com.pjt3.promise.service.CommunityService;
import com.pjt3.promise.service.PetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/communities")
@RestController
public class CommunityController {
	@Autowired
	UserRepository userRepository;
	
    @Autowired
    CommunityService communityService;

    @Autowired
    PetService petService;
    
    @PostMapping()
    public ResponseEntity<?> insertCommunityPost(@RequestBody CommuPostInsertReq commuPostInsertReq){
        // Authentication authentication
        try {
//            LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//            User user;
        	
        	User user = userRepository.findUserByUserEmail("tjalsdud9@gmail.com");
        	
        	int result = communityService.insertCommunityPost(commuPostInsertReq.getCommuTitle(), commuPostInsertReq.getCommuContents(), user);
        	if(result == 1) {
        		int result2 = petService.increasePetExp(1, user);
        		if(result2 == 1) {
        			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "글 등록 성공/경험치 등록 성공"));
        		} else {
        			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "글 등록 성공/경험치 등록 실패"));
        		}
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "글 등록 실패"));
			}
        } catch (NullPointerException e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
            // return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
        }
    }

    @PutMapping()
    public ResponseEntity<?> updateCommunityPost(@RequestBody CommuPostUpdateReq commuPostUpdateReq){
        // Authentication authentication
        try {
//            LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//            User user;
//            user = userDetails.getUser();

        	int result = communityService.updateCommunityPost(commuPostUpdateReq.getCommuId(), commuPostUpdateReq.getCommuTitle(), commuPostUpdateReq.getCommuContents());
        	if(result == 1) {
        		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "글 수정 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "글 수정 실패"));
			}
        } catch (NullPointerException e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    
    @DeleteMapping("/{commuId}")
    public ResponseEntity<?> deleteCommunityPost(@PathVariable int commuId){
        // Authentication authentication
        try {
//            LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//            User user;
//            user = userDetails.getUser();

            int result = communityService.deleteCommunityPost(commuId);
            if(result == 1) {
            	return ResponseEntity.status(200).body(BaseResponseBody.of(200, "글 삭제 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "글 삭제 실패"));
			}
        } catch (NullPointerException e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @PostMapping("/comment")
    public ResponseEntity<?> insertCommuComment(@RequestBody CommuCommentInsertReq commuCommentInsertReq){
        // Authentication authentication
        try {
//            LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//            User user;
//          user = userDetails.getUser();

        	User user = userRepository.findUserByUserEmail("tjalsdud9@gmail.com");
        	
        	int result = communityService.insertCommuComment(commuCommentInsertReq.getCommuId(), commuCommentInsertReq.getCommentContents(), user);
        	if(result == 1) {
                return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 등록 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "댓글 등록 실패"));
			}
        } catch (NullPointerException e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @PutMapping("/comment")
    public ResponseEntity<?> updateCommuComment(@RequestBody CommuCommentUpdateReq commuCommentUpdateReq){
        // Authentication authentication
        try {
//            LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//            User user;
//            user = userDetails.getUser();

            int result = communityService.updateCommuComment(commuCommentUpdateReq.getCommentId(), commuCommentUpdateReq.getCommentContents());
            if(result == 1) {
                return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 수정 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "댓글 수정 실패"));
			}
        } catch (NullPointerException e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<?> deleteCommuComment(@PathVariable int commentId){
        // Authentication authentication
        try {
//            LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//            User user;
//            user = userDetails.getUser();

            int result = communityService.deleteCommuComment(commentId);
            if(result == 1) {
            	return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 삭제 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "댓글 삭제 실패"));
			}
            
        } catch (NullPointerException e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
}
