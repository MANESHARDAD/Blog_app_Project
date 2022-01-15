import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="top">
                <div className="left">
                    <i className="topIcon fab fa-facebook"></i>
                    <i className="topIcon fab fa-instagram"></i>
                    <i className="topIcon fab fa-twitter"></i>
                    <i className="topIcon fab fa-youtube"></i>
                </div>

                <div className="center">
                    <ul className="toplist">
                        <li className="topListItem">Home</li>
                        <li className="topListItem">About</li>
                        <li className="topListItem">Contact</li>
                        <li className="topListItem">Write</li>
                        <li className="topListItem">Logout</li>
                    </ul>
                </div>
                <div className="right">
                    <img src="C:\Users\MANESH\Desktop\Blog Project\blog_app\src\Navbar" alt="" />
                    <i className="topSearchIcon fas fa-search"></i>
                </div>
            </div>
        </>
    )
}