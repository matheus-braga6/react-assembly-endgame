import clsx from "clsx"

export default function Alphabet ({clickedLetters, addLetter, currentWord, isGameOver}) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const alphabetLetters = alphabet.split("").map(letter => {
    const isGuessed = clickedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)

    const className = clsx(
      {
        correct: isCorrect,
        wrong: isWrong
      }, 
      'alphabet-box__letter'
    )

    return (
      <button 
        className={className}
        key={letter} 
        disabled={isGameOver}
        aria-disabled={clickedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        onClick={() => addLetter(letter)}
      >
        {letter}
      </button>
    )
  })

  return (
    <div className="alphabet-box">
      {alphabetLetters}
    </div>
  )
}