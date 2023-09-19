import logo from './logo.svg';
import './App.css';
import Test from './test';
import Test2 from './test2';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Event from './Event';
import EventClass from './EventClass';
import Activity from './Activity';

function App() {
    const title = '';
    return (
        <>
            {/* <Test></Test>
            <Test2></Test2> */}
            {/* <div className="caterpillar">
                <div className="circle1"></div>
                <div className="eyes"></div>
                <div className="hitomi"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
                <div className="circle5"></div>
            </div> */}
            {/* <ClassComponent name="keeemhs" age={26}></ClassComponent>
            <ClassComponent></ClassComponent> */}
            {/* <FunctionComponent myClass={'kdt9'}>코딩</FunctionComponent>
            <FunctionComponent></FunctionComponent> */}
            {/* <ClassComponent fruit="딸기"></ClassComponent>
            <ClassComponent /> */}
            {/* <h2 className="title">이번주 베스트셀러</h2>
            <img className="book" src="book.jpeg" />
            <FunctionComponent title={'나의 하루는 4시 40분에 시작된다'} author={'김유진'} price={'13,500'} type={'자기계발서'}></FunctionComponent> */}
            <Event />
            <EventClass />
        </>
    );
}

export default App;
