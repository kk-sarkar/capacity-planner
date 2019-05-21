import React, { Component } from 'react';
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import { ReactTabulator } from "react-tabulator";
import '../../styles/Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSVLink } from "react-csv";

class Table extends Component {

	ref = null;

	constructor(props) {
		super(props);
	}

	render() {

		const { data=[], config={}} = this.props;

		return (
			<div>
				<div className="above-table-container">
					<div>
						<label className="data-count">
							<FontAwesomeIcon icon="hashtag" /> {data.length}
						</label>
					</div>
					<div>
						<CSVLink data={data} className="download" title="Download the table data in CSV format.">
							Download CSV
						</CSVLink>
					</div>
				</div>
				<ReactTabulator
		          ref={ref => (this.ref = ref)}
		          columns={config.columns}
		          data={data}
		          options={config.options}
		          data-custom-attr="test-custom-attribute"
		          className="custom-css-class"
		        />
			</div>
			
		);
	}
}

export default Table;