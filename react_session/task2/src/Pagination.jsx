import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { goPrev, goNext, currentPage, totalItems, itemsPerPage } = this.props;
    const isPrevPageAvailable = currentPage > 1;
    const isNextPageAvailable = currentPage < totalItems / itemsPerPage;

    return (
      <div className="pagination">
        <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
          {isPrevPageAvailable && '←'}
        </button>
        <span className="pagination__page">{currentPage}</span>
        <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
          {isNextPageAvailable && '→'}
        </button>
      </div>
    );
  }
}

export default Pagination;
