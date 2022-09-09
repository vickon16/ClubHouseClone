import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../globalFunctions";

const PlanLayout = () => {

  return (
    <Container>
       <Outlet />
    </Container>
  );
}

export default PlanLayout;

const Container = styled.section`
  padding: 4em 1.2em;
  width: min(100%, 600px);
  height: 95vh;
  margin: 1rem auto;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  overflow : auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none
  }

  > div > a:first-child {
    position: absolute;
    top: 4%;
    left: 3%;
  }

  > div > aside:first-of-type {
    margin-bottom: 3em;

    h1 {
      text-transform: uppercase;
      margin-top: 1em;
      font-size: clamp(1.5em, 1.9vw, 1.9em);
    }
  }

  > div > aside:last-of-type {
    ${Flex("space-between", "column", "flex-start")};
    margin: .5em auto;
    padding: 1em 0;
    gap: 2em;

    p {
      line-height: 1.6em;
      font-size: clamp(1em, 1.2vw, 1.2em);

      span {
        font-weight: 600;
        cursor: pointer;
      }
    }

    > a {
      background-color: var(--bgPrimary);
      align-self: center;
      padding: 0.5em 1em;
      ${Flex()};
      gap: 0.2em;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 4em 2em;
  } ;
`;


