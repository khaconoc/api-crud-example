package com.example.apicrudexample.Pojo;

import java.util.Date;
import java.util.UUID;

public class UserModel {
    String id = UUID.randomUUID().toString();
    String fullName;
    int age;
    Date birthDate;
    int level;

    public UserModel() {
    }

    public UserModel(String id, String fullName, int age, Date birthDate, int level) {
        this.id = id;
        this.fullName = fullName;
        this.age = age;
        this.birthDate = birthDate;
        this.level = level;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }
}
