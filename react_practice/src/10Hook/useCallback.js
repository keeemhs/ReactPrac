import { useState, useCallback } from 'react';

function ChildComponent() {
    console.log('Child Component');
    return (
        <>
            <button onClick={onClick}>PLUS</button>
        </>
    );
}

export default function UseCallback() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const plusCount = () => {
        setCount(() => count + 1);
    };

    const plusCountCallback = useCallback(() => {
        setCount(() => count + 1);
    }, [count]);

    return (
        <>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <ChildComponent onClick={plusCountCallback} />
            <p>{count}</p>
        </>
    );
}
