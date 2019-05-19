package com.wellsfargo.efs.capacityplanner.dashboard;

/**
 * DashboardController.java
 * 
 * @author Kalyan.Sarkar
 * @version 1.1.0
 * 
 * Wells Fargo © 2019
 */

import java.util.List;

import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:8080" })
@RestController
public class DashboardController {

	private static final Logger LOGGER = LoggerFactory.getLogger(DashboardController.class);

	@Autowired
	private DashboardService dashboardService;

	@GetMapping(path = "/api/utilization/{profileName}", produces = MediaType.APPLICATION_JSON_VALUE)
	public final ResponseEntity<Object> getUtilization(@PathVariable("profileName") final String profileName) {
		LOGGER.debug("auth(), profileName:{}", profileName);
		final List<Utilization> list = dashboardService.getUtilization(profileName);
		return CollectionUtils.isEmpty(list) ? new ResponseEntity<>("No Utilization data found.", HttpStatus.NOT_FOUND)
				: new ResponseEntity<>(list, HttpStatus.OK);
	}
}
