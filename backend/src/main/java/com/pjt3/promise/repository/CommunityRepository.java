package com.pjt3.promise.repository;

import com.pjt3.promise.entity.Community;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityRepository extends JpaRepository<Community, String> {
    Community findCommunityByCommuId(int commuId);
    void deleteByCommuId(int commuId);
}
