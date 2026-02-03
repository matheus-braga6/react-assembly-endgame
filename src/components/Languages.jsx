import clsx from "clsx";

export default function Languages ({languages, count}) {

  const languagesElements = languages.map((lang, index) => {

    const isLanguageLost = index < count;
    const className = clsx('languages-box__element', isLanguageLost && 'lost');

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    
    return (
      <span 
        style={styles} 
        key={lang.name}  
        className={className}
      >
        {lang.name}
      </span>
    )
  })

  return (
    <div className="languages-box">
      {languagesElements}
    </div>
  )
}