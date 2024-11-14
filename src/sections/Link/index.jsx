import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = () => {
  return (
    <div className='flex items-end gap-x-4 text-2xl'>
                <FontAwesomeIcon className='hover:scale-125 duration-200 hover:text-primaryTitle' icon={faGithub} />         
                <FontAwesomeIcon className='hover:scale-125 duration-200 hover:text-primaryTitle' icon={faFacebook} />         
                <FontAwesomeIcon className='hover:scale-125 duration-200 hover:text-primaryTitle' icon={faLinkedin} />         
            </div>
  )
}

export default Link