import {  Link, Outlet, NavLink } from "react-router-dom";

function Dashboard() {
return (
    <div>
        <h3>Dashboard</h3>
        <nav>
            <Link to="Profile">Profile</Link>
            <Link to="Settings">Settings</Link>
            
        </nav>
        <Outlet>    </Outlet>
    </div>
)




}

export default Dashboard;