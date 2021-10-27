FROM openjdk:8-jdk-alpine
ARG JAR_FILE=build/libs/*.jar
COPY build/libs/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
