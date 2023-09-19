import PropTypes from 'prop-types';
import './App.css';

// 함수형 컴포넌트
// function 컴포넌트명 or const 컴포넌트명 = () => {}

//function FunctionComponent({ myClass }) { 객체구조분해할당
function FunctionComponent(props) {
    const myClass = 'kdt9';
    return (
        <>
            {/* <h1>반갑습니다. {myClass}에 오신 것을 환영합니다.</h1>
            <p>여기는 함수형 컴포넌트</p>
            <h2>props {props.myClass}</h2>
            <h2>{props.children}</h2> */}
            <h2>{props.title}</h2>
            <div className="specific">
                <div>저자: {props.author}</div>
                <div>판매가: {props.price}원</div>
                <div>구분: {props.type}</div>
            </div>
        </>
    );
}

FunctionComponent.defaultPorps = {
    myClass: 'kdt',
};
FunctionComponent.propTypes = {
    myClass: PropTypes.string,
};

export default FunctionComponent;
