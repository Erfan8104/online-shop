"use client";

import Container from "./../../components/Container";
import { useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { redirect } from "next/navigation";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    //  const data = axios({
    //     url: "/login ",
    //     method: "POST",
    //   data: {
    //   username: userName,
    //       password: password,
    //   },
    //  });
    const response = {
      token: "asdf",
      expire: 7,
    };
    Cookie.set("token", response.token, { expires: response.expire });
    redirect("/dashboard");
  };
  return (
    <div>
      <Container>
        <div className="border flex flex-col w-72 mx-auto  p-4">
          <input onChange={(e) => setUserName(e.target.value)} type="text" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={handleLogin}>ورود </button>
        </div>
      </Container>
    </div>
  );
}
