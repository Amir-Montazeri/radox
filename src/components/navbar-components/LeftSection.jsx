import logo from "assets/logo/aradox-logo.svg";
import resLogo from "assets/logo/res-aradox-logo.svg";
import useWindowSize from "hooks/useWindowSize";

const LeftSection = () => {
  const { innerWidth } = useWindowSize();

  return (
    <div>
      <img src={innerWidth >= 550 ? logo : resLogo} alt="logo" />
    </div>
  );
};

export default LeftSection;
