package com.pjt3.promise.service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashSet;
import java.util.List;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pjt3.promise.entity.AlarmShare;
import com.pjt3.promise.entity.MediAlarm;
import com.pjt3.promise.entity.Tag;
import com.pjt3.promise.entity.TakeHistory;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.entity.UserMedicine;
import com.pjt3.promise.repository.AlarmShareRepository;
import com.pjt3.promise.repository.MediAlarmRepository;
import com.pjt3.promise.repository.MediAlarmRepositorySupport;
import com.pjt3.promise.repository.MedicineRepository;
import com.pjt3.promise.repository.MedicineRepositorySupport;
import com.pjt3.promise.repository.TagRepository;
import com.pjt3.promise.repository.TakeHistoryRepository;
import com.pjt3.promise.repository.UserMedicineRepository;
import com.pjt3.promise.repository.UserRepository;
import com.pjt3.promise.request.AlarmPostReq;
import com.pjt3.promise.request.AlarmPutReq;
import com.pjt3.promise.request.TakeHistoryPostReq;
import com.pjt3.promise.response.AlarmDetailGetRes;
import com.pjt3.promise.response.AlarmGetRes;
import com.pjt3.promise.response.AlarmOCRRes;

@Service
public class AlarmServiceImpl implements AlarmService {

	private static final int SUCCESS = 1;
	private static final int FAIL = -1;

	SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

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

	@Autowired
	MediAlarmRepositorySupport mediAlarmRepositorySupport;

	@Autowired
	TakeHistoryRepository takeHistoryRepository;

	@Autowired
	MedicineRepositorySupport medicineRepositorySupport;

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

			return mediAlarm.getAlarmId();

		} catch (Exception e) {
			return FAIL;
		}
	}

	public MediAlarm mediAlarmSetting(User user, AlarmPostReq alarmPostReq) {

		MediAlarm mediAlarm = new MediAlarm();

		mediAlarm.setUser(user);
		mediAlarm.setAlarmTitle(alarmPostReq.getAlarmTitle());
		try {
			mediAlarm.setAlarmDayStart(alarmPostReq.getAlarmDayStart());
			mediAlarm.setAlarmDayEnd(alarmPostReq.getAlarmDayEnd());
			mediAlarm.setAlarmYN(alarmPostReq.getAlarmYN());
			if (alarmPostReq.getAlarmYN() == 1) {
				mediAlarm.setAlarmTime(alarmPostReq.getAlarmTime());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return mediAlarm;
	}

	public void userMedicineSetting(MediAlarm mediAlarm, List<String> alarmMediList) {
		for (String mediName : alarmMediList) {

			UserMedicine userMedicine = new UserMedicine();
			userMedicine.setMediAlarm(mediAlarm);
			userMedicine.setUmName(mediName);
			userMedicine.setMedicine(medicineRepository.findMedicineByMediName(mediName));

			userMedicineRepository.save(userMedicine);
		}

	}

	@Override
	public int updateAlarm(User user, AlarmPutReq alarmPutReq) {

		MediAlarm mediAlarm = null;

		try {
			mediAlarm = mediAlarmRepository.findMediAlarmByAlarmId(alarmPutReq.getAlarmId());

			tagRepository.deleteByMediAlarmAlarmId(alarmPutReq.getAlarmId());
			userMedicineRepository.deleteByMediAlarmAlarmId(alarmPutReq.getAlarmId());

			mediAlarm.setUser(user);
			mediAlarm.setAlarmTitle(alarmPutReq.getAlarmTitle());
			mediAlarm.setAlarmDayStart(alarmPutReq.getAlarmDayStart());
			mediAlarm.setAlarmDayEnd(alarmPutReq.getAlarmDayEnd());
			mediAlarm.setAlarmYN(alarmPutReq.getAlarmYN());
			if (alarmPutReq.getAlarmYN() == 1) {
				mediAlarm.setAlarmTime(alarmPutReq.getAlarmTime());
			}
			mediAlarmRepository.save(mediAlarm);

			userMedicineSetting(mediAlarm, alarmPutReq.getAlarmMediList());

			for (String tagName : alarmPutReq.getTagList()) {
				Tag tag = new Tag();
				tag.setMediAlarm(mediAlarm);
				tag.setUser(user);
				tag.setTagName(tagName);
				tagRepository.save(tag);
			}

			return SUCCESS;

		} catch (Exception e) {
			return FAIL;
		}
	}

	@Override
	public int deleteAlarm(int alarmId) {
		try {

			MediAlarm mediAlarm = mediAlarmRepository.findMediAlarmByAlarmId(alarmId);

			mediAlarmRepository.delete(mediAlarm);

			return SUCCESS;
		} catch (Exception e) {
			return FAIL;
		}
	}

	@Override
	public AlarmDetailGetRes getAlarmInfo(int alarmId) {
		return mediAlarmRepositorySupport.getAlarmInfo(alarmId);
	}

	@Override
	public int insertTakeHistory(User user, TakeHistoryPostReq takeHistoryPostReq) {
		try {
			TakeHistory takeHistory = new TakeHistory();
			takeHistory.setUser(user);
			takeHistory.setMediAlarm(mediAlarmRepository.findMediAlarmByAlarmId(takeHistoryPostReq.getAlarmId()));
			takeHistory.setThYN(takeHistoryPostReq.getThYN());
			if (takeHistoryPostReq.getThYN() == 1) {
				takeHistory.setThTime(Timestamp.valueOf(LocalDateTime.now()));
			}

			takeHistoryRepository.save(takeHistory);

			return SUCCESS;
		} catch (Exception e) {
			return FAIL;
		}
	}

	@Override
	public List<AlarmGetRes> getProgressAlarmList(User user) {

		LocalDate now = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		String today = now.format(formatter);

		List<AlarmGetRes> alarmList = mediAlarmRepositorySupport.getProgressAlarmList(user, today);
		return alarmList;

	}

	@Override
	public List<AlarmGetRes> getPastAlarmList(int periodType, User user) {

		List<AlarmGetRes> alarmList = null;

		Calendar c = Calendar.getInstance();

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

		String today = formatter.format(c.getTime());
		String startDay = "";
		if (periodType == 1) { // 이번주
			c.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
			startDay = formatter.format(c.getTime());

		} else if (periodType == 2) { // 이번달
			c.set(Calendar.DAY_OF_MONTH, 1);
			startDay = formatter.format(c.getTime());

		} else if (periodType == 3) { // 최근 3개월
			c.add(Calendar.MONTH, -2);
			c.set(Calendar.DAY_OF_MONTH, 1);
			startDay = formatter.format(c.getTime());
			System.out.println(startDay);
		}
		alarmList = mediAlarmRepositorySupport.getPastAlarmList(today, startDay, user);

		return alarmList;
	}

	@Override
	public List<AlarmOCRRes> getOCRMediList(String text) {
		String pattern1 = "^[0-9]*$";
		String pattern2 = "^[a-zA-Z]*$";
		String[] textList = text.split(" ");
		HashSet<AlarmOCRRes> findMediList = new HashSet<AlarmOCRRes>();
		for (String str : textList) {
			str = str.replaceAll(" ", "");

			// 예외 조건 확인 후 추가 필요
			if (str == null || str.equals("") || str.equals(" ")) continue;
			if (str.length() == 0 || str.length() == 1) continue;
			if ((!str.equals("자모") && !str.equals("뇌선") && !str.equals("얄액") && !str.equals("쿨정")) && str.length() == 2) continue;
			if (Pattern.matches(pattern1, str) || Pattern.matches(pattern2, str)) continue;
			if (str.length() == 3 && str.equals("서방정")) continue;
			

			List<AlarmOCRRes> mediList = medicineRepositorySupport.getOCRMediListInfo(str);
			for (AlarmOCRRes medi : mediList) {
				findMediList.add(medi);
			}

		}

		return new ArrayList<AlarmOCRRes>(findMediList);
	}
}
