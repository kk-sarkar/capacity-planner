import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../../styles/StackedHorizontalBar.css';


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

		const { data, config } = this.props;
		const dimensions = this.calculateDimensions(data);

		return (
			<div className="chart-container">
				<BarChart width={dimensions.width} height={dimensions.height} 
							data={data}
							layout="vertical"
							stackOffset={config.stackOffset}
		            		margin={{top: 20, right: 10, left: 50, bottom: 10}}>
		       <CartesianGrid strokeDasharray="3 3"/>
		       <XAxis type="number" dataKey={config.dataKey.xaxis}/>
		       <YAxis type="category" dataKey={config.dataKey.yaxis}/>
		       <Tooltip/>
		       <Legend />
		       <Bar dataKey={config.dataKey.lowerbar} stackId="a" fill="#16174f" />
		       <Bar dataKey={config.dataKey.upperbar} stackId="a" fill="#c43235" />
		      </BarChart>
			</div>
		);
	}
}

export default StackedHorizontalBar;