# 약속
#### 복용 습관 개선 및 정확한 약 정보를 제공해주는 약 통합 애플리케이션

<img src="https://i.imgur.com/67c3nPb.png" width="300">

## 목차
1. [약속](#약속-Description)
2. [Tech Stack](#Tech-Stack)
3. [Feature Description](#Feature-Description)
4. [Server Strucutre](#Server-Strucutre)
5. [Recommendation System Structure](#Recommendation-System-Structure)
6. [Database Structure](#Database-Structure)
7. [Getting Started](#Getting-Started)
8. [Contributor](#Contributor)

<br>
<br>

# 약속 Description
## 약속
**더 건강한 나를 위한 약속.**  
사용자의 약 건강 보조제 복용 습관을 개선하고 정확한 약 정보를 제공하는 서비스입니다.

## PreCure
**건강의 수호자, 프리큐어.**  
사용자의 건강을 지키기 위해 사랑과 진실 행복을 뿌리고 다니는 
삽히의 감초 귀염둥이 프리큐어입니다.

<br>
<br>

# Tech Stack
## Fronted
<img style="display: inline;" alt="HTML5" src ="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/><img style="display: inline;" alt="CSS3" src ="https://img.shields.io/badge/CSS3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/><img style="display: inline;" alt="javascript" src ="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white"/><img style="display: inline;" alt="vuejs" src ="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"/><img style="display: inline;" alt="reactnative" src ="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img style="display: inline;" alt="npm" src ="https://img.shields.io/badge/npm-%23CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/>
- HTML5, CSS3, JavaScript
- [React Native](https://reactnative.dev/)
- [Vue](https://vuejs.org/)
- npm
    - [aws-sdk](https://www.npmjs.com/package/aws-sdk)
    - [react-native-s3-upload](https://www.npmjs.com/package/react-native-s3-upload)
    - [async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)
    - [react-navigation](https://reactnavigation.org/)
    - [react-native-image-picker](https://github.com/react-native-image-picker/react-native-image-picker)
    - [react-native-maps](https://www.npmjs.com/package/react-native-maps)
    - [react-native-push-notification](https://www.npmjs.com/package/react-native-push-notification)
    - [react-native-modal-datetime-picker](https://www.npmjs.com/package/react-native-modal-datetime-picker)
- [Google Map](https://developers.google.com/maps/documentation?hl=ko)
- [OCR](https://cloud.google.com/vision/docs/ocr?hl=ko)

## Backend
<img style="display: inline;" alt="java" src ="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"/><img style="display: inline;" alt="springboot" src ="https://img.shields.io/badge/spring boot-%236DB33F.svg?&style=for-the-badge&logo=springboot&logoColor=white"/><img style="display: inline;" alt="gradle" src ="https://img.shields.io/badge/gradle-%2302303A.svg?&style=for-the-badge&logo=gradle&logoColor=white"/><img style="display: inline;" alt="jwt" src ="https://img.shields.io/badge/jwt-%23000000.svg?&style=for-the-badge&logo=JSON Web Tokens&logoColor=white"/><img style="display: inline;" alt="mysql" src ="https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>
- [Java](https://www.java.com/ko/)
- [SpringBoot](https://spring.io/)
- [Gradle](https://gradle.org/)
- [JWT](https://jwt.io/)
- [MySQL](https://www.mysql.com/)

## Deploy
<img style="display: inline;" alt="aws" src ="https://img.shields.io/badge/aws-%23232F3E.svg?&style=for-the-badge&logo=amazon aws&logoColor=white"/>
<img style="display: inline;" alt="jenkins" src ="https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white"/><img style="display: inline;" alt="nginx" src ="https://img.shields.io/badge/nginx-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white"/><img style="display: inline;" alt="docker" src ="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/><img style="display: inline;" alt="s3" src ="https://img.shields.io/badge/s3-%23569A31.svg?&style=for-the-badge&logo=amazon s3&logoColor=white"/>
- [AWS](https://aws.amazon.com/ko/?nc2=h_lg)
- [NginX](https://www.nginx.com/)
- [Docker](https://www.docker.com/)
- [AWS S3](https://aws.amazon.com/ko/s3/)

<br>
<br>

# Feature Description
## Sign Up/In
Social Login (Google & Apple)

<img src="https://i.imgur.com/aGXrbSZ.png" width="150">


## Main
오늘 진행되는 알람 목록, 전체 사용자의 태그 통계 시각화와 사용자의 큐어 캐릭터

| **시각화**  | **펫**  |
| :--------: | :--------: |
|<img src="https://i.imgur.com/egpfqs1.png" width="150">|<img src="https://i.imgur.com/8xADrPt.jpg" width="150">|

## Calendar, Alarm, Timeline
OCR을 통한 약 등록과 타 사용자와 알람 공유, 현재 진행중인 알람과 지난 알람  
| **달력**  | **알람등록**  |  **진행중인 알람**  |  **Timeline**  |
| :--------: | :--------: | :--------: | :--------: |
|<img src="https://i.imgur.com/JRH7Cim.png" width="150">|<img src="https://i.imgur.com/C9WPo8V.png" width="150">|<img src="https://i.imgur.com/XPWfsTr.png" width="150">|<img src="https://i.imgur.com/GdSTnuh.png" width="150">|

## My Pill
현재 복용중인 약 리스트와 복용 이력 조회 

| **복용중인 리스트**  | **복용 약 상세**  |  **복용 이력**  | 
| :--------: | :--------: | :--------: |
|<img src="https://i.imgur.com/pOnICwR.png" width="150">|<img src="https://i.imgur.com/Yl3hgoR.png" width="150">|<img src="https://i.imgur.com/Hbcr0Q6.png" width="150">|

## Search, Info!

약 이름 검색과 약 상세 정보 제공  
| **검색**  | **약 상세**  | 
| :--------: | :--------: |
|<img src="https://i.imgur.com/joE2Mlx.png" width="150">|<img src="https://i.imgur.com/r5ECPoY.png" width="150">|

## Pharmacy Location
현재 위치와 시간을 기반으로 영업 중인 약국 정보를 거리순으로 제공  

<img src="https://i.imgur.com/WrsEFvq.jpg" width="150">

## Community
사용자들 간의 자유로운 소통 공간  

<img src="https://i.imgur.com/Vrt4QQe.png" width="150">

<br>
<br>


# Server Strucutre
![](https://i.imgur.com/4zXbLR2.png)


<br>
<br>


# Database Structure
![](https://i.imgur.com/QdHyAE7.png)


<br>
<br>


# Getting Started
## Frontend
### React Native android
```
./promise_app
```
```
npm install
```
```
npx react-native run-android
```
### React Native iOS
```
./promise_app
```
```
npm install
```
```
cd ios
pod install
cd ..
```
```
npx react-native run-ios
```
### Vue (Introduction Page)
```
./promise_web
```
```
npm install
```
you have to make 'dist' directory before build to web project.
```
mkdir dist
npm run build
```
and run web project
```
npm run serve
```
## Backend
### Spring
```
./backSpring
```
```
./gradlew clean build
```
```
cd build/libs
```
```
java -jar [생성된 스냅샷파일 이름].jar
```


<br>
<br>


# Contributor

|<img src="https://i.imgur.com/TxP2QeJ.png" width="150">|<img src="https://i.imgur.com/cGdJ9mK.png" width="150">|<img src="https://i.imgur.com/GxjOzbo.png" width="150">|<img src="https://i.imgur.com/2CWF5Pc.png" width="150">|<img src="https://i.imgur.com/EBfORSQ.png" width="150">|
| :--------: | :--------: | :--------: | :--------: | :--------: |
| **서민영** <a href="https://github.com/smy999"><img src="https://i.imgur.com/SBDd7pE.png" width="20"></a> <br> Minyeong Seo | **서요셉** <a href="https://github.com/yoseph0310"><img src="https://i.imgur.com/SBDd7pE.png" width="20"></a> <br> Yosep Seo | **이가빈** <a href="https://github.com/Ariel-G-Lee"><img src="https://i.imgur.com/SBDd7pE.png" width="20"></a> <br> Gavin Lee | **허애리** <a href="https://github.com/aeriheo"><img src="https://i.imgur.com/SBDd7pE.png" width="20"></a> <br> Aeri Heo | **김지윤** <a href="https://github.com/Helia-17"><img src="https://i.imgur.com/SBDd7pE.png" width="20"></a> <br> Jiyoon Kim |
|Backend<br>Design|Backend<br>Server|Backend<br>Video Director|Frontend<br> Scenario|Frontend|
