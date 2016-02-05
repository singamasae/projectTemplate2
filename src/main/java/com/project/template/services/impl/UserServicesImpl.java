package com.project.template.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.template.dao.UserDao;
import com.project.template.model.User;
import com.project.template.services.UserServices;

@Service(value = "userServices")
@Transactional(value = "txManager", readOnly = true)
public class UserServicesImpl implements UserServices {
	@Autowired
	private UserDao userDao;

	@Cacheable("user")
	public User findByUserName(String userName) {
		// TODO Auto-generated method stub
		return null;
	}

}
