import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onChangePage: PropTypes.func,
};

Pagination.defaultProps = {
  pagination: {},
  onChangePage: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);
  const handlePageChange = (newPage) => {
    if (!onPageChange) return;
    onPageChange(newPage);
  };

  return (
    <div>
      <button
        className="prev"
        disabled={_page <= 1}
        onClick={() => {
          handlePageChange(_page - 1);
        }}
      >
        Prev
      </button>
      <button
        className="next"
        disabled={_page >= totalPage}
        onClick={() => {
          handlePageChange(_page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
