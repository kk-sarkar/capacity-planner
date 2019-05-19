package com.wellsfargo.efs.capacityplanner.login;

/**
 * LoginController.java
 * 
 * @author Kalyan.Sarkar
 * @version 1.1.0
 * 
 * Wells Fargo © 2019
 */

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:8080" })
@RestController
public class LoginController {

	private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	private LoginService loginService;

	@PostMapping(path = "/api/auth", produces = MediaType.APPLICATION_JSON_VALUE)
	public final ResponseEntity<Object> auth(@Valid @RequestBody final LoginRequest loginRequest) {
		LOGGER.debug("auth(), userId:{}", loginRequest.getUserId());
		final User user = loginService.auth(loginRequest);
		return user == null ? new ResponseEntity<>("Invalid User Id or Password.", HttpStatus.NOT_FOUND)
				: new ResponseEntity<>(user, HttpStatus.OK);
	}
}
