type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          height: "1em",
          gap: ".1em",
          fontSize: ".7em",
        }}
      >
        {wordToGuess.split("").map((letter, index) =>
          !guessedLetters.includes(letter) && !reveal ? (
            <div
              key={index}
              style={{
                width: ".7em",
                borderBottom: ".1rem solid black",
                display: "flex",
              }}
            />
          ) : (
            <span style={{ borderBottom: ".1rem solid black" }} key={index}>
              <span
                style={{
                  color:
                    !guessedLetters.includes(letter) && reveal
                      ? "red"
                      : "black",
                }}
              >
                {letter}
              </span>
            </span>
          )
        )}
      </div>
    </div>
  );
}
