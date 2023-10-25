import React from 'react';

const SummarySlide = (props) => {
    let year = props.total.date.slice(0, 4)
    let month = props.total.date.slice(5, 7)
    let day = props.total.date.slice(8, 10)


    return (
        <>
            <div className="summary-slide">
                <p>{`${day}.${month}.${year}`}</p>
                <p>{props.total.value}</p>
                <p>0</p>
            </div>
            <div className="slide-line"></div>
        </>
    );
};

export default SummarySlide;