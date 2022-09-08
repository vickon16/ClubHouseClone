import styled from "styled-components";
import DailyInfoCard from "../components/DailyInfoCard";
import RoomCard from "../components/RoomCard";
import { Flex } from "../globalFunctions";

const Home = () => {
  return (
    <Container>
      <DailyInfoCard />
      <RoomCard />
    </Container>
  );
};

export default Home;

const Container = styled.section`
  width: 100%;
  ${Flex("", "column", "flex-start")};
  gap: 1em;

  > h3 {
    color: var(--bgPrimaryText);
  }

  > div {
    margin-bottom: .6em;
  }
`;
