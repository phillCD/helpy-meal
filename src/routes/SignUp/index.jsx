import React from "react";

import NavBar from "../../components/Navbar";
import Input from "../../components/Input";
import SimpleButton from "../../components/SimpleButton";

import "./styles.css"
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        
        <div className="container">
            <div className="formContainer">
                <form className="form" action="/">
                    <div className="logoContainer">
                        <img className="logo" src="./src/assets/HelpyngHandLogo.png" alt="Helpyng Hand Logo" />
                    </div>
                    <Input label="Usuário" />
                    <Input label="Senha" type="password" />
                    <div className="buttonContainer">
                        <Link className="button" to="/about">
                            <SimpleButton 
                                text="Entrar" 
                                type="submit"
                            />
                        </ Link>
                    </div>
                </form>
            </div>
        </div>
    )
}