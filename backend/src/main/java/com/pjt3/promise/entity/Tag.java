package com.pjt3.promise.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="Tag")
public class Tag {
    @Id
    @Column(name="tag_id")
    int tagId;

    // FK
    @Column(name="alarm_id")
    int alarmId;

    // FK
    @Column(name="user_email")
    String userEmail;

    @Column(name="tag_name")
    String tagName;

}
