import { memo } from "react";

const HEAD = (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      border: "7px solid black",
      position: "absolute",
      top: "47px",
      right: "-22px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "7px",
      height: "90px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "-45px",
      rotate: "30deg",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "2px",
      rotate: "150deg",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "70px",
      height: "6px",
      background: "black",
      position: "absolute",
      top: "215px",
      right: "-50px",
      rotate: "60deg",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "70px",
      height: "6px",
      background: "black",
      position: "absolute",
      top: "215px",
      right: "-13px",
      rotate: "-60deg",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ width: "200px" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          marginLeft: "-10%",
        }}
      >
        <div
          style={{
            height: "50px",
            width: "8px",
            position: "absolute",
            background: "black",
            top: 0,
            right: 0,
          }}
        />
        {BODY_PARTS.slice(0, numberOfGuesses)}
      </div>
      <div
        style={{
          height: "8px",
          width: "80%",
          background: "black",
          marginLeft: "10%",
        }}
      />
      <div
        style={{
          height: "300px",
          width: "8px",
          background: "black",
          marginLeft: "10%",
        }}
      />
      <div
        style={{
          height: "8px",
          width: "45%",
          marginLeft: "-10%",
          background: "black",
        }}
      />
    </div>
  );
}
