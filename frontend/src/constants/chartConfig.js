import React from 'react';

export const UtilizationChartConfig = {
	
	stackOffset: 'none',
	dataKey : 	{
					xaxis: '',
					yaxis: 'employeeName',
					lowerbar: 'billedHours',
					upperbar: 'benchHours'
				}

};

export const DeliveryVarianceChartConfig = {
	
	stackOffset: 'sign',
	dataKey : 	{
					xaxis: '',
					yaxis: 'projectName',
					lowerbar: 'negVariance',
					upperbar: 'posVariance'
				}

};

const RADIAN = Math.PI / 180;
export const AUBudgetingChartConfig = {
	nameKey: "projectName",
	dataKey: "percentage",
	labelLine: false,
	labelRenderFunction: function({
							  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
							}) {
							  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
							  const x = cx + radius * Math.cos(-midAngle * RADIAN);
							  const y = cy + radius * Math.sin(-midAngle * RADIAN);

							  return (
							    <text 
							    		x={x} y={y} 
							    		fill="white" 
							    		textAnchor={x > cx ? 'start' : 'end'} 
							    		dominantBaseline="central">
							      {`${(percent * 100).toFixed(2)}%`}
							    </text>
							  );
							}
}