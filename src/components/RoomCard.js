import data from "../data/roomCards.json";
import styled from "styled-components";
import { Flex } from "../globalFunctions";
import { FaRegCommentDots, FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../context";

const RoomCard = () => {
  const [, setState] = useContext(Context);

  const handleClick = (item) => {
    setState((prev) => ({
      ...prev,
      newRoom : {
        ...prev.newRoom,
        roomActive : "open"
      },
      isBottomSheetOpen: true,
      singleUserData : item,
    }));
  }

  return (
    <>
      <h3>Room Info</h3>
      <Container>
        {data.map((item) => (
          <Card key={item.id} data-id={item.id} onClick={() => handleClick(item)}>
            <ImgWrapper>
              <img src={item.members[0].img} alt="overlay-images" />
              <img src={item.img} alt="images" />
            </ImgWrapper>
            <CardContent>
              <h4>{item.title}</h4>
              <div>
                <User>
                  <p>{item.sub_title}</p>
                  <small>{item.time}</small>
                </User>
                <Members>
                  {item.members.map((member, index) => (
                    <p key={member + index}>
                      {member.fullname} <FaRegCommentDots />
                    </p>
                  ))}
                </Members>
              </div>
            </CardContent>
            <CardFunction>
              <p>{item.members.length} <FaUserAlt /></p>
              <p>
                {item.chatNumber} <FaRegCommentDots />
              </p>
            </CardFunction>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default RoomCard;

const Container = styled.div`
  background-color: var(--dark);
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.8em;

  @media screen and (max-width : 500px) {
    grid-template-columns: auto;
    padding: 30px 20px;
  };

  p, svg, small {
    color: var(--textPrimary);
    fill : var(--textPrimary);
  }
  `;

const Card = styled.article`
  ${Flex("", "column", "flex-start")};
  gap: 0.3em;
  padding: 12px;
  box-shadow: 0 0 5px rgba(249, 249, 249, 0.2);
  transition : .3s ease-in;
  cursor: pointer;

  &:hover {
    scale : 1.05;
  }
`;

const ImgWrapper = styled.div`
  width: 50px;
  position: relative;

  img {
    border-radius: 30%;
  }

  > img:last-child {
    width: 40px;
    position: absolute;
    right: -10px;
    bottom: -10px;
    border: 2px solid rgba(249, 249, 249, 0.8);
  }

  
`;

const CardContent = styled.div`
  margin: 1em 0 0;

  h4 {
    color: var(--bgPrimaryText);
  }

  > div {
    ${Flex()};
    gap: .5em;

    @media screen and (max-width : 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1em;
    };
  }
`;

const User = styled.article`
  ${Flex("", "column", "flex-start")};
  gap: 0.6em;
  width: 60%;

  p {
    font-size: clamp(0.7em, 0.9vw, 0.9em);
  }

  small {
    opacity: 0.8;
    font-size: 0.55em;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  } ;
`;

const Members = styled.article`
  ${Flex("", "column", "flex-start")};
  gap: 0.5em;
  width: 40%;

  p {
    font-size: 0.65em;
    width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  } ;
`;

const CardFunction = styled.div`
  padding: 0.7em 0.2em 0.2em;
  ${Flex()};
  gap: 1em;
  width: 100%;

  p {
    font-size: 0.9em;
    cursor: pointer;
  }
`;


