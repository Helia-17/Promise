import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { alarmCheckAPI } from '../axios';

class Notifications {
  constructor() {
    PushNotification.configure({
      onRegister: function (token) {
      },
      onNotification: (notification) => {
        postAlarmCheck(notification.data.alarmId);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      
      onAction: function (notification) {
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
    });
  }

  getList() {
    PushNotification.getDeliveredNotifications(rn => {
    });
  }

  scheduledLocalNotifications(alarmId, id, date, title, medi) {
    PushNotification.localNotificationSchedule({
      id: id, 
      channelId: 'com.promise_app', 
      title: title,
      message: medi+` 복용 시간입니다!`,
      playSound: true,
      tag: alarmId,
      date: date,
      userInfo : {id: id, alarmId: alarmId}, 
    });
  }
  deleteNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }
}

export default new Notifications();