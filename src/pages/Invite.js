import { Link } from "react-router-dom";
import styled from "styled-components";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { useContext } from "react";
import { Context } from "../context";

const Invite = () => {
  const [, setState] = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const submitInput = () => {
    setState((prev) => {
      localStorage.clubHouseData = JSON.stringify({
        ...prev.userInfo, name, number, email,
      });
      
      return {
      ...prev,
      userInfo: {...prev.userInfo, name, number, email},
      }
    })
  };

  return (
    <Container>
      <Link to="/">
        <FcPrevious />
      </Link>
      <aside>
        <h1>Enter Your Detail #</h1>
      </aside>

      <InviteInfo>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
        />
        <PhoneInput
          international
          defaultCountry="US"
          value={number}
          onChange={setNumber}
        />
        <p>
          By entering your number, you're agreeing to our
          <span> Terms of Service and Privacy Policy. </span>Thanks
        </p>
        {name && number && (
          <Link to="/invite/allow-notification" onClick={submitInput}>
            Next <FcNext />
          </Link>
        )}
      </InviteInfo>
    </Container>
  );
};

export default Invite;

const Container = styled.div``;

const InviteInfo = styled.aside`
  .PhoneInput {
    .PhoneInputCountryIcon,
    .PhoneInputInput {
      margin-top: 0.8em;
    }
  }
`;
