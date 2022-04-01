import React from "react";
import { COLORS } from "../../config/colors";
import { IoIosCall } from "react-icons/io";
import {
  BsEnvelopeFill,
  BsSkype,
  BsFacebook,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import styled from "styled-components";
import { SPACING } from "../../config/spacing";
import { FONT } from "../../config/font";

const ButtonIcon = styled.a({
  background: "rgb(50,50,50)",
  borderRadius: "50px",
  height: "25px",
  width: "25px",
  display: "flex",
  fontSize: "12px",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: SPACING.small,
  color: 'white',
  '&:hover':{
    color: "white",
    background: COLORS.black,
    transition: '0.3s'
  }
});

export default function TopNav() {
  const mobileNumber = +916203902842;
  const email = "praispranav@gmail.com";

  return (
    <div style={{ background: COLORS.black,}}>
      <div className="container w-100 py-2 text-white">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex" style={{ fontSize: FONT.small }}>
            <p>Have Any Issue ?</p>
            <div className="d-flex align-items-center ms-4">
              <IoIosCall className="me-2" />
              <p>{mobileNumber}</p>
            </div>
            <div className="d-flex align-items-center ms-4">
              <BsEnvelopeFill className="me-2 mt-1" />
              {email}
            </div>
          </div>
          <div className="d-flex">
            <ButtonIcon>
              <BsSkype />
            </ButtonIcon>
            <ButtonIcon>
              <BsFacebook />
            </ButtonIcon>
            <ButtonIcon>
              <BsYoutube />
            </ButtonIcon>
            <ButtonIcon>
              <BsTwitter />
            </ButtonIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
