import React from 'react';

import Loader from './Loader';
import '../styles/LoaderTable.css';;

const LoaderTable = () => {
    return (
        <div className="summary-loader">

            <div className="summary-loader-header">
                <p>Период</p>
                <p>Всего</p>
                <p>Риски</p>
            </div>
            <Loader />
        </div>
    );
};

export default LoaderTable;