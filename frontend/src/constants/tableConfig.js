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
		  		paginationSize: 10
	}

};