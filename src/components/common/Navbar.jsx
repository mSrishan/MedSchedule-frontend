import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppService from "../../service/ApiService";

function Navbar() {

    const isAuthenticated = AppService.isAuthenticated();
    const isAdmin = AppService.isAdmin();
    const isUser = AppService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLoggedOut = window.confirm("Are you sure you want to logout?");
        if (isLoggedOut) {
            AppService.logout();
            navigate("/login");
        }

        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <NavLink to="/home">MedSchedule</NavLink>
                </div>

                <ul className="navbar-ul">
                    <li><NavLink to="/home" activeClass="active">Home</NavLink></li>
                    <li><NavLink to="/doctors" activeClass="active">Doctors</NavLink></li>
                    <li><NavLink to="/find-appointments" activeClass="active">Find My Appointments</NavLink></li>

                    {isUser && <li><NavLink to="/profile" activeClass="active">Profile</NavLink></li>}
                    {isAdmin && <li><NavLink to="/admin" activeClass="active">Admin</NavLink></li>}

                    {isAuthenticated && <li><NavLink to="/login" activeClass="active">Login</NavLink></li>}
                    {isAuthenticated && <li><NavLink to="/register" activeClass="active">Register</NavLink></li>}

                    {isAuthenticated && <li onClick={handleLogout}>Logout</li>}
                </ul>
            </nav>
        )
    }

}
export default Navbar;