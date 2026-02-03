import clsx from "clsx"
import { getFarewellText } from "../data/utils"

export default function Status ({ isGameWon, isGameOver, isGameLost, isLastGuessIncorrect, currentLanguage }) {
  
  const gameStatus = clsx(
    "status",
    {
      farewell: !isGameOver && isLastGuessIncorrect,
      won: isGameWon,
      lost: isGameLost
    }
  )

  function renderGameStatus () {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="status__subtitle">{getFarewellText(currentLanguage)}</p>
      )
    }

    if (isGameWon) {
      return (
        <>
          <h2 className="status__title">You win!</h2>
          <p className="status__subtitle">Well done! 🎉</p>
        </>
      )
    }

    if (isGameLost) {
      return (
        <>
          <h2 className="status__title">Game over!</h2>
          <p className="status__subtitle">You lose! Better start learning Assembly 😭</p>
        </>
      )
    }

    return null
  }

  return (
    <section 
      className={gameStatus}
      aria-live="polite" 
      role="status" 
    >
      {renderGameStatus()}
    </section>
  )
}