import { Aboutdata } from "../../content/about"
const About = () => {
  return (
    <div id={`content-About`} className="space-y-4 scroll-m-14">
        <div className="text-primaryAccent font-medium">{Aboutdata.title}</div>
        <div>{Aboutdata.description}</div>
    </div>
  )
}

export default About