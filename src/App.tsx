import React, {useState} from 'react';
import './App.css';
import {Buttons} from './components/Buttons/Buttons';
import {Display} from './components/Display/Display';

function App() {

    const [count, setCount] = useState(0)
    const [disable, setDisabled] = useState(false)

    function incCount() {
        if (count === 4) {
            setCount(count + 1)
            setDisabled(true)
        } else {
            setCount(count + 1)
        }
    }

    function resetCount() {
        setCount(0)
        setDisabled(false)
    }

    return <div className='App'>
        <div className='Count'>
            <Display value={count} disable={disable}/>
            <Buttons incButton={incCount} resetButton={resetCount} disable={disable} incValue={count}
                     resetValue={count}/>
        </div>
    </div>
}

export default App;
