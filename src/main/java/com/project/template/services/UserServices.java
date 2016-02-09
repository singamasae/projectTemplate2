package com.project.template.services;

import java.util.List;

import com.project.template.model.Menu;
import com.project.template.model.User;

public interface UserServices {
	User findByUserName(String userName);
	
	List<Menu> findMenuByUserName(String userName);
}
