import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/student" element={<About />} />
                    <Route path="/student/kdt" element={<User />} />
                    <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}
