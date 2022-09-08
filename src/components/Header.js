/* eslint-disable jsx-a11y/anchor-is-valid */
import { ClubHouse } from "../svgs";
import styled from "styled-components";
import { Flex } from "../globalFunctions";
import { Link } from "react-router-dom";
import { BsSearch, BsCalendar3} from "react-icons/bs";
import { FcInvite } from "react-icons/fc";
import { FaStoreAlt } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { useContext } from "react";
import {Context} from "../context";

function Header() {
  const [state, setState] = useContext(Context);

  const ToggleBottomSheet = () => {
    setState((prev) => ({
      ...prev,
      isBottomSheetOpen : !prev.isBottomSheetOpen,
    }));
  }

  return (
  <HeaderWrapper>
    <HeaderContainer>
      <Icon to="/app">
        <ClubHouse />
      </Icon>

      <HeaderNav>
        <a href="#" title="Room" onClick={ToggleBottomSheet}><FaStoreAlt /></a>
        <Link to="/app" title="Explore"><BsSearch /></Link>
        <Link to="/app" title="Friends Invite"><FcInvite /></Link>
        <Link to="/app" title="Upcoming"><BsCalendar3 /></Link>
        <Link to="/app" title="Activity"><MdNotificationsActive /></Link>
        <Link to="/app/profile" title="Profile"><img src="/images/john-doe.png" alt="user-img" /><span>{state.userInfo?.name.slice(0, 3)}</span></Link>
      </HeaderNav>
    </HeaderContainer>
  </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 5px #cccccc;
  z-index: 3;
`;

const HeaderContainer = styled.div`
  ${Flex("space-between")};
  width: min(100%, 1100px);
  padding: 25px 20px;
  gap: 1.5rem;
  margin: 0 auto;
  background-color: #f0ebd3;
  

  @media screen and (max-width : 768px) {
    flex-direction: column;
    padding: 40px 20px 20px;
  };
`;

const Icon = styled(Link)`
  &:hover {
    box-shadow : none;
  }

  svg {
    width: 160px;
  }
`;

const HeaderNav = styled.nav`
  ${Flex("space-between")};
  width: fit-content;
  gap: .5em;

  > a {
    padding: .5em 1em;
    width: fit-content;

    svg {
      font-size: clamp(1.1em, 1.6vw, 1.6em)
    }
  }

  > a:last-child {
    ${Flex("", "column", "center")};
    gap: .5em;
    text-align: center;

    img {
      width: 45px;
      border-radius: 50%;
    }

    span {
      font-weight: bold;
      text-transform: uppercase;
      font-size: clamp(.7em, .9vw, .9em);
    }
  }

  @media screen and (max-width : 425px) {
    gap: 0em;
  };
`;
