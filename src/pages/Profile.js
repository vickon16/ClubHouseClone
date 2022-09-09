import React from 'react'
import { BsAt, BsUpload, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FcPrevious} from "react-icons/fc";
import { Flex } from '../globalFunctions';
import { useContext } from 'react';
import {Context, initialState} from "../context";

const Profile = () => {
  const [state, setState] = useContext(Context);
  const navigate = useNavigate();

  const {userInfo} = state;

  const logout = () => {
    setState(initialState);
    localStorage.removeItem("clubHouseData");
    navigate("/")
  };

  return (
    <Container>
      <ProfileHeader>
        <Link to="/app"><FcPrevious /></Link>
        <div>
          <Link to="/app"><BsAt /></Link>
          <Link to="/app"><BsUpload /></Link>
          <Link to="/app"><AiOutlineSetting /></Link>
        </div>
      </ProfileHeader>
      <ProfileContent>
        <User>
          <img src="/images/john-doe.png" alt="img-1" />
          <h4>{userInfo?.name}</h4>
          <span><small>Email: </small>{userInfo?.email}</span>
          <span><small>Phone: </small>{userInfo?.number}</span>
          <Follow>
            <p>0 <small>followers</small></p>
            <p>51 <small>following</small></p>
          </Follow>
        </User>

        <Add>
          <Link to="/app">Add a bio</Link>
          <Link to="/app"><BsInstagram />Add Twitter</Link>
          <Link to="/app"><BsTwitter />Add Instagram</Link>
        </Add>

        <Nomination>
          <img src="/images/john-doe.png" alt="nomination" />
          <div>
            <small>Joined 27-Mar-2022</small>
            <small>Nominated by <b>Arbon Wynonaki</b> </small>
          </div>
        </Nomination>

        <Logout onClick={logout}>Logout</Logout>
      </ProfileContent>
    </Container>
  );
}

export default Profile

const Container = styled.section`
  ${Flex("space-between", "column", "flex-start")};
  gap: 2.8em;
  width: 100%;
  padding: 0 .5em;
`;

const ProfileHeader = styled.div`
  ${Flex("space-between")};
  gap: 1em;
  width: 100%;

  > div {
    ${Flex()};
    gap: .8em;
  }

  svg {
    font-size: clamp(2.2em, 2.8vw, 2.8em);
    display: flex;
    padding: .2em;
  }
`;

const ProfileContent = styled.div`
  small {
    color: #888;
    font-size: clamp(0.75em, 1vw, 1em)
  }
`;

const User = styled.div`
  ${Flex("space-between", "column", "flex-start")};
  gap: .5em;

  img {
    width: 70px;
    border-radius: 30%;
  }

  span {
    font-size: clamp(.85em, 1vw, 1em)
  }

  h4 {
    margin: .5rem 0 .3em;
  }
`;

const Follow = styled.div`
  ${Flex()};
  gap: 1.5em;
  margin: 1em 0;
`;


const Add = styled.div`
  ${Flex()};
  gap: 1em;
  margin: 1.5em 0 2.5em;

  > a {
    color: steelblue;
    padding: 5px;

    svg {
      fill: steelblue;
      margin-right: 0.2em;
    }
  }
`;

const Nomination = styled.div`
  ${Flex()};
  gap: 1em;

  img {
    width: 40px;
    border-radius: 30%;
  }

  > div {
    ${Flex("", "column", "flex-start")};
    gap: .5em;
  }
`;

const Logout = styled.button`
  border: none;
  margin: 3em 0 1em;
  background-color: var(--bgPrimary);
  padding: .6em 1.2em;
  font-size: clamp(1em, 1.4vw, 1.4em);

  &:hover {
    opacity: 0.85;
  }
`


