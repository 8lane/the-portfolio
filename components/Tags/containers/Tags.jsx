import React from 'react';
import PropTypes from 'prop-types'

import { TagItem } from '../components';

class Tags extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <div className="project-tags">
        {items && items.map((tag) => {

          const slug = tag.replace(/\s/g, '-').toLowerCase()
  
          return (
            <TagItem key={tag} name={tag} slug={slug} className="project-tags__tag" />
          );
        })}
      </div>
    );
  }
}

Tags.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Tags;
