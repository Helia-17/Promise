package com.pjt3.promise.repository;

import com.pjt3.promise.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findUserByUserEmail(String userEmail);
    User findUserByUserNickname(String userNickname);
}
