package com.example.crudpi.Interface;

import com.example.crudpi.entity.User;

import java.util.List;

public interface IUser {

    User saveUser(User user);
    void  deleteUser(User user);
    User getUser(int id);
    List<User> getUsers();
}
