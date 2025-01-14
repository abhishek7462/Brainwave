import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import PlusSvg from "../../assets/svg/PlusSvg";
import "./HeroDesign.css";
// import { background } from "../../assets";

export const Gradient = () => {
  return (
    <>
      <div className="gradient-1" />
      <div className="gradient-2" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="bottom-line" />

      <PlusSvg className="plus-icon left" />

      <PlusSvg className="plus-icon right" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="ring large" />
      <div className="ring medium-large" />
      <div className="ring medium" />
      <div className="ring small" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="background-circles">
      <Rings />

      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="circle-container rotate-46">
          <div
            className={`circle small ${mounted ? "mounted" : "unmounted"}`}
          />
        </div>

        <div className="circle-container rotate-negative-56">
          <div
            className={`circle medium ${mounted ? "mounted" : "unmounted"}`}
          />
        </div>

        <div className="circle-container rotate-54">
          <div
            className={`circle large hidden-xl ${
              mounted ? "mounted" : "unmounted"
            }`}
          />
        </div>

        <div className="circle-container rotate-negative-65">
          <div
            className={`circle medium-alt ${mounted ? "mounted" : "unmounted"}`}
          />
        </div>

        <div className="circle-container rotate-negative-85">
          <div
            className={`circle large-alt ${mounted ? "mounted" : "unmounted"}`}
          />
        </div>

        <div className="circle-container rotate-70">
          <div
            className={`circle large-alt ${mounted ? "mounted" : "unmounted"}`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};

// export const HamburgerMenu = () => {
//   return (
//     <div className="hamburger-menu">
//       <div className="background-overlay">
//         <img
//           className="background-image"
//           src={background}
//           width={688}
//           height={953}
//           alt="Background"
//         />
//       </div>

//       <Rings />

//       <SideLines />

//       <BackgroundCircles />
//     </div>
//   );
// };
