package com.pjt3.promise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name="Community")
public class Community {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="commu_id")
    int commuId;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_email")
    User user;

    @Column(name="commu_title")
    String commuTitle;

    @Column(name="commu_contents")
    String commuContents;

    @CreationTimestamp
    @Temporal(value = TemporalType.TIMESTAMP)
    @Column(name="commu_date")
    Date commuDate;

    @JsonManagedReference
    @OneToMany(mappedBy="community")
    List<CommunityComment> communityComment = new ArrayList<CommunityComment>();
}
