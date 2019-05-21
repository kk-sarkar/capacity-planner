import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import '../../styles/PieGraph.css';

const FILL_COLORS = [
	"#16174f",
	"#c43235",
	"#9D8D8F",
	"#FFE400",
	"#14A76C",
	"#FF652F", 	  
	"#E27D60", 
	"#2F2FA2", 
	"#05386B", 
	"#379683", 
	"#D79922",
	"#5AB9EA",
	"#374785",
	"#86C232",
	"#6B6E70"

];


class PieGraph extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { data, config } = this.props;
		
		return (
			<div className="chart-container">
				 <PieChart  width={400} height={400} 
				 			margin={{ top:5, right:5, bottom:5, left: 25 }}>
		        	<Pie 
		        			isAnimationActive={true}
		        			data={data}
		        			nameKey={config.nameKey}
		        			dataKey={config.dataKey}
		        			cx="50%" 
		        			cy="50%"  
		        			outerRadius={140} 
		        			labelLine={config.labelLine}
		        			label={config.labelRenderFunction} >
		        			{
					          	data.map((entry, index) => 
					          			<Cell key={index} fill={FILL_COLORS[index % FILL_COLORS.length]}/>)
					        }
		        	</Pie>
			        <Tooltip />
			        <Legend />
			      </PieChart>
			</div>
		);
	}
}

export default PieGraph;