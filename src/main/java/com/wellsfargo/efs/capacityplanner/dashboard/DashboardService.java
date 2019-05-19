package com.wellsfargo.efs.capacityplanner.dashboard;

/**
 * DashboardService.java
 * 
 * @author Kalyan.Sarkar
 * @version 1.1.0
 * 
 * Wells Fargo © 2019
 */

import java.util.List;

public interface DashboardService {

	public List<Utilization> getUtilization(final String profileName);

}
