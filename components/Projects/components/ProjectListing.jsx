import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

import {
	ProjectInfoBar,
	ProjectCTAs,
	ProjectThumbnail,
	ProjectCloseBtn,
	ViewMoreBtn
} from '../components';

import getProjectYear from '../helpers';

class ProjectListing extends React.Component {
	constructor(props) {
		super(props);

		this.sr = { reveal: () => {} }

		this.state = {
			hasLoaded: false,
			isAnimated: false,
		};

		this.calculateProjectHeight = this.calculateProjectHeight.bind(this);
	}

	componentDidMount() {
		this.sr = require('scrollreveal')();

		window.addEventListener('resize', this.calculateProjectHeight);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.calculateProjectHeight);
	}

	setProjectHeight() {
		this.listingRef.style.maxHeight = `${this.listingRef.firstElementChild.clientHeight}px`;
	}

	calculateProjectHeight() {
		if (this.listingRef && this.listingRef.classList.contains('project-listing__detailed--toggled')) {
			this.setProjectHeight();
		}
	}

	render() {
		const {
			project: {
				metadata
			},
			project,
			showCategory,
			isToggled,
			onToggleMore
		} = this.props;

		const { hasLoaded, isAnimated } = this.state;

		const scrollConfig = {
			duration: 400,
			delay: 150,
			beforeReveal: () => this.setState({ isAnimated: true })
		};

		return (
			<li
				ref={element => element && this.sr.reveal(element, scrollConfig)}
				className={classNames('project-listing', {
					'project-listing--toggled': isToggled,
					'project-listing--animated': isAnimated,
				})}
			>
				{showCategory ?
					<h3 className="project-listing__date">{getProjectYear(project)}</h3>
					: null
				}

				<div className="project-listing__body">
					<a className="project-listing__preview row" href={`./${project.slug}`} onClick={evt => onToggleMore(evt, project.slug)}>
						<ProjectCloseBtn />

						<div className="col-xs-12 col-md-5">
							<ProjectThumbnail
								lazyLoad={!!isAnimated}
								alt={project.title}
								src={`/static/project-thumbnails/${project.slug}.jpg`}
								srcset={`/static/project-thumbnails/${project.slug}@2x.jpg 2x`}
							/>
						</div>
						<div className="col-xs-12 col-md-7">
							<div className="project-listing__preview-meta">
								<h3 className="project-listing__preview-title display-3">
									{project.title}
								</h3>
								<p
									className="project-listing__preview-excerpt"
									dangerouslySetInnerHTML={{ __html: project.excerpt }}
								/>
							</div>
						</div>
					</a>

					<div
						ref={(element) => {
							this.listingRef = element;

							if (this.listingRef && !hasLoaded) {
								this.setState({ hasLoaded: true });
								this.setProjectHeight();
							}
						}}
						className={classNames('project-listing__detailed', {
							'project-listing__detailed--toggled': isToggled,
							'project-listing__detailed--loaded': hasLoaded,
						})}
					>
						<div className="project-listing__detailed-body">
							<ProjectInfoBar
								client={project.clientName}
								date={project.duration}
								tags={project.tags}
							/>

							<ProjectCTAs
								liveDemoUrl={project.liveDemo && project.liveDemo}
							/>

							<p
								className="project-listing__excerpt-full"
								dangerouslySetInnerHTML={{
									__html: project.body.replace(/\n/g, '<br />')
								}}
							/>

							<ViewMoreBtn
								url={project.slug}
								isVisible={project.caseStudy}
							/>
						</div>
					</div>
				</div>
			</li>
		);
	}
}

ProjectListing.defaultProps = {
	showCategory: false,
	isToggled: false,
};

ProjectListing.propTypes = {
	project: PropTypes.shape({
		title: PropTypes.string,
		slug: PropTypes.string,
		date: PropTypes.string,
		duration: PropTypes.string,
		excerpt: PropTypes.string,
		tags: PropTypes.array,
		body: PropTypes.string,
		clientName: PropTypes.string,
		caseStudy: PropTypes.bool,
		liveDemo: PropTypes.string
	}).isRequired,
	showCategory: PropTypes.bool,
	isToggled: PropTypes.bool,
	onToggleMore: PropTypes.func.isRequired,
};

export default ProjectListing;
