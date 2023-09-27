import { Link, useSearchParams } from 'react-router-dom';

export const students = [
    {
        id: 1,
        name: 'new',
        realName: 'kdt3rd',
    },
];

export default function Student() {
    //searchParams는 쿼리스트링 값을 가져오는것
    //setSearchParams는 쿼리스트링 값을 할당하는 것
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('mode'));

    return (
        <div>
            <ul>
                {users.map((value) => {
                    return (
                        <li key={value.id}>
                            <Link to={`/student/${value.id}`}>{value.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
