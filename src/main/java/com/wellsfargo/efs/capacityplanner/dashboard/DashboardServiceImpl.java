package com.wellsfargo.efs.capacityplanner.dashboard;

/**
 * DashboardServiceImpl.java
 * 
 * @author Kalyan.Sarkar
 * @version 1.1.0
 * 
 * Wells Fargo © 2019
 */

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

	@Override
	public final List<Utilization> getUtilization(final String profileName) {
		final List<Utilization> list = new ArrayList<>();
		
		Utilization util = new Utilization();
		util.setEmployeeId("u614376");
		util.setEmployeeName("Kalyan Sarkar");
		util.setExpertise("developer");
		util.setLocation("Bengaluru");
		util.setPercentUtilization(BigDecimal.valueOf(99));
		util.setBenchHours(1);
		util.setBilledHours(99);
		util.setSkillsLevel("level-1");
		list.add(util);
		
		util = new Utilization();
		util.setEmployeeId("u614377");
		util.setEmployeeName("Vaibhav Srivastava");
		util.setExpertise("manager");
		util.setLocation("Bengaluru");
		util.setPercentUtilization(BigDecimal.valueOf(99));
		util.setBenchHours(12);
		util.setBilledHours(88);
		util.setSkillsLevel("level-4");
		list.add(util);
		
		util = new Utilization();
		util.setEmployeeId("u614378");
		util.setEmployeeName("Ramananda Sahu");
		util.setExpertise("dba");
		util.setLocation("Bengaluru");
		util.setPercentUtilization(BigDecimal.valueOf(99));
		util.setBenchHours(7);
		util.setBilledHours(91);
		util.setSkillsLevel("level-1");
		list.add(util);
		
		return list;
	}


}
