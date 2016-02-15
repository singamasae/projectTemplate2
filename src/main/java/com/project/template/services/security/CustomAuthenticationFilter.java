package com.project.template.services.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.template.model.User;

class CustomAuthenticationFilter extends AbstractAuthenticationProcessingFilter {
	//private static Logger log = LoggerFactory.getLogger(CustomAuthenticationFilter.class);
	protected CustomAuthenticationFilter(String defaultFilterProcessesUrl, AuthenticationManager authenticationManager, SessionAuthenticationStrategy sas) {
		super(defaultFilterProcessesUrl);
		// TODO Auto-generated constructor stub
		super.setRequiresAuthenticationRequestMatcher(new AntPathRequestMatcher(defaultFilterProcessesUrl));
		setAuthenticationManager(authenticationManager);
		setSessionAuthenticationStrategy(sas);
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException, ServletException {
		// TODO Auto-generated method stub
		User user = new ObjectMapper().readValue(request.getInputStream(), User.class);
		if (user == null) {
			throw new UsernameNotFoundException("BAD_CREDENTIAL");
		}		
		UsernamePasswordAuthenticationToken loginToken = new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());		
		return getAuthenticationManager().authenticate(loginToken);
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException,
			ServletException {
		// TODO Auto-generated method stub
		super.successfulAuthentication(request, response, chain, authResult);
		SecurityContextHolder.getContext().setAuthentication(authResult);		
	}
}