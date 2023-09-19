import { Component } from 'react'; // 1번방법
import React from 'react'; // 2번방법
import './App.css';

class Test2 extends Component {
    //클래스형 컴포넌트에서는 render 함수는 필수
    render() {
        return (
            <>
                <div className="style">
                    <h2>안녕하세요</h2>
                    <img src="logo192.png" />
                </div>
            </>
        );
    }
}

export default Test2;
