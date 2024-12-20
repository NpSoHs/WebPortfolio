import { useState } from "react"
import { FromattedDate } from "../FormatDate"
import { Picture } from "../Picture"
import { TitleLink } from "../TitleLink"
import { Material } from "../Material"
import Description from "../Description"
import { Skill } from "../Skill"

const ContentContainer = ({title,data}) => {
    const [isMouseEnter , setIsMouseEnter] = useState({})  
    return (  
      <div id={`content-${title}`} className="scroll-m-14">
          <div className="text-primaryAccent">{title}</div>
          {
              data.map(({
                  date="",
                  picture="",
                  titleLink={},
                  material=[],
                  description="",
                  skill=[]
              },i)=>{
                  const key = `exp-${i}`
                  const keyprop = `exp-${i}-${titleLink.title.replaceAll(' ','')}`
                  
                  return(
                      <div
                      key={keyprop}
                      className={`grid grid-cols-[25%_75%] ${isMouseEnter[key]? "bg-[#de9fae5c]  transition-all duration-500":""} px-2 py-6 rounded-md `}
                      onMouseEnter={()=>setIsMouseEnter({[key]:true})}
                      onMouseLeave={()=>setIsMouseEnter({[key]:false})}
                  >
                      <div>
                          <FromattedDate isMouseEnter={isMouseEnter[key]}>
                              {date}
                          </FromattedDate>
                          <Picture Pic={picture}/>
                      </div>
                      <div className="flex flex-col gap-y-4">
                          <TitleLink title={titleLink.title} isHighLight={isMouseEnter[key]} link={titleLink.link}/>
                          <div className="flex gap-x-4 text-xl">
                              {
                                  material.map((e,i)=>{
                                      return(
                                          <Material key={`material-${i}`} link={e.link} icon={e.icon} />
                                      )
                                  })
                              }
                              
                          </div>
                          <Description description={description}/>
                        {
                            skill.map((e,i)=>{
                                const key = `skill-${i}`
                                return(
                                    <Skill key={key} isMouseEnter={isMouseEnter[key]} data={e}/>
                                )
                            })
                        }
                              
                          
      
                      </div>
                  </div>
                  )
              })
          }
      </div>
    )
}

export default ContentContainer