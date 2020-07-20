import React, { useEffect } from 'react'
import './Nav.css'

function Nav() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                document.getElementById("navbar").classList.add("active")
            }else{
                document.getElementById("navbar").classList.remove("active")
            }
        })
    }, [])
    return (
        <div className="nav" id="navbar">
            <img
            className="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
            />
            <img
            className="nav-avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar"
            />
        </div>
    )
}

export default Nav
