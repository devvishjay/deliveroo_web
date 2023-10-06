import { useState, useEffect } from "react";
import { useGoogleLogin  } from '@react-oauth/google';

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EmailIcon, GoogleIcon } from "../utils/images";
import axiosInstance from "../utils/axios";
import { userDetailsAction } from "../redux/actions/dataActions";

const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [ user, setUser ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        axiosInstance.post("/api/customers/googleLogin", {data:res.data})
                        dispatch(userDetailsAction(res.data));
                        navigate("/");

                    })
                    .catch((err) => console.log(err));
            }
        },[user]);




    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="row ">
                    <h4>Sign up or log in</h4>
                </div>
                <button className="btn btn-google" onClick={() => login()}> <GoogleIcon /> Continue with Google </button>

                <div className="orSection">
                    <span className="line" />
                    <p> or </p>
                    <span className="line" />
                </div>
                <div className="col d-flex justify-content-center">
                    <button className="btn btn-primary buttonHolder">
                        <EmailIcon />
                        <span>Continue with Email</span>
                    </button>
                </div>

                <span className="agreement">By continuing you agree to our <a href="/legal" target="_blank">T&amp;Cs</a>. Please also check out our <a href="/privacy" target="_blank">Privacy Policy</a>. We use your data to offer you a personalised experience and to better understand and improve our services. <a href="/privacy#use-of-your-information">For more information see here</a>.</span>
            </div>
        </div>
    )

};

export default Login;
