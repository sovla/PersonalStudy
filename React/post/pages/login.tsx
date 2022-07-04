import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
    FormEvent,
    FormEventHandler,
    MouseEvent,
    MouseEventHandler,
    useCallback,
    useEffect,
    useState,
} from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import { setConfig } from "next/config";
axios.defaults.withCredentials = true;
const axios1 = axios.create({
    withCredentials: true,
    headers: {
        credentials: "include",
    },
});

const Login: NextPage = () => {
    const [user, setUser] = useState({
        name: "",
        password: "",
    });

    useEffect(() => {
        console.log(document.cookie);
    }, []);

    const onSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            axios1
                .post("http://localhost:3002/api/login", {
                    username: user.name,
                    password: user.password,
                })
                .then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                    }
                });
        },
        [user]
    );

    const onClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            event.preventDefault();
            axios1
                .get("http://www.localhost:3002/api/authenticate", {
                    params: {
                        username: user.name,
                        password: user.password,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                    }
                });
        },
        [user]
    );
    const onClickCookies: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            event.preventDefault();
            axios1
                .get("http://www.localhost:3002/api/cookies", {})
                .then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                    }
                });
        },
        [user]
    );
    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="이름"
                    id="name"
                    type="text"
                    value={user.name}
                    onChange={(event) => {
                        setUser((prev) => ({
                            ...prev,
                            name: event.target.value,
                        }));
                    }}
                />
                <input
                    placeholder="비밀번호"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(event) => {
                        setUser((prev) => ({
                            ...prev,
                            password: event.target.value,
                        }));
                    }}
                />
                <button type="button" onClick={onClick}>
                    권한
                </button>
                <button type="button" onClick={onClickCookies}>
                    cookies
                </button>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;
