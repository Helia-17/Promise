# 포팅 메뉴얼

## 1. gitlab 소스 클론 이후 빌드 및 배포할 수 있는 작업 문서

### 1) 사용한 JVM, 웹서버, IDE 버전 기재

#### JVM

![스크린샷_2021-11-18_오후_3.32.38](/uploads/d031865f50653cd050f79ffb71215800/스크린샷_2021-11-18_오후_3.32.38.png)

#### 웹서버

Nginx

![스크린샷_2021-11-18_오후_3.33.18](/uploads/7d0abdb1c4e4a9f974a11b6dfccce72b/스크린샷_2021-11-18_오후_3.33.18.png)

Apache Tomcat 9.0.52

#### IDE

STS : 3.9.14

Visual Studio Code : 1.60.2

MySQL Workbench : 8.0.22

Xcode : 13.0

Android Studio : 2020.3.1

#### App SDK

iOS SDKs: iOS 15.0

minimum iOS SDKs : iOS 11.0

Android SDKs : Android 11.0 (R)

### 2) 빌드 시 사용되는 환경 변수

JAVA 

![스크린샷_2021-11-18_오후_3.33.50](/uploads/2ded97de36ab3082df0797fa1987e9cd/스크린샷_2021-11-18_오후_3.33.50.png)

Spring Build to Dockerfile
```
FROM openjdk:8-jdk-alpine
RUN apk add --no-cache tzdata
ENV TZ Asia/Seoul
COPY build/libs/promise-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```



### 3) 배포 시 특이사항 기재


Backend 배포에 jenkins를 사용해서 docker image로 만들어진 spring project 배포

**Spring** - pm-spring:latest

**MySQL** - mysql-container 설치로 진행

**Jenkins** - Jenkins-docker

```
sudo docker pull [이미지이름]
sudo docker run -d -p [도커 컨테이너 포트번호]:[서버 포트번호] [이미지이름]
```

### 4) DB 접속 정보 등 파일 목록

**[Spring]**

application.properties

application-db.properties : gitignore에 등록

application-jwt.properties : gitignore에 등록



## 2. 프로젝트에서 사용하는 외부 서비스 정보 문서

### 구글 로그인 

https://developers.google.com/identity/sign-in/web/sign-in

### 구글 맵

https://developers.google.com/maps/documentation?hl=ko

### 애플 로그인

https://developer.apple.com/kr/sign-in-with-apple/get-started/

### 애플 맵

https://developer.apple.com/maps/
