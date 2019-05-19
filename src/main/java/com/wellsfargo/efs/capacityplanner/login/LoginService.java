package com.wellsfargo.efs.capacityplanner.login;

/**
 * LoginService.java
 * 
 * @author Kalyan.Sarkar
 * @version 1.1.0
 * 
 * Wells Fargo © 2019
 */

public interface LoginService {
	
	public User auth(final LoginRequest loginRequest);

}
