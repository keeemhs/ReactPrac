// import { Component } from 'react';

// class Activity2 extends Component {
//     state = {
//         className: 'appear',
//         showDisappearButton: true,
//         showAppearButton: false,
//     };

//     handleDisappear = () => {
//         this.setState({
//             className: 'appear',
//             showDisappearButton: false,
//             showAppearButton: true,
//         });
//     };

//     handleAppear = () => {
//         this.setState({
//             className: 'disappear',
//             showDisappearButton: true,
//             showAppearButton: false,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <button className={this.state.className} onClick={this.handleDisappear} style={{ display: this.state.showDisappearButton ? 'block' : 'none' }}>
//                     보여라
//                 </button>
//                 <button className={this.state.className} onClick={this.handleAppear} style={{ display: this.state.showAppearButton ? 'block' : 'none' }}>
//                     사라져라
//                 </button>
//                 <h1 style={{ display: this.state.showAppearButton ? 'block' : 'none' }}>안녕하세요</h1>
//             </div>
//         );
//     }
// }

// export default Activity2;

import { useState } from 'react';

export default function Activity2() {
    const [status, setStatus] = useState(true);
    const [btnText, setBtnText] = useState('사라져라');

    const handleToggle = () => {
        setStatus(!status);
        if (btnText == '사라져라') {
            setBtnText('보여라');
        } else {
            setBtnText('사라져라');
        }
    };

    return (
        <div>
            <button onClick={handleToggle}>{btnText}</button>
            <h1>{status && '안녕하세요'}</h1>
        </div>
    );
}
