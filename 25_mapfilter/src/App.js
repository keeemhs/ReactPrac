import logo from './logo.svg';
import './App.css';

function App() {
    // //map함수
    // const lists = ['k', 'd', 't', 'w', 'e', 'b'];

    // //filter함수
    // const animals = ['dog', 'cat', 'rabbit'];
    // const newAnimals = animals.filter((value) => {
    //     return value.includes('a');
    // });
    // console.log(newAnimals);

    // //단축평가
    // //&&연산자
    // const result = true && 'Hello';
    // console.log(result);

    // //||연산자
    // const defaultValue = 1000;
    // const price = 1500;
    // const dbPrice = price || defaultValue;
    // console.log(dbPrice);

    // const user = [
    //     { id: 1, name: 'john', age: 25, vip: true },
    //     { id: 2, name: 'jane', age: 19, vip: false },
    //     { id: 3, name: 'Alice', age: 30, vip: true },
    //     { id: 4, name: 'Bob', age: 18, vip: false },
    //     { id: 5, name: 'Charlie', age: 35, vip: true },
    // ];
    // const filteredUsers = user.filter((value) => value.vip);

    // const userNames = filteredUsers.map((value) => value.name);

    // console.log(userNames);
    let result = true;
    return (
        <>
            {/* {userNames.map((name, index) => (
                <ol key={index}>{name}</ol>
            ))} */}
            {result && (
                <div className="container">
                    <div className="red"></div>
                    <div className="orange"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                    <div className="blue"></div>
                    <div className="navy"></div>
                    <div className="purple"></div>
                </div>
            )}
        </>
    );
}

export default App;
