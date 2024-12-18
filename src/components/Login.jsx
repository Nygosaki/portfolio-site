import React, { useEffect } from "react";
import Layout from "@src/components/Layout";
import LoginForm from "@src/components/LoginForm";
import { drawBackground } from "@src/components/LoginBackground";
import "@styling/login.css";

function Login() {
  useEffect(() => {
    const canvas = document.getElementById("backgroundCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground(canvas);
  }, []);

  return (
    <Layout>
      <canvas id="backgroundCanvas"></canvas>
      <LoginForm />
    </Layout>
  );
}

export default Login;