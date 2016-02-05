package com.project.template.services.json;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;

public class HibernateAwareObjectMapper extends ObjectMapper {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public HibernateAwareObjectMapper() {
		// registerModule(new Hibernate4Module());
		registerModule(new Hibernate5Module());
	}
}
