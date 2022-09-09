/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { FcNext } from "react-icons/fc";
import { Link} from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context";
import { Flex } from "../globalFunctions";

const Welcome = () => {
  const [state] = useContext(Context);

  return (
    <Container>
      <aside>
        <h1>Welcome!</h1>
      </aside>

      <WelcomeInfo>
        <p>
          We're working hard to get clubhouse ready for everyone while we wrap
          up the finishing touches, we're adding people gradually to make sure
          nothing breaks.
        </p>
        <p>
          Anyone can join with an invite from an existing user or reserve your
          username and we'll text you if you have a friend on the app who can
          let you in. We are so gratefull that you're here and can't wait to
          have you join us. <br />
        </p>
        <small>Paul, Rohan & the Clubhouse team.</small>
        {state.userInfo?.isLoggedIn ? (
          <ActionBtn>
            <Link to="/app">Continue to Clubhouse</Link>
          </ActionBtn>
        ) : (
          <ActionBtn>
            <Link to="/invite">
              Get your username
              <FcNext />
            </Link>
            <Link to="/invite">Have an invite text? Sign in</Link>
          </ActionBtn>
        )}
      </WelcomeInfo>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  ${Flex("space-between", "column", "flex-start")};
  height: 100%;
`;

const WelcomeInfo = styled.aside`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5em 0.5em !important;
`;

const ActionBtn = styled.div`
  align-self: center;
  margin: 1em auto;
  ${Flex("", "column")};
  gap: 1.5em;

  & > a:first-child {
    background-color: var(--bgPrimary);
    padding: .7em 1em;
    ${Flex()};
    gap: .3em;
  }

  & > a:last-child {
    color: var(--bgPrimaryText);
    font-size: clamp(0.9em, 1.1vw, 1.1em);
    text-decoration: underline;
  }
`;
