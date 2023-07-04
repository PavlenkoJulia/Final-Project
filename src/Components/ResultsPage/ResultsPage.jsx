import React from 'react';
import "./ResultsPage.css";
import { Waiting } from '../WaitingPart/WaitingPart';
import { Summary } from '../ResultsSummary/ResultsSummary';
import { Posts } from '../Posts/Posts';

export const Results = () => {
    return (
        <div className='resultPageWrapper'>
            <Waiting />
            <Summary />
            <Posts />
        </div>
    )
}