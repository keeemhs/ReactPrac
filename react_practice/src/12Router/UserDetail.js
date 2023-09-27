import { useParams, Link, Outlet } from 'react-router-dom';
import { users } from './User';

export default function UserDetail() {
    //Route에 /user/:userId
    const { userId } = useParams();
    console.log(userId);

    return (
        <div>
            <div>
                사용자: {userId}는 {users[Number(userId) - 1].name}입니다.
            </div>
            <Link to="comment">Comment</Link>
            <Outlet context={{ comment: users[Number(userId) - 1].comment }} />
        </div>
    );
}
