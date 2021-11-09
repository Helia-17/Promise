package com.pjt3.promise.controller;

import com.pjt3.promise.common.auth.PMUserDetails;
import com.pjt3.promise.common.response.BaseResponseBody;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.request.CommuCommentInsertReq;
import com.pjt3.promise.request.CommuCommentUpdateReq;
import com.pjt3.promise.request.CommuPostInsertReq;
import com.pjt3.promise.request.CommuPostUpdateReq;
import com.pjt3.promise.request.CommunitySearchPostReq;
import com.pjt3.promise.response.CommuCommentGetRes;
import com.pjt3.promise.response.CommunityListGetRes;
import com.pjt3.promise.response.MyPillHistoryGetRes;
import com.pjt3.promise.service.CommunityService;
import com.pjt3.promise.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(
        origins = { "http://localhost:3000", "https://k5a201.p.ssafy.io/" },
        allowCredentials = "true",
        allowedHeaders = "*",
        methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT, RequestMethod.OPTIONS })
@RequestMapping("/communities")
@RestController
public class CommunityController {
	
    @Autowired
    CommunityService communityService;

    @Autowired
    PetService petService;
    
    @PostMapping()
    public ResponseEntity<?> insertCommunityPost(Authentication authentication, @RequestBody CommuPostInsertReq commuPostInsertReq){
        try {
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
            User user = userDetails.getUser();
        	
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
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch (Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @PutMapping()
    public ResponseEntity<?> updateCommunityPost(Authentication authentication, @RequestBody CommuPostUpdateReq commuPostUpdateReq){
        try {
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
            User user = userDetails.getUser();

        	int result = communityService.updateCommunityPost(commuPostUpdateReq.getCommuId(), commuPostUpdateReq.getCommuTitle(), commuPostUpdateReq.getCommuContents());
        	if(result == 1) {
        		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "글 수정 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "글 수정 실패"));
			}
        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch (Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    
    @DeleteMapping("/{commuId}")
    public ResponseEntity<?> deleteCommunityPost(Authentication authentication, @PathVariable int commuId){
        try {
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
            User user = userDetails.getUser();

            int result = communityService.deleteCommunityPost(commuId);
            if(result == 1) {
            	return ResponseEntity.status(200).body(BaseResponseBody.of(200, "글 삭제 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "글 삭제 실패"));
			}
        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch (Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @PostMapping("/comment")
    public ResponseEntity<?> insertCommuComment(Authentication authentication, @RequestBody CommuCommentInsertReq commuCommentInsertReq){
        try {
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
            User user = userDetails.getUser();
        	
        	int result = communityService.insertCommuComment(commuCommentInsertReq.getCommuId(), commuCommentInsertReq.getCommentContents(), user);
        	if(result == 1) {
                return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 등록 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "댓글 등록 실패"));
			}
        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch (Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @PutMapping("/comment")
    public ResponseEntity<?> updateCommuComment(Authentication authentication, @RequestBody CommuCommentUpdateReq commuCommentUpdateReq){
        try {
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
            User user = userDetails.getUser();

            int result = communityService.updateCommuComment(commuCommentUpdateReq.getCommentId(), commuCommentUpdateReq.getCommentContents());
            if(result == 1) {
                return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 수정 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "댓글 수정 실패"));
			}
        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch (Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }

    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<?> deleteCommuComment(Authentication authentication, @PathVariable int commentId){
        try {
        	PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
            User user = userDetails.getUser();

            int result = communityService.deleteCommuComment(commentId);
            if(result == 1) {
            	return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 삭제 성공"));
			} else {
				return ResponseEntity.status(500).body(BaseResponseBody.of(500, "댓글 삭제 실패"));
			}
            
        } catch (NullPointerException e) {
        	return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));   
        } catch (Exception e) {
            return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
        }
    }
    
    @GetMapping("/list")
	public ResponseEntity<?> getCommunityList(Authentication authentication, @RequestParam int pageNum) {
		CommunityListGetRes communityListGetRes = new CommunityListGetRes();
		try {

			PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();

			communityListGetRes = communityService.getCommunityList(pageNum);

			return ResponseEntity.status(200).body(communityListGetRes);

		} catch (NullPointerException e) {
			return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
		} catch (Exception e) {
			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}
	}
    
    @GetMapping("/detail")
	public ResponseEntity<?> getCommuCommentDetail(Authentication authentication, @RequestParam int commuId) {
		CommuCommentGetRes commuCommentGetRes = new CommuCommentGetRes();
		try {

			PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();

			commuCommentGetRes = communityService.getCommuCommentDetail(commuId);

			return ResponseEntity.status(200).body(commuCommentGetRes);

		} catch (NullPointerException e) {
			return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
		} catch (Exception e) {
			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}

	}
    
    @PostMapping("/search")
	public ResponseEntity<?> getCommunityList(Authentication authentication, @RequestBody CommunitySearchPostReq CommunitySearchPostReq) {
		CommunityListGetRes communityListGetRes = new CommunityListGetRes();
		try {

			PMUserDetails userDetails = (PMUserDetails) authentication.getDetails();
			User user = userDetails.getUser();

			communityListGetRes = communityService.getCommunitySearchList(CommunitySearchPostReq.getPageNum(), CommunitySearchPostReq.getSearchKeyword());

			return ResponseEntity.status(200).body(communityListGetRes);

		} catch (NullPointerException e) {
			return ResponseEntity.status(420).body(BaseResponseBody.of(420, "만료된 토큰입니다."));
		} catch (Exception e) {
			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
		}
	}
}

