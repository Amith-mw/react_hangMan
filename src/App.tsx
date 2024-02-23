import { useState } from "react"
import words from "./assets/wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanText } from "./HangmanText";
import { KeyBoard } from "./KeyBoard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {

    return "test";

    // return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>(['a','b']);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  // console.log(wordToGuess);

  return (
  <div 
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>
      <div 
        style={{
          fontSize: "2rem",
          textAlign: "center",

        }}>Lose Win</div>

      <HangmanDrawing numOfGuesses = {incorrectLetters.length}></HangmanDrawing>
      <HangmanText guessedLetters = {guessedLetters} wordToGuess = {wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
        <KeyBoard />
      </div>
  </div>
  )
}

export default App
