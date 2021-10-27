package com.pjt3.promise.response;

import lombok.Data;

@Data
public class MediSearchGetRes {
    String mediSerialNum;
    String mediName;
    String mediCompany;
    int mediElderlyCare;
    int mediPregnancyCare;
    int mediAgeCare;
}
