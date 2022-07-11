import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const HomeComponents = ({ children }) => {
  return (
    <>
      <LeftSection />
      <RightSection children={children || null} />
    </>
  );
};

export default HomeComponents;
