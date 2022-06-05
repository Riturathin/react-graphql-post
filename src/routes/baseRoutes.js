
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from '../components/users/users';
import UserDetail from '../components/user-detail/user-detail';
import Todos from '../components/todos/todos';
const BaseRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/user/:id' element={<UserDetail />} />
            <Route path='/todos' element={<Todos />} />
        </Routes>
    </BrowserRouter>
)

export default BaseRoutes;