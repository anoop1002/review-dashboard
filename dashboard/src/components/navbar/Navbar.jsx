// import React ,{useState}from "react";
// import logoImg from "../../assets/logo-Img.png";
// import { Link } from "react-router-dom";
// import "./style.css";
// import SignUp from "../signup/SignUp";


// const Navbar = () => {

//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const openDialog = () => {
//     setIsDialogOpen(true);
//   };
//   return (
//     <>
//       <section className="m_nav">
//         <div className="m_nav_conatiner">
//           <div className="m_logo">
//             <Link to="/">
//               <img src={logoImg} alt="logo" />
//             </Link>
//           </div>
//           <div className="m_signinbtn">
//             <button type="button" onClick={openDialog}>
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="25"
//                   height="20"
//                   fill="none"
//                   role="img"
//                   data-test="sign-in-svg"
//                 >
//                   <path
//                     stroke="#fff"
//                     stroke-width="1.5"
//                     d="M2.998 12h14m0 0-4.5-4.5m4.5 4.5-4.5 4.5M7.771 8.28V5.75a2 2 0 0 1 2-2h9.48a2 2 0 0 1 2 2v11.995a2 2 0 0 1-2.006 2l-9.479-.026a2 2 0 0 1-1.995-2v-2.104"
//                   ></path>
//                 </svg>
//               </span>
//               Sign In
//             </button>
//           </div>
//         </div>
//         {isDialogOpen && <SignUp onClose={closeDialog} />}
//       </section>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logoImg from "../../assets/logo-Img.png";
import { Link } from "react-router-dom";
import "./style.css";
import SignUp from "../signup/SignUp";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <section className="m_nav">
        <div className="m_nav_conatiner">
          <div className="m_logo">
            <Link to="/">
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          <div className="m_signinbtn">
            <button type="button" onClick={openDialog}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  fill="none"
                  role="img"
                  data-test="sign-in-svg"
                >
                  <path
                    stroke="#fff"
                    strokeWidth="1.5"
                    d="M2.998 12h14m0 0-4.5-4.5m4.5 4.5-4.5 4.5M7.771 8.28V5.75a2 2 0 0 1 2-2h9.48a2 2 0 0 1 2 2v11.995a2 2 0 0 1-2.006 2l-9.479-.026a2 2 0 0 1-1.995-2v-2.104"
                  ></path>
                </svg>
              </span>
              Sign In
            </button>
          </div>
        </div>
        {isDialogOpen && <SignUp onClose={closeDialog} />}
      </section>
    </>
  );
};

export default Navbar;

