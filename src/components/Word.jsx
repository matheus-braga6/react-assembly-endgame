import clsx from "clsx"

export default function Word ({word, clickedLetters, lastGuessedLetter, numGuessesLeft, isGameLost}) {

  const letterElements = word.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || clickedLetters.includes(letter)
    const letterClassName = clsx(
      'word-box__letter',
      isGameLost && !clickedLetters.includes(letter) && 'missed-letter'
    )

    return (
      <span key={index} className={letterClassName}>
        {shouldRevealLetter ? letter : ''}
      </span>
    )
  })
  
  return (
    <>
      <div className="word-box">
        {letterElements}
      </div>

      {clickedLetters.length > 0 && (
        <div className="sr-only" aria-live="polite" role="status">
          <p>
            {word.includes(lastGuessedLetter) ?
              `Correct! The letter '${lastGuessedLetter}' is in the word.` : 
              `Sorry, the letter '${lastGuessedLetter}' is not in the word.`
            } 
            You have {numGuessesLeft} attempts left.
          </p>

          <p>
            Current word: {word.split("").map(letter =>
              clickedLetters.includes(letter) ? letter + "." : "blank.")
              .join(" ")
            }
          </p>
        </div>
        )
      }
    </>
  )
}