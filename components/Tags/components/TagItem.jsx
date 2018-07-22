import React from 'react';
import PropTypes from 'prop-types'

const TagItem = ({ name, slug, className }) => {
  return (
    <span className={`tag tag--${slug} ${className}`}>{name}</span>
  );
};

TagItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default TagItem;
