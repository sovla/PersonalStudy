import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEvent, FormEventHandler, useCallback, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        name: "",
        password: "",
    });

    const onSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            axios
                .post("http://www.localhost:3002/api/register", {
                    username: user.name,
                    password: user.password,
                })
                .then((res) => {
                    if (res.status === 201) {
                        router.push("/login");
                    }
                });
        },
        [user]
    );
    return (
        <div>
            <h1>회원가입</h1>
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
                <input type="submit" />
            </form>
        </div>
    );
};

export default Home;
