import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { alarmCheckAPI } from '../axios';

class Notifications {
  constructor() {
    PushNotification.configure({
      // 토큰이 생성될 때 호출
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      // 리모컨이 수신되거나 열리거나 로컬 알람이 열릴때 호출
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        // notification.tag에 alarmId를 넣어놨으니까
        // 여기서 axios로 복용 이력 api 날리면 됨!
        postAlarmCheck(notification.data.alarmId);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
      },

      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',

      // IOS ONLY
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    });

    PushNotification.createChannel(
      {
        channelId: 'com.promise_app',
        channelName: 'com.promise_app',
        channelDescription: 'com.promise_app'
      },
      () => { },
    );
    
    postAlarmCheck = async (data) => {
      await alarmCheckAPI(data, 1);
    }
  }

  cancelScheduledLocalNotifications(id) {
    PushNotification.cancelLocalNotification(id);
  }

  getScheduledLocalNotifications() {
    PushNotification.getScheduledLocalNotifications(rn => {
      console.log('SN --- ', rn);
    });
  }

  getList() {
    PushNotification.getDeliveredNotifications(rn => {
      console.log(rn);
    });
  }

  scheduledLocalNotifications(alarmId, id, date, title, medi) {
    PushNotification.localNotificationSchedule({
      id: id, // 알람 내부 id
      channelId: 'com.promise_app', // 채널 아이디 동기화
      title: title,
      message: medi+` 복용 시간입니다!`,
      playSound: true,
      tag: alarmId,
      date: date,
      userInfo : {id: id, alarmId: alarmId} // required for ios local notification
    });
  }
  deleteNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }
}

export default new Notifications();