/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context";

const CodeConfirm = () => {
  const [state, setState] = useContext(Context);
  const [userCode, setUserCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [verifyCode, setVerifyCode] = useState(false);
  const [resend, setResend] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const generateCode = () => {
      let code = "";
      for (let i = 0; i < 4; i++) {
        const rand = Math.floor(Math.random() * 10);
        code += rand;
      }
      return code;
    };

    const code = generateCode();
    setState((prev) => {
      localStorage.clubHouseData = JSON.stringify({
        ...prev.userInfo,
        code,
      });

      return {
        ...prev,
        userInfo: { ...prev.userInfo, code },
      };
    });
    setGeneratedCode(code);

    const timer = setTimeout(() => {
      alert(code);
    }, 4000);

    return () => clearTimeout(timer);
  }, [resend]);

  useEffect(() => {
    if (generatedCode && userCode && generatedCode === userCode) {
      if(state.userInfo.name) {
        setVerifyCode(true);
      } else {
        alert("User Details Incomplete");
        navigate("/invite");
      }

    } else {
      setVerifyCode(false);
    }
  }, [userCode]);

  const signIn = () => {
    setState((prev) => {
      localStorage.clubHouseData = JSON.stringify({
        ...prev.userInfo,
        isLoggedIn: true,
      });

      return {
        ...prev,
        userInfo: { ...prev.userInfo, isLoggedIn: true },
      };
    });
  };

  return (
    <Container>
      <Link to="/invite/allow-notification">
        <FcPrevious />
      </Link>
      <aside>
        <h1>Enter your code here!</h1>
      </aside>

      <CodeConfirmInfo>
        <input
          type="text"
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
        />
        {verifyCode && (
          <Link to="/app" onClick={signIn}>
            Next <FcNext />
          </Link>
        )}
        <p>
          Didn't receive the code?{" "}
          <span onClick={() => setResend((prev) => !prev)}>Tap to resend.</span>
        </p>
      </CodeConfirmInfo>
    </Container>
  );
};

export default CodeConfirm;

const Container = styled.div`
  text-align: center;
`;

const CodeConfirmInfo = styled.aside`
  align-items: center !important;

  input {
    width: 80%;
  }
`;
