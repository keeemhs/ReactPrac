import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();

        return () => {
            console.log('연결해제 완료');
        };
    }, []);

    useEffect(() => {
        console.log(`유저 정보 업데이트 ${users.length}`);
    }, [users]);

    const handleDeleteAll = () => {
        setUsers([]); // 사용자 목록을 빈 배열로 업데이트
        console.log('연결 해제 완료');
    };

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
            <button onClick={handleDeleteAll}>삭제</button>
        </div>
    );
};

export default UserList;
