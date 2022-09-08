import React from 'react'
import { useContext } from 'react';
import { FcPrevious } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../context';
import { Flex } from '../globalFunctions';

const AllowNotification = () => {
  const [, setState] = useContext(Context);

  const submitInput = (value) => {
    setState((prev) => {
      localStorage.clubHouseData = JSON.stringify({
        ...prev.userInfo, allowNotification : value,
      });

      return {
        ...prev,
        userInfo: { ...prev.userInfo, allowNotification : value },
      }
    });
  };

  return (
    <div>
      <Link to="/invite">
        <FcPrevious />
      </Link>
      <aside>
        <h1>Enable Notification</h1>
      </aside>

      <aside>
        <p>
          Important step!.
          <br />
          <br />
          Enable notification to know when people are talking in clubhouse.
        </p>

        <NotificationBox>
          <h4>"Clubhouse" Would like to send you notifications</h4>
          <small>
            Notifications may include alerts, sounds, and icon popups. These can
            be configured in the clubhouse settings
          </small>
          <Buttons>
            <Link
              to="/invite/allow-notification/code-confirm"
              className="dont-allow"
              onClick={() => submitInput(false)}>
              Don't Allow
            </Link>
            <Link
              to="/invite/allow-notification/code-confirm"
              className="allow"
              onClick={() => submitInput(true)}>
              Allow
            </Link>
          </Buttons>
        </NotificationBox>
      </aside>
    </div>
  );
}

export default AllowNotification;

const NotificationBox = styled.aside`
  background-color: white;
  padding: .8em 0 0;
  border-radius: 8px 8px 16px 16px;
  overflow: hidden;
  width: min(100%, 500px);
  margin: 0 auto;

  h4, small {
    padding: .4em .8em;
    display: block;
    text-align: center;
  }

  small {
    margin: 0 .5em;
  }
`;

const Buttons = styled.div`
  ${Flex()};
  width: 100%;
  margin-top: .5rem;
  
  > a {
    width: 100%;
    text-align:center;
    padding: .6em 0;
    font-size: clamp(.9em, 1.1vw, 1.1em);
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    transition: .25s ease-in-out;

    &:hover {
      color: var(--bgPrimaryText)
    }
  }
`
