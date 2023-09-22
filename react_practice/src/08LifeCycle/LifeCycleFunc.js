import { useState, useEffect } from 'react';

function MyComponent(props) {
    const { number } = props;
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('항상실행');
    });
    useEffect(() => {
        console.log('생성될 때 실행');

        return () => {
            console.log('제거될 때 실행');
        };
    }, []);
    useEffect(() => {
        console.log('state가 변경 될 때 실행');
    }, [text]);

    return (
        <>
            <div>My Component Function {number}</div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
}

export default function LifeCycleFunc() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    const changeNumberState = () => {
        setNumber(() => number + 1);
    };

    const chagneVisibleState = () => {
        setVisible(() => !visible);
    };

    return (
        <>
            <button onClick={changeNumberState}>PLUS</button>
            <button onClick={chagneVisibleState}>ON/OFF</button>
            {visible && <MyComponent number={number} />}
        </>
    );
}
