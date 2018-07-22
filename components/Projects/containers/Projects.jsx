import React from 'react';
import PropTypes from 'prop-types'
import { scrollToElement, extractErrors } from '../../helpers';

import { Errors } from '../../Errors/components';
import { ProjectListing } from '../components';
import { TimelineStem, TimelineCircle } from '../../Timeline';

import getProjectYear from '../helpers';

class Projects extends React.Component {
	static propTypes = {
		posts: PropTypes.arrayOf(PropTypes.object)
	}

	constructor(props) {
		super(props);

		this.state = {
			toggledProject: null,
			errors: [],
		};
	}

	componentDidMount() {

	}

	render() {
		const { toggledProject, errors } = this.state;

		const posts = Array.from(this.props.posts).sort((a,b) => new Date(b.fields.date) - new Date(a.fields.date))
		
		const currentYear = getProjectYear(posts[0].fields);
		const categories = [currentYear];

		return (
			<div className="projects">
				<a
					onClick={e => scrollToElement(e, 'tc-projects')}
					href="#tc-projects"
					className="timeline-cta"
				>
					<TimelineCircle size={93} half="left" />
					<TimelineCircle size={93} half="right" />
					<span className="timeline-cta__label display-4">{currentYear}</span>
					<TimelineStem height={33} width={2} />
				</a>

				{errors.length ? <Errors messages={errors} /> : null}

				<div id="tc-projects">
					<ol className="list-unstyled">
						{posts.map(({ fields }) => {
							let showCategory = false;

							if (categories.indexOf(getProjectYear(fields)) < 0) {
								categories.push(getProjectYear(fields));
								showCategory = true;
							}

							return (
								<ProjectListing
									key={fields.slug}
									project={{
										title: fields.title,
										date: fields.date,
										duration: fields.duration,
										slug: fields.slug,
										excerpt: fields.excerpt,
										body: fields.body,
										tags: fields.tags,
										clientName: fields.clientName,
										caseStudy: fields.caseStudy,
										liveDemo: fields.liveDemo
									}}
									showCategory={showCategory}
									isToggled={fields.slug === toggledProject}
									onToggleMore={(evt, id) => {
										evt.preventDefault();

										if (id === toggledProject) {
											this.setState({ toggledProject: null });
										} else {
											this.setState({ toggledProject: id });
										}
									}}
								/>
							);
						})}
					</ol>
				</div>
			</div>
		);
	}
}

export default Projects;
