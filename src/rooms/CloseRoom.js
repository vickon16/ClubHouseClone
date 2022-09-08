import styled from "styled-components";
import { Flex } from "../globalFunctions";
import { GoPrimitiveDot } from "react-icons/go";
import { BsMicMuteFill } from "react-icons/bs";

const CloseRoom = ({ muted }) => {

  return (
    <>
      <RoomContainer>
        <article className="user">
          <img src="/images/1.jpg" alt="" />
          <span>
            <GoPrimitiveDot className="dot" />
            Lola Isokun
          </span>
          {muted && <BsMicMuteFill />}
        </article>
        <article className="user">
          <img src="/images/1.jpg" alt="" />
          <span>
            <GoPrimitiveDot className="dot" />
            Lola Isokun
          </span>
          {muted && <BsMicMuteFill />}
        </article>
        <article className="user">
          <img src="/images/1.jpg" alt="" />
          <span>
            <GoPrimitiveDot className="dot" />
            Lola Isokun
          </span>
          {muted && <BsMicMuteFill />}
        </article>
      </RoomContainer>
    </>
  );
};

export default CloseRoom;

const RoomContainer = styled.div`
  width: 100%;
  padding: 20px;
  ${Flex("space-between")};
  gap: 1rem;
  flex-wrap: wrap;
`;

