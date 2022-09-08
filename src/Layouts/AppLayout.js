import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import BottomSheet from "../components/BottomSheet";
import Header from "../components/Header";
import { Context } from "../context";
import { Flex } from "../globalFunctions";

const AppLayout = () => {
  const [state] = useContext(Context);

  return (
    <>
    <Main>
      <Header />
      <Container>
        { state.userInfo?.isLoggedIn ? <Outlet /> : <Navigate to="/invite" />}
      </Container>
    </Main>
    <BottomSheet />
    </>
  );
}

export default AppLayout;

const Main = styled.main`
  width: min(100%, 1000px);
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 0 5px #cccccc;
`;

const Container = styled.section`
  ${Flex("flex-start", "column")};
  width: 100%;
  padding: min(1.5em, 3%);
  margin: 9em auto 1em;
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 13em auto 1em;
  } ;
`;
