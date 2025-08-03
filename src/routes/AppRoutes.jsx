import { Routes, Route } from 'react-router-dom';
import Dashboard from "../views/Dashboard";
import Transactions from "../components/TransactionList";
import NotFound from "../views/NotFound";
import DashboardLayout from "../layout/DashboardLayout";
import SignUp from "../views/SignUp";
import Login from "../views/Login";
import ProtectedRoute from '../components/ProtectedRoute';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<DashboardLayout />}>
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path="transactions" element={<Transactions />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
