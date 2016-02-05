package com.project.template.dao;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.project.template.model.User;

public interface UserDao extends PagingAndSortingRepository<User, String> {

}
