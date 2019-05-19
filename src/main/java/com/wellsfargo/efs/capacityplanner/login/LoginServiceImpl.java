package com.wellsfargo.efs.capacityplanner.login;

/**
 * LoginServiceImpl.java
 * 
 * @author Kalyan.Sarkar
 * @version 1.1.0
 * 
 * Wells Fargo © 2019
 */


import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

	@Override
	public final User auth(final LoginRequest loginRequest) {
		if (loginRequest != null && "test".equals(loginRequest.getUserId())
				&& "test".equals(loginRequest.getPassword())) {

			final User user = new User();
			user.setProfileName("admin");
			user.setUserId("u614376");
			user.setUserName("Kalyan Sarkar");
			return user;

		}
		return null;
	}

}
