import { useContext, useState } from 'react';
import { BsMicMuteFill } from 'react-icons/bs';
import { FcPrevious } from 'react-icons/fc';
import styled from 'styled-components';
import OpenRoom from "../rooms/OpenRoom";
import CloseRoom from "../rooms/CloseRoom";
import SocialRoom from "../rooms/SocialRoom";
import { Flex } from '../globalFunctions';
import { Context} from '../context';
import { Link } from 'react-router-dom';

const RoomWrapper = () => {
  const [state, setState] = useContext(Context);
  const [muted, setMuted] = useState(false);

  const {newRoom: { roomTitle, roomActive}} = state;

  const setNewRoom = () => {
    setState(prev => ({
      ...prev,
      newRoom : {
        ...prev.newRoom,
        roomActive : ""
      }
    }))
  }

  const Leave = () => {
    setState((prev) => ({
      ...prev,
      newRoom: {
        roomTitle: "open to everyone",
        roomActive: "",
        buttonActive: "open",
      },
      isBottomSheetOpen: false,
      singleUserData: {},
    }));
  }

  const closeBottomSheet = () => {
    setState((prev) => ({
      ...prev,
      isBottomSheetOpen : false
    }));
  }

  return (
    <Wrapper>
      <HeaderFunc>
        <FcPrevious onClick={setNewRoom} className="prev" />
        <Link to="/app/profile" title="Profile" onClick={closeBottomSheet}>
          <img src="/images/john-doe.png" alt="user-img" />
          <span>{state.userInfo?.name.slice(0, 3)}</span>
        </Link>
        <BsMicMuteFill
          className={`mute ${muted && "muted"}`}
          onClick={() => setMuted(!muted)}
        />
      </HeaderFunc>

      <h3>Room {roomTitle}</h3>
      {roomActive === "open" ? (
        <OpenRoom muted={muted} />
      ) : roomActive === "closed" ? (
        <CloseRoom muted={muted} />
      ) : roomActive === "social" ? (
        <SocialRoom muted={muted} />
      ) : (
        <OpenRoom muted={muted} />
      )}

      <LeaveRoom onClick={Leave}>Leave</LeaveRoom>
    </Wrapper>
  );
}

export default RoomWrapper;

const Wrapper = styled.section`
  width: 100%;
  padding: 0rem 0.5rem 1rem;
  height: 100%;
  max-height: 700px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .user {
    ${Flex("space-between", "column", "flex-start")};
    width: 90px;
    gap: 0.4em;
    position: relative;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    padding: 15px 10px;
    border-radius: 5px;

    img {
      border-radius: 30%;
    }

    span {
      width: 100%;
      font-size: .75em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .dot {
        fill: limegreen;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    small {
      font-size: 0.55em;
    }

    > svg {
      position: absolute;
      right: -10px;
      top: 0;
      fill: red;
      background: white;
      padding: 3px;
      font-size: 1.2em;
      border-radius: 50%;
    }

    @media screen and (max-width: 425px) {
      width: 80%;
      gap: 0.6em;
      align-items: center;

      span {
        font-size: .9em;
      }
    }
  }

  @media screen and (min-width: 768px) {
    max-height: 760px;
  } ;
`;

const HeaderFunc = styled.div`
  ${Flex("space-between")};
  gap: 2em;
  width: 100%;
  padding: 0 1em;
  margin-bottom: 1.5em;

  svg.prev {
    cursor: pointer;
    font-size: 1.2em;
  }

  > a {
    ${Flex("", "column", "center")};
    gap: 0.5em;
    text-align: center;
    padding: 0.5em 1em;
    width: fit-content;
    margin-left: auto;

    img {
      width: 45px;
      border-radius: 50%;
    }

    span {
      font-weight: bold;
      text-transform: uppercase;
      font-size: clamp(0.7em, 0.9vw, 0.9em);
    }
  }

  svg.mute {
    font-size: clamp(1.3em, 1.8vw, 1.8em);
    cursor: pointer;
    fill: limegreen;
    transition: 0.3s ease;

    &:hover {
      scale: 1.15;
    }

    &.muted {
      fill: red;
    }
  }
`;

const LeaveRoom = styled.button`
  background-color: var(--bgPrimary2);
  padding: .5em 1em;
  outline: none;
  margin: 0 auto;
  font-size: 1em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: block;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`

