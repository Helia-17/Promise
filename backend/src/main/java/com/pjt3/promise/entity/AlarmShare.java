package com.pjt3.promise.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="Alarm_Share")
public class AlarmShare {

    @Id
    @Column(name="alarm_id")
    int alarmId;

    @Id
    @Column(name="shared_user_email")
    String sharedUserEmail;

    @Column(name="share_user_email")
    String shareUserEmail;
}
