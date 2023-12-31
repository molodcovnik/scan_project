import React from 'react';

import '../styles/SummarySlide.css';

const SummarySlide = (props) => {
    // console.log(props);
    let year = props.date.slice(0, 4)
    let month = props.date.slice(5, 7)
    let day = props.date.slice(8, 10)


    return (
        <div className='slide-wrapper-summary'>
            <div className="summary-slide">
                <p onClick={() => {
                    console.log(`${day}.${month}.${year}`);
                }}>{`${day}.${month}.${year}`}</p>
                <p>{props.total}</p>
                <p>{props.risks}</p>
            </div>
            <div className="slide-line"></div>
        </div>
    );
};

export default SummarySlide;