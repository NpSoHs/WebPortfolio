import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Material = ({link,icon}) => {
  return (
    <a href={link} target="_blank"><FontAwesomeIcon icon={icon}/></a>
  )
}


