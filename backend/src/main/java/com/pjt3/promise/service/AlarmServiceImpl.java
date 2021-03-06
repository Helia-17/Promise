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
import java.util.StringTokenizer;
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
import com.pjt3.promise.response.AlarmCalendarGetRes;
import com.pjt3.promise.response.AlarmDetailGetRes;
import com.pjt3.promise.response.AlarmGetRes;
import com.pjt3.promise.response.AlarmMainGetRes;
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

			// ?????? ??????
			mediAlarm = mediAlarmSetting(user, alarmPostReq);
			mediAlarmRepository.save(mediAlarm);

			// ??? ?????? ??????
			userMedicineSetting(mediAlarm, alarmPostReq.getAlarmMediList());

			// ?????? ??????
			for (String prevTagName : alarmPostReq.getTagList()) {
				String tagName = prevTagName.replaceAll("\\s", "");
				if(tagName.equals("")) continue;
				Tag tag = new Tag();
				tag.setMediAlarm(mediAlarm);
				tag.setUser(user);
				tag.setTagName(tagName);
				tagRepository.save(tag);
			}

			// ?????? ?????????
			for (String sharedEmail : alarmPostReq.getShareEmail()) {

				// ???????????? ??????
				User sharedUser = userRepository.findUserByUserEmail(sharedEmail);

				// ?????? ??????
				mediAlarm = mediAlarmSetting(sharedUser, alarmPostReq);
				mediAlarmRepository.save(mediAlarm);

				// ??? ?????? ??????
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
				mediAlarm.setAlarmTime1(alarmPostReq.getAlarmTime1());
				mediAlarm.setAlarmTime2(alarmPostReq.getAlarmTime2());
				mediAlarm.setAlarmTime3(alarmPostReq.getAlarmTime3());
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
				mediAlarm.setAlarmTime1(alarmPutReq.getAlarmTime1());
				mediAlarm.setAlarmTime2(alarmPutReq.getAlarmTime2());
				mediAlarm.setAlarmTime3(alarmPutReq.getAlarmTime3());
			}
			mediAlarmRepository.save(mediAlarm);

			userMedicineSetting(mediAlarm, alarmPutReq.getAlarmMediList());

			for (String prevTagName : alarmPutReq.getTagList()) {
				String tagName = prevTagName.replaceAll("\\s", "");
				if(tagName.equals("")) continue;
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
	public List<AlarmGetRes> getDateAlarmList(User user, String nowDate) {

		LocalDate now = LocalDate.parse(nowDate);
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		String findDate = now.format(formatter);

		List<AlarmGetRes> alarmList = mediAlarmRepositorySupport.getDateAlarmList(user, findDate);
		return alarmList;

	}

	@Override
	public List<AlarmGetRes> getPastAlarmList(int periodType, User user) {

		List<AlarmGetRes> alarmList = null;

		Calendar c = Calendar.getInstance();

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

		String today = formatter.format(c.getTime());
		String startDay = "";
		if (periodType == 1) { // ?????????
			c.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
			startDay = formatter.format(c.getTime());

		} else if (periodType == 2) { // ?????????
			c.set(Calendar.DAY_OF_MONTH, 1);
			startDay = formatter.format(c.getTime());

		} else if (periodType == 3) { // ?????? 3??????
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

			// ?????? ?????? ?????? ??? ?????? ??????
			if (str == null || str.equals("") || str.equals(" ")) continue;
			if (str.length() == 0 || str.length() == 1) continue;
			if ((!str.equals("??????") && !str.equals("??????") && !str.equals("??????") && !str.equals("??????")) && str.length() == 2) continue;
			if (Pattern.matches(pattern1, str) || Pattern.matches(pattern2, str)) continue;
			if (str.length() == 3 && str.equals("?????????")) continue;
			

			List<AlarmOCRRes> mediList = medicineRepositorySupport.getOCRMediListInfo(str);
			for (AlarmOCRRes medi : mediList) {
				findMediList.add(medi);
			}

		}

		return new ArrayList<AlarmOCRRes>(findMediList);
	}

	@Override
	public List<AlarmCalendarGetRes> getMonthAlarmList(User user, String nowMonth) {
		StringTokenizer st = new StringTokenizer(nowMonth, "-");
		
		Calendar c = Calendar.getInstance();

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		
		c.set(Calendar.YEAR, Integer.parseInt(st.nextToken()));
		c.set(Calendar.MONTH, Integer.parseInt(st.nextToken())-1);
		c.set(Calendar.DAY_OF_MONTH, 1);
		
		String firstDay = formatter.format(c.getTime());
		
		c.set(Calendar.DAY_OF_MONTH, c.getActualMaximum(Calendar.DAY_OF_MONTH));
		
		String lastDay = formatter.format(c.getTime());

		List<AlarmCalendarGetRes> calendarAlarmList =  mediAlarmRepositorySupport.getMonthAlarmList(user, firstDay, lastDay);

		return calendarAlarmList;
	}

	@Override
	public List<AlarmMainGetRes> getMainAlarmList(User user) {
		LocalDate now = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		String today = now.format(formatter);
		List<AlarmMainGetRes> alarmList = mediAlarmRepositorySupport.getMainAlarmList(user, today);
		return alarmList;
	}
}
