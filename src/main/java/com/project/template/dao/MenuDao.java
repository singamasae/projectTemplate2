package com.project.template.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.project.template.model.Menu;

public interface MenuDao extends PagingAndSortingRepository<Menu, String> {
	@Query("select m from Menu m join m.roleLists rl join rl.role r join r.users u where u.username = :username")
	List<Menu> findByUserName(@Param("username") String userName);
}
