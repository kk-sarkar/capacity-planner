import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../../styles/StackedHorizontalBar.css';
import { UtilizationChartConfig } from '../../constants/chartConfig';

class StackedHorizontalBar extends Component {

	constructor(props) {
		super(props);
	}

	calculateDimensions = data => {
		const dimensions = {};
		dimensions.width = data && data.length ? 550: 0 ;
		dimensions.height = data && data.length ? (data.length*60 + 60): 0 ;
		return dimensions;
	}

	render() {

		const { data } = this.props;
		const dimensions = this.calculateDimensions(data);

		return (
			<div className="chart-container">
				<BarChart width={dimensions.width} height={dimensions.height} data={data}
					layout="vertical"
		            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
		       <CartesianGrid strokeDasharray="3 3"/>
		       <XAxis type="number" dataKey={UtilizationChartConfig.dataKey.xaxis}/>
		       <YAxis type="category" dataKey={UtilizationChartConfig.dataKey.yaxis}/>
		       <Tooltip/>
		       <Legend />
		       <Bar dataKey={UtilizationChartConfig.dataKey.lowerbar} stackId="a" fill="#16174f" />
		       <Bar dataKey={UtilizationChartConfig.dataKey.upperbar} stackId="a" fill="#c43235" />
		      </BarChart>
			</div>
		);
	}
}

export default StackedHorizontalBar;