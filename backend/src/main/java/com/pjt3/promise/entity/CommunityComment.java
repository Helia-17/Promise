package com.pjt3.promise.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name="CommunityComment")
public class CommunityComment {
    @Id
    @Column(name="comment_id")
    int commentId;

    //FK
    @Column(name="commu_id")
    int commuId;

    // FK
    @Column(name="user_email")
    String userEmail;

    @Column(name="comment_contents")
    String commentContents;

    @Temporal(value = TemporalType.TIMESTAMP)
    @Column(name="comment_date")
    Date commentDate;
}
