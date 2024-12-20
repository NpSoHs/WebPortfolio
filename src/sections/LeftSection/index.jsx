import Header from "../Header";
import Link from "../Link";
import Navbar from "../Navbar";

const LeftSection = () => {
  return (
    <div className="px-3">
      <div className="sticky top-14 grid gap-8 lg:gap-0 lg:grid-rows-[35%_45%_20%] lg:h-[90vh]">
        <Header />
        <Navbar />
        <Link />
      </div>
    </div>
  );
};

export default LeftSection;
