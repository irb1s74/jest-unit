import React, {useEffect, useState} from 'react';

const App = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    });
    const handleClick = () => {
        setToggle((prevState) => !prevState)
    }

    return (
        <div>
            {toggle && <div data-testid='toggled-item'>"toggled"</div>}
            {data && <div>data</div>}
            <button onClick={handleClick} data-testid='toggle-btn'>click on me</button>
            render app
            <div data-testid='input-value'>{value}</div>
            <input data-testid='input' onChange={(e) => setValue(e.target.value)} type='text' placeholder='input'/>
        </div>
    );
};

export default App;
