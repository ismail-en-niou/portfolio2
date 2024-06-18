import React, { useEffect, useState } from "react";
import "./header.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
    const [showModal, setshowModel] = useState(false);
    AOS.init({
        duration: 1200,
      })
      

    const [them, setThem] = useState(localStorage.getItem("them") ?? "light");
    useEffect(() => {
        if (them == "dark") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [them])

    return (
        <header  className="flex">
            <button className="menu icon-menu" onClick={() => {
                setshowModel(true)
            }}></button>
            <div />

            <nav data-aos="fade-down">
                <ul className="flex">
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="/articals">Blogs</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#tech">Technologie</a></li>
                </ul>
            </nav>

            {them === "dark" ? (
                <button className="icon-moon-o" id='them' onClick={() => {
                    // set value in localstorge 
                    localStorage.setItem("them", them === "dark" ? "light" : "dark");
                    setThem(localStorage.getItem("them"));

                }} >

                </button>
            ) : (
                <button className="icon-wb_sunny" id='them' onClick={() => {
                    // set value in localstorge 
                    localStorage.setItem("them", them === "dark" ? "light" : "dark");
                    setThem(localStorage.getItem("them"));

                }} >

                </button>
            )}

            {showModal && (
                <div className="fixed">
                    <ul className="modal" data-aos="fade-down">
                        <li>
                            <button className="icon-close" onClick={() => setshowModel(false)}>

                            </button>
                        </li>
                        <li><a  onClick={() => setshowModel(false)} href="#about">About</a></li>
                        <li><a  onClick={() => setshowModel(false)} href="#project">Projects</a></li>
                        <li><a  onClick={() => setshowModel(false)} href="/articals">Blogs</a></li>
                        <li><a  onClick={() => setshowModel(false)} href="#Services">Services</a></li>
                        <li><a  onClick={() => setshowModel(false)} href="#contact">Contact</a></li>
                        <li><a  onClick={() => setshowModel(false)} href="#tech">Technologie</a></li>
                    </ul>
                </div>
            )}

        </header>
    );
}
export default Header;