package com.project.template.services.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.project.template.model.User;
import com.project.template.services.UserServices;

public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	UserServices userServices;
	//private static Logger log = LoggerFactory.getLogger(MyUserDetailsService.class);
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException {
		// TODO Auto-generated method stub		
		User user = userServices.findByUserName(username);
		if (user == null) {
			throw new UsernameNotFoundException("BAD_CREDENTIAL");
		}
		return new org.springframework.security.core.userdetails.User(
				user.getUsername(), user.getPassword(), Boolean.TRUE,
				Boolean.TRUE, Boolean.TRUE, Boolean.TRUE,
				getGrantedAuthorities(user));
	}

	private List<GrantedAuthority> getGrantedAuthorities(User user) {
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(user.getRole().getName()));
		return authorities;
	}

}
