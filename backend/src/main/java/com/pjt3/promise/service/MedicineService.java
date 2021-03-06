package com.pjt3.promise.service;

import com.pjt3.promise.response.MediDetailGetRes;
import com.pjt3.promise.response.MediGetRes;
import com.pjt3.promise.response.MediSearchGetRes;

import java.util.List;

public interface MedicineService {
    List<MediGetRes> getMediAutoListInfo(String searchKeyword);
    List<MediSearchGetRes> getMediSearchListInfo(String searchKeyword);
    MediDetailGetRes getMediDetailInfo(String searchKeyword);
}
