import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import userGlobal from '../../state/userState'
import bgimage from '../../images/bg.svg';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [userState, userActions] = userGlobal();

    const handleSignup = async e => {
        e.preventDefault()
        await userActions.signup(username, password, confirmPassword)
    }

    useEffect(() => {
        if (userState.jwt !== '') {
            userActions.getToken()
        }
    }, [userActions, userState.jwt]);

    return (
        <>
            <h1 className="appname"><Link to="/home">Unidox</ Link></h1>
            <img className="bgimage" src={bgimage} alt="" />
            <div className='container login card'>
                <form onSubmit={handleSignup}>
                    <h1>Sign Up</h1>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input is-link"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user" />
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input is-link"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-lock" />
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input is-link"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-lock" />
                            </span>
                        </div>
                    </div>

                    <p>already have an account? <Link to="/">sign in</Link></p>

                    <p className='error'>{userState.signupError}</p>

                    <input
                        className="button is-link"
                        type="submit"
                        value="Sign Up"
                    />
                </form>

            </div>
        </>
    );
}

export default Signup
