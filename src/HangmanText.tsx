type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export function HangmanText() {
    const word = "Test";
    const guessedLetters = ["e", "x"];
    return (
        <div 
            style={{
                display: "flex",
                gap: "0.25em",
                fontSize: "6rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace"
            }}
        >
            {word.split("").map((letter, index) => {
                return (
                    <span style={{borderBottom: "0.1em solid black"}} key = {index}>
                        <span 
                            style={{
                                visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
                            }}
                        >
                            {letter}
                        </span>
                    </span>
                )
            })}
        </div>
    )
}