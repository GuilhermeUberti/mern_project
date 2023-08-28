import React, { useState } from "react"

import signUp from '../../src/assest/login-animation.gif'
import { BiShow, BiHide } from 'react-icons/bi'
import { Link } from "react-router-dom";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(preve => !preve)
    }

    const handleConfirmShowPassword = () => {
        setConfirmShowPassword(preve => !preve)
    }

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    return (
        <div className="p-3 md:p-4 ">
            <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
                {/*<h1 className="text-center text-2xl font-bold">SignUp</h1>*/}
                <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
                    <img src={signUp} className="w-full" />
                </div>
                <form className="w-full py-3 flex flex-col">
                    <label htmlFor="firstName">Nome</label>
                    <input type={"text"}
                        id="firstName"
                        name="firstName"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                        value={firstName}
                    />

                    <label htmlFor="lastName">Sobrenome</label>
                    <input type={"text"}
                        id="lastName"
                        name="lastName"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300"
                        value={lastName}
                    />

                    <label htmlFor="email">E-mail</label>
                    <input type={"email"} id="email" name="email" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300" />

                    <label htmlFor="password">Password</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                        <input type={showPassword ? "text" : "password"} id="password" name="password" className="w-full bg-slate-200 border-none outline-none" />
                        <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>
                            {showPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>

                    <label htmlFor="confirmPassword">Confirmar Password</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                        <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" className="w-full bg-slate-200 border-none outline-none" />
                        <span className="flex text-xl cursor-pointer" onClick={handleConfirmShowPassword}>
                            {showConfirmPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>

                    <button className="w-full h-9 max-w-[150px] m-auto bg-green-500 hover:bg-green-600 cursor-pointer text-white text-xl font-medium text-center rounded-lg mt-3">Cadastrar</button>
                </form>
                <p className="text-sm">Já tem uma conta? <Link className="text-blue-500 underline" to={"login"}>Então clique aqui!</Link></p>
            </div>
        </div>
    )
}

export default SignUp;

