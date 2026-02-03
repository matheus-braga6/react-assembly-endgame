export default function Header () {
  return (
    <header className="header">
      <div class="header__title-container">
        <h1 className="header__title">Assembly: Endgame</h1>
        <img src="./images/brain.png" className="header__icon" alt="Brain Icon"/>
        <img src="./images/skull.png" className="header__icon" alt="Skull Icon"/>
      </div>
      <p className="header__description">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
    </header>
  )
}