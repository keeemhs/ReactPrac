import { Component } from 'react'; // 1번방법
import React from 'react'; // 2번방법
import './App.css';

// class형 컴포넌트
// class 컴포넌트명 extends Component{} // 1번방법

// class ClassComponent extends React.Component{} // 2번방법

class Test extends Component {
    //클래스형 컴포넌트에서는 render 함수는 필수
    render() {
        const name = '김현승';
        return (
            <>
                <div className="myStyle">Hello {name}</div>
            </>
        );
    }
}

export default Test;
