package com.pjt3.promise.service;

import com.pjt3.promise.entity.AlarmShare;
import com.pjt3.promise.entity.MediAlarm;
import com.pjt3.promise.entity.Tag;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.entity.UserMedicine;
import com.pjt3.promise.repository.*;
import com.pjt3.promise.request.AlarmPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlarmServiceImpl implements AlarmService{

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Autowired
    MediAlarmRepository mediAlarmRepository;

    @Autowired
    MedicineRepository medicineRepository;

    @Autowired
    UserMedicineRepository userMedicineRepository;

    @Autowired
    TagRepository tagRepository;

    @Autowired
    UserRepository userRepository;
    
    @Autowired
    AlarmShareRepository alarmShareRepository;

    @Override
    public int insertAlarm(User user, AlarmPostReq alarmPostReq) {

        MediAlarm mediAlarm = null;

        try {

            // 알람 저장
            mediAlarm = mediAlarmSetting(user, alarmPostReq);
            mediAlarmRepository.save(mediAlarm);

            // 약 내역 저장
            userMedicineSetting(mediAlarm, alarmPostReq.getAlarmMediList());

            // 태그 저장
            for (String tagName : alarmPostReq.getTagList()) {
                Tag tag = new Tag();
                tag.setMediAlarm(mediAlarm);
                tag.setUser(user);
                tag.setTagName(tagName);
                tagRepository.save(tag);
            }

            // 공유 대상자
            for (String sharedEmail : alarmPostReq.getShareEmail()) {
            	
                // 대상자를 찾고
                User sharedUser = userRepository.findUserByUserEmail(sharedEmail);

                // 알람 저장
                mediAlarm = mediAlarmSetting(sharedUser, alarmPostReq);
                mediAlarmRepository.save(mediAlarm);

                // 약 내역 저장
                userMedicineSetting(mediAlarm, alarmPostReq.getAlarmMediList());
                
                AlarmShare alarmShare = new AlarmShare();
                alarmShare.setMediAlarm(mediAlarm);
                alarmShare.setUser(user);
                
                alarmShareRepository.save(alarmShare);
                
            }

            return SUCCESS;
            
        } catch (Exception e) {
            return FAIL;
        }
    }

    public MediAlarm mediAlarmSetting(User user, AlarmPostReq alarmPostReq){
        MediAlarm mediAlarm = new MediAlarm();

        mediAlarm.setUser(user);
        mediAlarm.setAlarmTitle(alarmPostReq.getAlarmTitle());
        mediAlarm.setAlarmDayStart(alarmPostReq.getAlarmDayStart());
        mediAlarm.setAlarmDayEnd(alarmPostReq.getAlarmDayEnd());
        mediAlarm.setAlarmYN(alarmPostReq.getAlarmYN());
        if(alarmPostReq.getAlarmYN() == 1){
            mediAlarm.setAlarmDays(alarmPostReq.getAlarmDays());
            mediAlarm.setAlarmTime1(alarmPostReq.getAlarmTime1());
            mediAlarm.setAlarmTime2(alarmPostReq.getAlarmTime2());
            mediAlarm.setAlarmTime3(alarmPostReq.getAlarmTime3());
            mediAlarm.setAlarmTime4(alarmPostReq.getAlarmTime4());
            mediAlarm.setAlarmTime5(alarmPostReq.getAlarmTime5());
        }

        return mediAlarm;
    }

    public void userMedicineSetting(MediAlarm mediAlarm, List<String> alarmMediList){
        try {
            for (String mediName : alarmMediList) {

                UserMedicine userMedicine = new UserMedicine();
                userMedicine.setMediAlarm(mediAlarm);
                userMedicine.setUnName(mediName);
                userMedicine.setMedicine(medicineRepository.findMedicineByMediName(mediName));

                userMedicineRepository.save(userMedicine);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
