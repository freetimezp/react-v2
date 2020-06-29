import React, {useState} from 'react';
import cn from 'classnames';

import classes from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 30, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
            {portionNumber > 1 &&
            <button className={classes.btnPaginator} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return <span className={ cn({
                        [classes.selectedPage] : currentPage === page}, classes.pageNumber ) }
                                 key={page}
                                 onClick={(event) => {
                                     onPageChanged(page);
                                 }}>{page}</span>
                })}
            {portionCount > portionNumber &&
            <button className={classes.btnPaginator} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    );
}

export default Paginator;