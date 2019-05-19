package com.wellsfargo.efs.capacityplanner.login;

/**
 * LoginRequest.java
 * 
 * @author Kalyan.Sarkar
 * @version 1.1.0
 * 
 * Wells Fargo © 2019
 */

import javax.validation.constraints.NotNull;

public class LoginRequest {
	
	@NotNull
	private String userId;
	
	@NotNull
	private String password;
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
