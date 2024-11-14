import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { data } from "../../content/header"

const Header = () => {
  return (
            <div className='flex flex-col gap-y-3'>
              <div className='text-primaryTitle text-4xl font-semibold'>{data.name}</div>
              <div className='text-primaryAccent font-semibold'>{data.title}</div>
              <div className='text-sm w-5/6'>{data.caption}</div>
              <a href="#">
                <div className='mt-3'>
                  <span className='bg-primaryTitle text-gray-300 px-3 py-2 rounded-md'>
                    {data.BnContent}
                    <span className='rotate-90 inline-block ml-1'>
                      <FontAwesomeIcon className=' animate-bounce ' icon={faArrowAltCircleDown} />
                    </span>
                  </span>
                </div>
              </a>
            </div>
  )
}

export default Header
