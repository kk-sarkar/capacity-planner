package com.wellsfargo.efs.capacityplanner.dashboard;

/**
 * Utilization.java
 * 
 * @author Kalyan.Sarkar
 * @version 1.1.0
 * 
 * Wells Fargo © 2019
 */

import java.math.BigDecimal;

public class Utilization {

	private String employeeId;
	private String employeeName;
	private String location;
	private String skillsLevel;
	private String expertise;
	private String yearsOfExp;
	private Integer billedHours;
	private Integer benchHours;
	private BigDecimal percentUtilization;

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSkillsLevel() {
		return skillsLevel;
	}

	public void setSkillsLevel(String skillsLevel) {
		this.skillsLevel = skillsLevel;
	}

	public String getExpertise() {
		return expertise;
	}

	public void setExpertise(String expertise) {
		this.expertise = expertise;
	}

	public String getYearsOfExp() {
		return yearsOfExp;
	}

	public void setYearsOfExp(String yearsOfExp) {
		this.yearsOfExp = yearsOfExp;
	}

	public Integer getBilledHours() {
		return billedHours;
	}

	public void setBilledHours(Integer billedHours) {
		this.billedHours = billedHours;
	}

	public Integer getBenchHours() {
		return benchHours;
	}

	public void setBenchHours(Integer benchHours) {
		this.benchHours = benchHours;
	}

	public BigDecimal getPercentUtilization() {
		return percentUtilization;
	}

	public void setPercentUtilization(BigDecimal percentUtilization) {
		this.percentUtilization = percentUtilization;
	}

}
