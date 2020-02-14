import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../contexts/alert/alertContext";
import AuthContext from "../../contexts/auth/authContext";

const Register = props => {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { register, error, clearErrors, isAuthenticated } = authContext;
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/");
        }
        if (error === "User already exist") {
            setAlert(error, "danger");
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (
            name === "" ||
            email === "" ||
            password === "" ||
            password2 === ""
        ) {
            setAlert("Please fill every field", "danger");
        } else if (password !== password2) {
            setAlert("Passwords don't match", "danger");
        } else {
            register({
                name,
                email,
                password
            });
        }
    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email Adress</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input
                        type='password'
                        id='password2'
                        name='password2'
                        value={password2}
                        onChange={onChange}
                        minLength='6'
                        required
                    />
                </div>
                <input
                    type='submit'
                    value='Register'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};

export default Register;
