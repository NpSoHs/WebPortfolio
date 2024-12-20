import ContentContainer from "../../components/ContentContainer";
import { data } from "../../content/experience";
import About from "../About";

const RightSection = () => {
  return (
    <div className="px-3 grid gap-y-40">
      <About/>
      <ContentContainer title={"Experience"} data={data}/>
      <ContentContainer title={"Project"} data={data}/>
      <ContentContainer title={"Article"} data={data}/>
    </div>
  );
};

export default RightSection;
