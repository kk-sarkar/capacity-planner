export const UtilizationTableConfig = {
	
	columns : 	[
				  { title: "ID", field: "employeeId", width: 180 },
				  { title: "Name", field: "employeeName", width: 180},
				  { title: "Expertise", field: "expertise", width: 180},
				  { title: "Location", field: "location", width: 180},
				  { title: "% Utilization", field: "percentUtilization", width: 180},
				  { title: "Bench Hours", field: "benchHours", width: 180},
				  { title: "Billed Hours", field: "billedHours", width: 180},
				  { title: "Skills Level", field: "skillsLevel", width: 180}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20
	}

};

export const AUBudgetingTableConfig = {
	
	columns : 	[
				  { title: "AU", field: "au", width: 140 },
				  { title: "Project ID", field: "projectId", width: 240},
				  { title: "Project Name", field: "projectName", width: 240},
				  { title: "Estimated Hours", field: "estimatedHours", width: 250},
				  { title: "Cost", field: "cost", width: 200}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20,
		  		layout: "fitColumns"
	}

};

export const TCPEstimatedCostTableConfig = {
	
	columns : 	[
				  { title: "Project ID", field: "projectId", width: 240},
				  { title: "Project Name", field: "projectName", width: 250},
				  { title: "Estimated Cost", field: "estimatedCost", width: 250}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20,
		  		layout: "fitColumns"
	}

};

export const TCPEstimatedCostBurndownTableConfig = {
	
	columns : 	[
				  { title: "Employee ID", field: "employeeId", width: 150},
				  { title: "Employee Name", field: "employeeName", width: 200},
				  { title: "Billed Period", field: "billedPeriod", width: 140},
				  { title: "LOB", field: "lob", width: 100},
				  { title: "Location", field: "location", width: 160},
				  { title: "Skills", field: "skills", width: 160},
				  { title: "Hours", field: "hours", width: 100},
				  { title: "Cost", field: "cost", width: 80}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20,
		  		layout: "fitColumns"
	}

};

export const CostEstimationTableConfig = {
	
	columns : 	[
				  { title: "Project ID", field: "projectId", width: 120},
				  { title: "Project Name", field: "projectName", width: 200},
				  { title: "Start Date", field: "startDate", width: 140},
				  { title: "End Date", field: "endDate", width: 140},
				  { title: "Estimated Hour", field: "estimatedHour", width: 160},
				  { title: "Estimated Cost", field: "estimatedCost", width: 170}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20,
		  		layout: "fitColumns"
	}

};

export const DeliveryVarianceTableConfig = {
	
	columns : 	[
				  { title: "Project ID", field: "projectId", width: 140},
				  { title: "Project Name", field: "projectName", width: 200},
				  { title: "SDLC Stage", field: "sdlcStage", width: 200},
				  { title: "Estimated Cost", field: "estimatedCost", width: 180},
				  { title: "Burndown Cost", field: "burndownCost", width: 180},
				  { title: "Variance", field: "variance", width: 180}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20,
		  		layout: "fitColumns"
	}

};

export const RequiredSkillHoursTableConfig = {
	
	columns : 	[
				  { title: "Employee ID", field: "employeeId", width: 140},
				  { title: "Employee Name", field: "employeeName", width: 200},
				  { title: "Skills", field: "skills", width: 400},
				  { title: "Expertise", field: "expertise", width: 400},
				  { title: "Years of Experience", field: "yearsOfExp", width: 180},
				  { title: "Period End Data", field: "periodEndDate", width: 180},
				  { title: "Hours", field: "hours", width: 180}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20
	}

};

export const CapacityMapSkillsTableConfig = {
	
	columns : 	[
				  { title: "Skill", field: "skill", width: 240},
				  { title: "Count", field: "count", width: 200}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20
	}

};

export const CapacityMapExpertiseTableConfig = {
	
	columns : 	[
				  { title: "Expertise", field: "expertise", width: 240},
				  { title: "Count", field: "count", width: 200}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20
	}

};

export const CapacityMapCertificationTableConfig = {
	
	columns : 	[
				  { title: "Certification", field: "certification", width: 240},
				  { title: "Count", field: "count", width: 200}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20
	}

};

export const CapacityMapYearsExpTableConfig = {
	
	columns : 	[
				  { title: "Years of Experience", field: "yearsOfExp", width: 240},
				  { title: "Count", field: "count", width: 200}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20
	}

};




