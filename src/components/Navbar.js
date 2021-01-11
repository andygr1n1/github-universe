import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {InputContext} from "../hooks/InputContext";
import {GithubContext} from "../context/github/githubContext";

export const Navbar = () => {
    const {stateInput: {cleared}} = useContext(InputContext);
    const github = useContext(GithubContext);




    return  (
        <nav className={"navbar navbar-dark navbar-expand-lg spacebg"}>
            <div className="navbar-brand" onClick={() => {
                cleared();
                github.clearUsers();
            }}><NavLink exact to="/" className={"nav-link"}>Github Universe</NavLink></div>
            <ul className="navbar-nav">
                {/*<li className="nav-item"><NavLink exact to="/" className={"nav-link"}>Main</NavLink></li>*/}
                {/*<li className="nav-item"><NavLink to="/about" className={"nav-link"}>Information</NavLink></li>*/}
            </ul>
        </nav>
    )
}