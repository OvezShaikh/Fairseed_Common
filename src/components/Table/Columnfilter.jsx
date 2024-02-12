import React from 'react'

const Columnfilter = ({column}) => {

    const { filterValue , setFilter , canFilter } = column

    return canFilter ? (
      <span>
        <input
          value={filterValue || ''}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    ) : null;
}

export default Columnfilter
