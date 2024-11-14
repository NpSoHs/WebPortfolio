import {  faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const TitleLink = ({isHighLight,title,link}) => {
  if(!link){
    return(
      <div className={`${isHighLight? "text-primaryTitle":"text-primaryAccent"}`}>
        {title}
    </div>
    )
  }
  return (
    <div className={`${isHighLight? "text-primaryTitle":"text-primaryAccent"}`}>
      <a href={link} target="_blank">
        {title}
        <FontAwesomeIcon icon={faArrowRight} className={`text-xs -rotate-45 duration-300 ease-out ${isHighLight? "translate-x-1 -translate-y-1":""} `} />
      </a>
    </div>
  )
}
