package com.pjt3.promise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name="Community_Comment")
public class CommunityComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comment_id")
    int commentId;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="commu_id")
    Community community;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_email")
    User user;

    @Column(name="comment_contents")
    String commentContents;

    @CreationTimestamp
    @Temporal(value = TemporalType.TIMESTAMP)
    @Column(name="comment_date")
    Date commentDate;
}
