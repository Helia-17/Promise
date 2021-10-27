package com.pjt3.promise.repository;

import com.pjt3.promise.entity.Community;
import com.pjt3.promise.entity.CommunityComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommuCommentRepository extends JpaRepository<CommunityComment, String> {
    CommunityComment findCommunityByCommentId(int commentId);
    void deleteByCommentId(int commentId);
}
