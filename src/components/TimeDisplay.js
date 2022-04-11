import React, { useEffect, useState } from "react";
import styled from "styled-components";

// image background for clock face
const clockBackground = [
  "https://www.mmppicture.co.in/wp-content/uploads/2020/08/CB-Background-88.jpg",
];

export default function TimeDisplay() {
  const [showCounter, setShowCounter] = useState(false);
  const [date, setDate] = useState(new Date());
  const [init, setInit] = useState(0);

  useEffect(() => {
    const timing = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timing);
    };
  });

  useEffect(() => {
    const time = setInterval(() => {
      setShowCounter((prev) => !prev);
    }, 500);
    return () => {
      clearInterval(time);
    };
  });

  function tick() {
    setDate(new Date());
  }

  // convert time to 24hour
  const format = (digit) => {
    if (digit < 10) {
      return "0" + digit;
    } else {
      return digit;
    }
  };

  // get time details
  const currentDateTime = date;
  const seconds = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  // console.log(day, month, year)

  return (
    <Wrapper>
          <Clock>
              
        <Inner style={{ position: "relative" }}>
                  {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
                 
          {/* Ticker */}
          {showCounter ? (
            <div
              style={{
                position: "absolute",
                top: 15,
                left: 20,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Bar color="#453ffa" />
              <Bar color="#FF5188" />
              <Bar color="#04CBE6" />
            </div>
          ) : null}

          {/* Date */}
          <div
            style={{
              position: "absolute",
              top: -2,
              right: 27,
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <DateInfo>{`${day} / ${month} / ${year}`}</DateInfo>
          </div>

          {/* Hour ******************* */}
          <div
            style={{
              position: "absolute",
              right: 20,
              top: 20,
              color: "rosybrown",
              zIndex: 1,
            }}
          >
            <TimeHour>{format(hour)}</TimeHour>
          </div>
          {/* Minute Hand ************* */}
          <div
            style={{
              position: "absolute",
              right: 20,
              top: 140,
              color: "royalblue",
            }}
          >
            <TimeHour>{format(minute)}</TimeHour>
          </div>
        </Inner>
      </Clock>
      {/* <div style={{ color: "white" }}>{date.toLocaleTimeString()}</div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 91vh;
  padding: 2em;
  background: #171b22;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Clock = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: #6480b8;
  box-shadow: -16px -16px 32px #000000, 16px 16px 32px #000000;
`;

const Inner = styled.div`
  width: 270px;
  height: 320px;
  border-radius: calc(25px - 10px);
  background: #000000;
  background-position: center;
  box-shadow: 5px 5px 32px #191f2b, inset -5px -5px 32px #292d36;
`;

const TimeHour = styled.h1`
  font-size: 6em;
  text-align: right;
  margin: 0px 2px;
  font-family: "Russo One", sans-serif;
`;

const Bar = styled.div`
  width: 10px;
  height: 10px;
  margin: 5px 5px 5px 0px;
  background: ${(props) => props.color || "#ffffff"};
  border-radius: 50%;
`;

const DateInfo = styled.p`
  color: ${(props) => props.color || "white"};
  font-size: 1.1rem;
  font-family: "Nanum Pen Script", cursive;
`;


