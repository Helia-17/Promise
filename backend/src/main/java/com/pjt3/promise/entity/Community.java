package com.pjt3.promise.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name="Community")
public class Community {
    @Id
    @Column(name="commu_id")
    int commuId;

    // FK
    @Column(name="user_email")
    String userEmail;

    @Column(name="commu_title")
    String commuTitle;

    @Column(name="commu_contents")
    String commuContents;

    @Temporal(value = TemporalType.TIMESTAMP)
    @Column(name="commu_date")
    Date commuDate;
}
