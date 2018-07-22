import React from 'react';
import PropTypes from 'prop-types'

import { Tags } from '../../Tags';

const ProjectInfoBar = ({ client, date, tags }) => {
	return (
		<ul className="project-info-bar row list-unstyled">
			<li className="col-xs-12 col-md-4">
				<h4 className="project-info-bar__title">Client</h4>
				<p className="project-info-bar__value">{client}</p>
			</li>
			<li className="col-xs-12 col-md-4">
				<h4 className="project-info-bar__title">Date</h4>
				<p className="project-info-bar__value">{date}</p>
			</li>
			<li className="col-xs-12 col-md-4">
				<h4 className="project-info-bar__title">Tech</h4>
				<Tags items={tags} />
			</li>
		</ul>
	);
};

ProjectInfoBar.defaultProps = {
	client: null,
	date: null,
	tags: [],
};

ProjectInfoBar.propTypes = {
	client: PropTypes.string,
	date: PropTypes.string,
	tags: PropTypes.array,
};

export default ProjectInfoBar;
