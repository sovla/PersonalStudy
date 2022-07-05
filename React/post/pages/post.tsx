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

const Post: NextPage = () => {
    const [post, setPost] = useState([]);
    const [writePost, setWritePost] = useState({
        title: "",
        content: "",
    });

    const [updatePost, setUpdatePost] = useState(-1);

    useEffect(() => {
        getAllList();
    }, []);

    const getAllList = useCallback(() => {
        axios1.get("http://localhost:3002/post").then((res) => {
            setPost(res.data);
        });
    }, []);

    const onClickWrite = useCallback(() => {
        axios
            .post("http://localhost:3002/post", {
                title: writePost.title,
                content: writePost.content,
                image: "null",
            })
            .then((res) => {
                console.log(res);
                getAllList();
            });
    }, [writePost]);

    const onClickUpdate = useCallback(async () => {
        await axios.put("http://localhost:3002/post/" + updatePost, {
            title: writePost.title,
            content: writePost.content,
        });
        getAllList();
        setUpdatePost(-1);
        setWritePost({
            title: "",
            content: "",
        });
    }, [updatePost, writePost]);

    const onClickDeleteButton = useCallback(async (id: number) => {
        await axios.delete("http://localhost:3002/post/" + id);
        getAllList();
    }, []);

    return (
        <div>
            <h1>포스트</h1>
            <table>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성일</th>
                    <th>이미지</th>
                    <th>기능</th>
                </tr>
                {post.map((v: any, i) => {
                    return (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.title}</td>
                            <td>{v.content}</td>
                            <td>{v.date}</td>
                            <td>{v.image}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setUpdatePost(v.id);
                                        setWritePost({
                                            title: v.title,
                                            content: v.content,
                                        });
                                    }}
                                >
                                    수정
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onClickDeleteButton(v.id);
                                    }}
                                >
                                    삭제
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
            <input
                value={writePost.title}
                placeholder="title"
                onChange={(event) =>
                    setWritePost((prev) => ({
                        ...prev,
                        title: event.target.value,
                    }))
                }
            />
            <input
                value={writePost.content}
                placeholder="content"
                onChange={(event) =>
                    setWritePost((prev) => ({
                        ...prev,
                        content: event.target.value,
                    }))
                }
            />
            <button
                type="button"
                onClick={updatePost ? onClickUpdate : onClickWrite}
            >
                {updatePost ? "수정" : "작성"}
            </button>
        </div>
    );
};

export default Post;
