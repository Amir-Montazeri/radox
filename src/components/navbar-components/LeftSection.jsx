import { Link } from "react-router-dom";
import logo from "assets/logo/aradox-logo.svg";
import resLogo from "assets/logo/res-aradox-logo.svg";
import useWindowSize from "hooks/useWindowSize";

const LeftSection = () => {
  const { innerWidth } = useWindowSize();

  return (
    <div>
      <Link to="/">
        <img src={innerWidth >= 550 ? logo : resLogo} alt="logo" />
      </Link>
    </div>
  );
};

export default LeftSection;
