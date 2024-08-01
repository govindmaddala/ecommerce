import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '../../assets/images/user.png'
import { UserState } from '../../Data/Contexts/UserContext'

const Navbar: React.FC = () => {
    const [showProfileCard, setShowProfileCard] = useState("d-none")
    const showProfileCardHandle = () => {
        setShowProfileCard((prev) => {
            if (prev) return "";
            return "d-none";
        })
    }

    const { isLoggedIn } = UserState();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark-subtle">
                <Link className="navbar-brand" to="/">e-Baazar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown" onClick={showProfileCardHandle}>
                    <ul className="ms-auto navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                <img src={UserIcon} alt="User" className='user__icon' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Dropdown for Profile */}
            {
                isLoggedIn && <div className={`d-flex flex-column profile__card ${showProfileCard}`} aria-labelledby="" onClick={() => setShowProfileCard("d-none")}>
                    <Link className="" to="/">Profile</Link>
                    <Link className="" to="/">Orders</Link>
                    <Link className="" to="/">Cart</Link>
                    <Link className="" to="/">Logout</Link>
                </div>
            }

        </>
    )
}

export default Navbar
