import { useContext } from "react";
import { FaLockOpen, FaLock } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import styled from "styled-components";
import { Context } from "../context";
import { Flex } from "../globalFunctions";
import RoomWrapper from "../rooms/RoomWrapper";

const BottomSheet = () => {
  const [state, setState] = useContext(Context);

  const {
    newRoom: { roomTitle, roomActive, buttonActive },
  } = state;

  const ToggleBottomSheet = () => {
    setState((prev) => ({
      ...prev,
      isBottomSheetOpen: !prev.isBottomSheetOpen,
    }));
  };

  const buttonClicked = (value) => {
    if (value === "open") {
      setState((prev) => ({
        ...prev,
        newRoom: {
          ...prev.newRoom,
          roomTitle: "open to everyone",
          buttonActive: value,
        },
      }));
    } else if (value === "closed") {
      setState((prev) => ({
        ...prev,
        newRoom: {
          ...prev.newRoom,
          roomTitle: "with People I follow",
          buttonActive: value,
        },
      }));
    } else if (value === "social") {
      setState((prev) => ({
        ...prev,
        newRoom: {
          ...prev.newRoom,
          roomTitle: "for people i choose",
          buttonActive: value,
        },
      }));
    }
  };

  const changeRoom = () => {
    setState((prev) => ({
      ...prev,
      newRoom: {
        ...prev.newRoom,
        roomActive: buttonActive,
      },
    }));
  };

  return (
    <Overlay open={state.isBottomSheetOpen} onClick={ToggleBottomSheet}>
      <Container
        open={state.isBottomSheetOpen}
        onClick={(e) => e.stopPropagation()}>
        {roomActive === "" ? (
          <>
            <Links>
              <button
                className={`${buttonActive === "open" && "active"}`}
                onClick={() => buttonClicked("open")}>
                <FaLockOpen />
                <span>open</span>
              </button>
              <button
                className={`${buttonActive === "social" && "active"}`}
                onClick={() => buttonClicked("social")}>
                <GiWorld />
                <span>social</span>
              </button>
              <button
                className={`${buttonActive === "closed" && "active"}`}
                onClick={() => buttonClicked("closed")}>
                <FaLock />
                <span>close</span>
              </button>
            </Links>
            <StartMsg onClick={changeRoom}>Start a Room {roomTitle}</StartMsg>
          </>
        ) : (
          <RoomWrapper />
        )}
      </Container>
    </Overlay>
  );
};

export default BottomSheet;

const Overlay = styled.aside`
  position: fixed;
  bottom: 0;
  top: ${({ open }) => (open ? "0vw" : "100vh")};
  right: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: 0.3s ease-in-out;
`;

const Container = styled.div`
  ${Flex("center", "column")};
  width: min(100%, 800px);
  background-color: white;
  padding: 2.5em 0.8em 0.8em;
  border-radius: 20px 20px 0 0;
  position: absolute;
  bottom: ${({ open }) => (open ? "0vh" : "-100vh")};
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
  transition: 0.25s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 50%;
    height: 3px;
    width: 12%;
    background-color: var(--dark);
    opacity: 0.5;
    transform: translate(-50%);
  }
`;

const Links = styled.div`
  ${Flex("center")};
  gap: 2em;
  margin-bottom: 1em;
  padding: 0 1em;

  > button {
    ${Flex("center", "column")};
    gap: 0.7em;
    padding: 15px 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: clamp(1em, 1.5vw, 1.5em);

    svg {
      font-size: clamp(2.5em, 3vw, 3em);
    }

    &:hover {
      scale: 1.05;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }

    &.active {
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (max-width : 425px) {
    gap: 1em;

    > button {
      padding: 10px 20px;
    }
  };
`;

const StartMsg = styled.button`
  padding: 20px 0 10px;
  border: none;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: center;
  background: transparent;
  font-size: 1em;

  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }
`;
