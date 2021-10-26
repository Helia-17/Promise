package com.pjt3.promise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="User_Medicine")
public class UserMedicine {

    @Id
    @Column(name="um_id")
    int unId;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="alarm_id")
    MediAlarm mediAlarm;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="medi_serial_num")
    Medicine medicine;

    @Column(name="um_name")
    String unName;

}
