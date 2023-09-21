import { useState } from 'react';

export default function Activity5() {
    const [toDoList, setToDoList] = useState('');
    const [list, setList] = useState([]);
    const [checkBox, setCheckBox] = useState([]);

    const addToDoList = () => {};

    const deleteToDoList = () => {};

    return (
        <div>
            <form>
                <input id="toDoList" type="text" placeholder="할 일 입력..." />
                <button onClick={addToDoList}>추가</button>
            </form>

            <ul>
                {/* {toDoList.map((value) => {
                    return (
                        <li>
                            <input type="checkbox"></input>
                        </li>
                    );
                })} */}
            </ul>

            <button onClick={deleteToDoList}>완료된 할 일 삭제</button>
        </div>
    );
}
