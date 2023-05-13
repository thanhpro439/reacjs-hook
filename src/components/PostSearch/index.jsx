import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostSearch.propTypes = {
  onSubmit: PropTypes.func,
};

PostSearch.defaultProps = {
  onSubmit: null,
};

function PostSearch(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeOutRef = useRef(null);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeOutRef) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const newFilter = {
        searchTerm: value,
      };

      onSubmit(newFilter);
    }, 500);
  };

  return (
    <form>
      <input type='text' value={searchTerm} onChange={handleOnChange} />
    </form>
  );
}

export default PostSearch;
