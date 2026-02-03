import { useState } from "react"
import { languages } from "./data/languages"
import { getRandomWord } from "./data/utils"
import Confetti from "react-confetti"

import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import Word from "./components/Word"
import Alphabet from "./components/Alphabet"

export default function App() {
  // State Values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [clickedLetters, setClickedLetters] = useState([]);

  // Derived Values
  const wrongGuessCount = clickedLetters.filter(letter => !currentWord.includes(letter)).length

  const isGameWon = currentWord.split("").every(letter => clickedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = clickedLetters[clickedLetters.length - 1];
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);
  const currentLanguage = wrongGuessCount > 0 ? languages[wrongGuessCount - 1].name : null;
  const numGuessesLeft = (languages.length - 1) - wrongGuessCount ;

 
  // Adds the clicked letter to the array of clicked letters
  function addNewClickedLetter (letter) {
    setClickedLetters(prevClickedLetters => 
      prevClickedLetters.includes(letter) ? prevClickedLetters :[...prevClickedLetters, letter]
    )
  }

  function startNewGame () {
    setCurrentWord(getRandomWord())
    setClickedLetters([])
  }

  return (
    <main>
      {
        isGameWon &&
        <Confetti 
          recycle={false}
          numberOfPieces={1000}
        />
      }

      <Header />

      <Status 
        isGameWon={isGameWon} 
        isGameOver={isGameOver} 
        isGameLost={isGameLost} 
        isLastGuessIncorrect={isLastGuessIncorrect}
        currentLanguage={currentLanguage}
      />

      <Languages 
        languages={languages} 
        count={wrongGuessCount} 
      />

      <Word 
        word={currentWord} 
        clickedLetters={clickedLetters}
        lastGuessedLetter={lastGuessedLetter}
        numGuessesLeft={numGuessesLeft}
        isGameLost={isGameLost}
      />

      <Alphabet 
        addLetter={addNewClickedLetter} 
        clickedLetters={clickedLetters} 
        currentWord={currentWord} 
        isGameOver={isGameOver}
      />

      { isGameOver && 
        <button 
          className="new-game" 
          onClick={startNewGame}
        >
          New Game
        </button>
      }
    </main>
  )
}