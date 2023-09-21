// import { Component } from 'react';
import './Activity1.css';

// class Activity1 extends Component {
//     state = {
//         text: '검정색 글씨',
//         color: 'black',
//     };

//     handleRed = () => {
//         this.setState({ text: '빨간색 글씨', color: 'red' });
//     };

//     handleBlue = () => {
//         this.setState({ text: '파란색 글씨', color: 'blue' });
//     };

//     render() {
//         return (
//             <div>
//                 <h1 className={this.state.color}>{this.state.text}</h1>
//                 <button onClick={this.handleRed}>빨간색</button>
//                 <button onClick={this.handleBlue}>파란색</button>
//             </div>
//         );
//     }
// }

// export default Activity1;

import { useState } from 'react';

export default function Activity1() {
    const [text, setText] = useState('검정색 글씨');
    const [style, setStyle] = useState('black');

    const handleTextColor = (text, style) => {
        setText(text);
        setStyle(style);
    };

    return (
        <div>
            <h1 style={{ color: style }}>{text}</h1>
            <button onClick={() => handleTextColor('빨간색 글씨', 'red')}>빨간색</button>
            <button onClick={() => handleTextColor('파란색 글씨', 'blue')}>파란색</button>
        </div>
    );
}
