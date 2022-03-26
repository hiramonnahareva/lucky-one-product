import React from 'react';
import './Bonus.css' ;

const Bonus = () => {
    return (
        <div>
            <h1>Bonus Part</h1>
            <div className='bonusPart'>
                <h2>State VS Props</h2>
                <div className='ans'>
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
            <div className='ans' id='ans-2'>
                <div>
                <h2>How Does React Work</h2>
                <p>In order to work react, basically two node packages require. one is react and other is react dom. A component basically is written in javascript code then to show it in browser we have to convert it in html code which react package does.Then That html code is injected in (index.html) by using react dom package. And this Html code is dynamically generated in the dom without reloading the page.that's why react works intensity and fastly. </p>
            </div>
            </div>
        </div>
    );
};

export default Bonus;