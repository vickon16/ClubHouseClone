import styled from 'styled-components'
import { Flex } from '../globalFunctions';
import {GoPrimitiveDot} from "react-icons/go";
import {BsMicMuteFill} from "react-icons/bs"
import { useContext } from 'react';
import { Context } from '../context';

const OpenRoom = ({ muted }) => {
  const [state] = useContext(Context);
  const {id, title, members, img, time, sub_title} = state.singleUserData;

  return (
    <>
      <RoomContainer>
        {id ? (
          <>
            <article className="user">
              <img src={img} alt="" />
              <span>
                <GoPrimitiveDot className="dot" />
                {title}
              </span>
              <small>{time}</small>
              {muted && <BsMicMuteFill />}
            </article>
            <Members>
              {members.map((member, index) => (
                <small key={member + index}>
                  <GoPrimitiveDot className="dot" />
                  {member.fullname}
                </small>
              ))}
            </Members>
            <Subtitle>
              <h4>Subtitle</h4>
              <p>{sub_title}</p>
            </Subtitle>
          </>
        ) : (
          <article className="user">
            <img src="/images/1.jpg" alt="" />
            <span>
              <GoPrimitiveDot className="dot" />
              Lola Isokun
            </span>
            {muted && <BsMicMuteFill />}
          </article>
        )}
      </RoomContainer>
    </>
  );
};

export default OpenRoom

const RoomContainer = styled.div`
  width: 100%;
  padding: 40px 20px;
  ${Flex("flex-start", "row", "flex-start")};
  gap: 2rem;
  flex-wrap: wrap;

  svg {
    fill : limegreen;
  }

  @media screen and (max-width : 425px) {
    justify-content: center;
    text-align: center;
  };
`;

const Members = styled.article`
  ${Flex("space-between", "column", "flex-start")};
  gap: .2em;
`;

const Subtitle = styled.div`
  width: 100%;
  flex: 1;

  p {
    font-size: clamp(.8em, 1vw, 1em);
    margin: .8em 0;
  }
`
