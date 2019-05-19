package com.wellsfargo.efs.capacityplanner;

/**
 * AppUtils.java
 * 
 * @author Kalyan.Sarkar
 * @version 1.1.0
 * 
 * Wells Fargo © 2019
 */

import org.springframework.http.HttpStatus;

public final class AppUtils {

	private AppUtils() {
		// no-op constructor
	}

	public static final String getResponseErrorMessage(final HttpStatus status, final String errorMessage) {
		return HttpStatus.OK.equals(status) ? null : errorMessage;
	}

}
