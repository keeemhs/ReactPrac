import logo from './logo.svg';
import './App.css';

function App() {
    let name = '로이';
    let animal = '강아지';

    const styles = {
        textDecoration: 'underline',
    };
    const title = {
        color: 'darkorange',
        backgroundColor: 'beige',
        textAlign: 'center',
        width: '400px',
        margin: 'auto',
        fontSize: '40px',
    };
    const test = {
        textAlign: 'center',
        justifyContent: 'center',
    };
    const red = {
        backgroundColor: 'red',
        width: '30px',
        height: '30px',
    };
    const orange = {
        backgroundColor: 'orange',
        width: '30px',
        height: '50px',
    };
    const yellow = {
        backgroundColor: 'yellow',
        width: '30px',
        height: '70px',
    };
    const green = {
        backgroundColor: 'green',
        width: '30px',
        height: '90px',
    };
    const blue = {
        backgroundColor: 'blue',
        width: '30px',
        height: '110px',
    };
    const navy = {
        backgroundColor: 'navy',
        width: '30px',
        height: '130px',
    };
    const purple = {
        backgroundColor: 'purple',
        width: '30px',
        height: '150px',
    };
    const box = {
        display: 'flex',
    };

    return (
        <>
            <h3>실습1</h3>
            <div>
                이것은 div입니다.
                <h3>이것은 div안에 있는 h3태그 입니다.</h3>
            </div>
            <div>{3 + 5 == 8 ? <p>정답입니다</p> : <p>오답입니다.</p>}</div>

            <h3>실습2</h3>
            <h2>
                제 반려 동물의 이름은 <span style={styles}>{name}</span>입니다.
                <br />
                <span style={styles}>{name}</span>는 {animal}입니다.
            </h2>

            <h3>실습3</h3>
            <div className="test" style={test}>
                <div className="title" style={title}>
                    Hello World
                </div>
                <br />
                아이디 : <input />
                <br />
                <br />
                비밀번호 : <input />
            </div>

            <h3>실습4</h3>
            <div style={box}>
                <div className="red" style={red}></div>
                <div className="orange" style={orange}></div>
                <div className="yellow" style={yellow}></div>
                <div className="green" style={green}></div>
                <div className="blue" style={blue}></div>
                <div className="navy" style={navy}></div>
                <div className="purple" style={purple}></div>
            </div>
        </>
    );
}

export default App;
