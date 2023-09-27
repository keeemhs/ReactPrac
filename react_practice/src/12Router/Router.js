import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import User from './User';
import Error from './Error';
import Redirect from './Redirect';
import Comment from './Comment';
import UserDetail from './UserDetail';
import NotFound from './404';
import App from '../App';

/* 
//ver1
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                    <Route path="/redirect" element={<Redirect />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
*/

//ver2
const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'redirect',
                element: <Redirect />,
            },
        ],
        errorElement: <NotFound />,
    },
    {
        path: '/user',
        element: <App />,
        children: [
            {
                path: '',
                element: <User />,
            },
            {
                path: ':userId',
                element: <UserDetail />,
                children: [
                    {
                        path: 'comment',
                        element: <Comment />,
                    },
                ],
            },
        ],
    },
]);

export default Router;
