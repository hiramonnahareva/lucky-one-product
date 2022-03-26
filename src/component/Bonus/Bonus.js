import React from 'react';
import './Bonus.css' ;

const Bonus = () => {
    return (
        <div>
            <h1>Bonus Part</h1>
            <div className='bonusPart'>
                <h2>state vs props</h2>
                <div className='ans-1'>
                <ol>
                <li>
                state are mutable.
                </li>
                <li>
                we can define state in the component itself.
                </li>
                <li>
                State updates in React are asynchronous. 
                </li>
                </ol>
                <ol>
                    <li>
                    props are immutable .
                    </li>
                    <li>
                    we can pass propeties from parent components.
                    </li>
                    <li>
                    props are read-only .
                    </li>
                </ol>
            </div>
            </div>
        </div>
    );
};

export default Bonus;