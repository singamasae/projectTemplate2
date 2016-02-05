package com.project.template.model;

import java.io.Serializable;

import java.util.Date;
import java.util.HashSet;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "role")
@DynamicUpdate(value = true)
public class Role implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid2")
	private String id;
	@Column(name = "name", nullable = false, unique = true)
	private String name;
	@Column(name = "description")
	private String description;
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "role")
	@JsonIgnore
	private Set<User> users = new HashSet<User>();
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "role")
	@JsonIgnore
	private Set<RoleList> roleLists = new HashSet<RoleList>();
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_at")
	@JsonIgnore
	private Date createdAt;
	@Column(name = "created_by")
	@JsonIgnore
	private String createdBy;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_at")
	@JsonIgnore
	private Date updatedAt;
	@Column(name = "updated_by")
	@JsonIgnore
	private String updatedBy;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "deleted_at")
	@JsonIgnore
	private Date deletedAt;
	@Column(name = "deleted_by")
	@JsonIgnore
	private String deletedBy;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public Set<RoleList> getRoleLists() {
		return roleLists;
	}

	public void setRoleLists(Set<RoleList> roleLists) {
		this.roleLists = roleLists;
	}

	public Date getCreatedAt() {
		return this.createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getUpdatedAt() {
		return this.updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public String getUpdatedBy() {
		return this.updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public Date getDeletedAt() {
		return this.deletedAt;
	}

	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	public String getDeletedBy() {
		return this.deletedBy;
	}

	public void setDeletedBy(String deletedBy) {
		this.deletedBy = deletedBy;
	}
}
