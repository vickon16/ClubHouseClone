import styled from "styled-components";
import data from "../data/dailyCards.json";
import { Flex } from "../globalFunctions";

const DailyInfoCard = () => {
  return (
    <>
      <h3>Daily info</h3>
      <Container>
        {data.map((item) => (
          <Card key={item.id}>
            <small>{item.time}</small>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default DailyInfoCard;

const Container = styled.div`
  background-color: var(--bgPrimary2);
  width: min(100%, 500px);
  padding: 15px 20px;
  border-radius: 5px;
  ${Flex("", "column", "flex-start")};
  gap: 0.5em;
`;

const Card = styled.article`
  ${Flex("", "", "flex-start")};
  gap: 0.6em;

  small {
    color: var(--dark);
    opacity: 0.8;
    font-size: 0.7em;
    margin-top: 0.8em;
    min-width: 60px;
    z-index: -1;
  }

  > div {
    ${Flex("space-between", "column", "flex-start")};
    gap: 0.5em;
    width: 100%;
    overflow: hidden;

    h4,
    p {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  p {
    font-size: clamp(0.8em, 1vw, 1em);
  }
`;
