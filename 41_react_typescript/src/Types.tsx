import React, { useState } from 'react';

interface Props {
    name?: string;
}
interface Data {
    name: string;
    age: number;
}
// 컴포넌트 제작 방법 2
const Types: React.FC<Props> = (props) => {
    const [count, setCount] = useState<Data>();
    return (
        <>
            <h2>Hello {props.name}</h2>
        </>
    );
};

export default Types;

/*
// 컴포넌트 제작 방법 1
export default function Types({ name }: Props) {
    return (
        <>
            <h2>Hello {name}</h2>
        </>
    );
}
*/
