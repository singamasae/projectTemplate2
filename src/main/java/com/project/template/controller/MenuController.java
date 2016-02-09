package com.project.template.controller;

import java.security.Principal;
import java.util.List;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.project.template.model.Menu;
import com.project.template.services.UserServices;

@Controller
public class MenuController {
	@Autowired
	private UserServices userServices;
	private static Logger log = LoggerFactory.getLogger(MenuController.class);

	@RequestMapping(value = "/api/user/menu", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public List<Menu> findMenu(Principal user) throws Exception {		

		List<Menu> menus = userServices.findMenuByUserName(user.getName());

		return menus;
	}

	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(Exception.class)
	public void errorHandle(Exception e) {
		log.error(e.getMessage(), e);
	}

}
