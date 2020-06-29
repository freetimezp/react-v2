import React from 'react';

import styles from './ClockJs.module.css';

const ClockJs = (props) => {

    // const deg = 6;
    // const hr = document.getElementById('hr');
    // const mn = document.getElementById('mn');
    // const sc = document.getElementById('sc');
    //
    // console.log(hr);
    // console.log(mn);
    // console.log(sc);
    //
    // setInterval(() => {
    //     let day = new Date();
    //     let hh = day.getHours() * 30;
    //     let mm = day.getMinutes() * deg;
    //     let ss = day.getSeconds() * deg;
    //
    //     hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    //     mn.style.transform = `rotateZ(${mm}deg)`;
    //     sc.style.transform = `rotateZ(${ss}deg)`;
    // })

    return (
        <div className={styles.clock}>
            <div className={styles.hour}>
                <div className={styles.hr} id="#hr"></div>
            </div>
            <div className={styles.min}>
                <div className={styles.mn} id="#mn"></div>
            </div>
            <div className={styles.sec}>
                <div className={styles.sc} id="#sc"></div>
            </div>
        </div>
    )
}

export default ClockJs;