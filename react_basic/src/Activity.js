import { Component } from 'react';

class Activity extends Component {
    constructor(message) {
        //super는 부모의 값을 사용하기 위하여 넣은 키워드
        super(message);

        //this바인딩
        //일반형 함수 일때만 사용
        this.activityClick = this.activityClick.bind(this);
    }

    activityClick = () => {
        alert('하이용');
    };

    render() {
        return (
            <>
                <button onClick={this.activityClick}>Show Message</button>
            </>
        );
    }
}

export default Activity;
