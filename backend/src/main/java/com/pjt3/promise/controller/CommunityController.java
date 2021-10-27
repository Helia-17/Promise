package com.pjt3.promise.controller;

import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.request.CommuCommentInsertReq;
import com.pjt3.promise.request.CommuCommentUpdateReq;
import com.pjt3.promise.request.CommuPostInsertReq;
import com.pjt3.promise.request.CommuPostUpdateReq;
import com.pjt3.promise.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/communities")
@RestController
public class CommunityController {

    @Autowired
    CommunityService communityService;

    @PostMapping()
    public ResponseEntity<?> insertCommunityPost(@RequestBody CommuPostInsertReq commuPostInsertReq){
        // Authentication authentication
        try {
//            LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//            User user;
//            try {
//                user = userDetails.getUser();
//            } catch (NullPointerException e) {
//                return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
//            }

            communityService.insertCommunityPost(commuPostInsertReq.getCommuTitle(), commuPostInsertReq.getCommuContents());

            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "글 등록 성공"));
        } catch (NullPointerException e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @PutMapping()
    public ResponseEntity<?> updateCommunityPost(@RequestBody CommuPostUpdateReq commuPostUpdateReq){
        // Authentication authentication
        try {
//            LBUserDetails userDetails = (LBUserDetails) authentication.getDetails();
//            User user;
//            user = userDetails.getUser();
//            try {
//                user = userDetails.getUser();
//            } catch (NullPointerException e) {
//                return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
//            }

            communityService.updateCommunityPost(commuPostUpdateReq.getCommuId(), commuPostUpdateReq.getCommuTitle(), commuPostUpdateReq.getCommuContents());

            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "글 수정 성공"));
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
//            try {
//                user = userDetails.getUser();
//            } catch (NullPointerException e) {
//                return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
//            }

            communityService.deleteCommunityPost(commuId);

            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "글 삭제 성공"));
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
//            try {
//                user = userDetails.getUser();
//            } catch (NullPointerException e) {
//                return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
//            }

            String userEmail = "tjalsdud9@gmail.com";

            communityService.insertCommuComment(commuCommentInsertReq.getCommuId(), commuCommentInsertReq.getCommentContents(), userEmail);

            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 등록 성공"));
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
//            try {
//                user = userDetails.getUser();
//            } catch (NullPointerException e) {
//                return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
//            }

            communityService.updateCommuComment(commuCommentUpdateReq.getCommentId(), commuCommentUpdateReq.getCommentContents());

            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 수정 성공"));
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
//            try {
//                user = userDetails.getUser();
//            } catch (NullPointerException e) {
//                return ResponseEntity.status(400).body(new UserInfoGetRes(400, "만료된 토큰입니다."));
//            }

            communityService.deleteCommuComment(commentId);

            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 삭제 성공"));
        } catch (NullPointerException e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
}
