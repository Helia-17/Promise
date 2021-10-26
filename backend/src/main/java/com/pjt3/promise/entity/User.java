package com.pjt3.promise.entity;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Getter
@Setter
@Table(name="User")
public class User {
    @Id
    @Column(name="user_email")
    String userEmail;

    @Column(name="user_nickname")
    String userNickname;

    @Column(name="user_profile_url")
    String userProfileUrl;

    @Column(name="user_type")
    int userType;

    @Temporal(value = TemporalType.TIMESTAMP)
    @Column(name="user_join_date")
    Date userJoinDate;

    @Column(name="user_join_type")
    int userJoinType;
}
