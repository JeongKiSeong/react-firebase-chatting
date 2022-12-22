import React from 'react'
import Board from './Board';
import Scheduler from './Scheduler';

const Notify = () => {
    return (
        <div className='notify'>
            <div className='notify_header'>
                <strong>Today 비교과 프로그램</strong>
            </div>
            <Board />
            <div className='scheduler_header'>
                <strong>Today Schedule</strong>
            </div>
            <Scheduler/>
        </div>
    )
}

export default Notify