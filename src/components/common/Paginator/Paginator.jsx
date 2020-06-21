import React from 'react';

import classes from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(page => {
                return <span className={currentPage === page && classes.selectedPage}
                             onClick={(event) => {
                                 onPageChanged(page);
                             }}>{page}</span>
            })}
        </div>
    );
}

export default Paginator;