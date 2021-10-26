package com.pjt3.promise.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;


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

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "user")
    Pet pet;

    @JsonManagedReference
    @OneToMany(mappedBy="sharedUser")
    List<AlarmShare> alarmShare = new ArrayList<AlarmShare>();

    @JsonManagedReference
    @OneToMany(mappedBy="user")
    List<Tag> tag = new ArrayList<Tag>();

    @JsonManagedReference
    @OneToMany(mappedBy="user")
    List<TakeHistory> takeHistorie = new ArrayList<TakeHistory>();

    @JsonManagedReference
    @OneToMany(mappedBy="user")
    List<MediAlarm> mediAlarm = new ArrayList<MediAlarm>();

    @JsonManagedReference
    @OneToMany(mappedBy="user")
    List<Community> community = new ArrayList<Community>();

    @JsonManagedReference
    @OneToMany(mappedBy="user")
    List<CommunityComment> communityComment = new ArrayList<CommunityComment>();
}
