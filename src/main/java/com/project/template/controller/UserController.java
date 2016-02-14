package com.project.template.controller;

import java.security.Principal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class UserController {
	private static Logger log = LoggerFactory.getLogger(UserController.class);
	
	@RequestMapping(value = "/{[path:[^\\.]*}")
	public String redirect() throws Exception {
		// Forward to home page so that route is preserved.
		log.info("forward:/");
		return "forward:/";
	}

	@RequestMapping("/api/isAuthenticated")
	@ResponseBody
	public Principal user(Principal user) throws Exception {
		return user;
	}

	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(Exception.class)
	public void errorHandle(Exception e) {
		log.error(e.getMessage(), e);
	}
}
