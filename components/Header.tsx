"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../public/logF.svg";
import { AnimatedHamburgerButton } from "./ui/HamMenu";
import { CircleUserRound } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "next-view-transitions";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div className="relative bg-primary-blue font-concord font-normal">
      <div className="flex justify-between relative items-center px-2 max-w-[1400px] mx-auto pt-3 md:pt-6 pb-4 lg:px-[10vw] md:px-[5vw]">
        <div className="flex items-center gap-1">
          <div onClick={() => setOpen(!open)} className="lg:hidden z-30">
            <AnimatedHamburgerButton open={open} />
          </div>
          <Image
            src={Logo}
            width={160}
            height={80}
            alt="logo"
            className="lg:w-[240px]"
          />
        </div>
        <div className="uppercase gap-8 text-xs bg-[#53508B] px-5 hidden lg:flex text-white rounded-lg">
          <Link href="/" passHref>
            <ul
              className={`cursor-pointer h-full py-3 ${pathname === "/" ? "text-primary-yellow" : ""}`}
            >
              home
            </ul>
          </Link>
          <Link href="/aboutus" passHref>
            <ul
              className={`cursor-pointer py-3 ${pathname === "/aboutus" ? "text-primary-yellow" : ""}`}
            >
              about
            </ul>
          </Link>
          <Link href="/pricing" passHref>
            <ul
              className={`cursor-pointer py-3 ${pathname === "/pricing" ? "text-primary-yellow" : ""}`}
            >
              pricing
            </ul>
          </Link>
          <Link href="/blog" passHref>
            <ul
              className={`cursor-pointer py-3 ${pathname === "/blog" ? "text-primary-yellow" : ""}`}
            >
              blog
            </ul>
          </Link>
        </div>

        <div className="flex justify-between items-center gap-2">
          <CircleUserRound className="w-7 h-7 text-white lg:hidden" />
          <Button className="uppercase border border-primary-yellow font-normal bg-transparent text-xs hidden lg:flex h-8">
            Create your card
          </Button>

          <Button className="bg-primary-yellow uppercase w-14 md:w-16 font-normal text-xs h-8">
            Login
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "60vh" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-14 md:top-16 bg-white rounded-b-2xl text-black right-0 left-0 overflow-hidden z-20"
            >
              <div className="p-4">
                <div className="uppercase gap-8  text-center ">
                  <Link href="/" passHref>
                    <ul
                      className={`cursor-pointer h-full py-3 ${pathname === "/" ? "text-primary-yellow" : ""}`}
                    >
                      home
                    </ul>
                  </Link>
                  <Link href="/aboutus" passHref>
                    <ul
                      className={`cursor-pointer py-3 ${pathname === "/aboutus" ? "text-primary-yellow" : ""}`}
                    >
                      about
                    </ul>
                  </Link>
                  <Link href="/pricing" passHref>
                    <ul
                      className={`cursor-pointer py-3 ${pathname === "/pricing" ? "text-primary-yellow" : ""}`}
                    >
                      pricing
                    </ul>
                  </Link>
                  <Link href="/blog" passHref>
                    <ul
                      className={`cursor-pointer py-3 ${pathname === "/blog" ? "text-primary-yellow" : ""}`}
                    >
                      blog
                    </ul>
                  </Link>
                </div>
                <Button className="uppercase border bg-primary-yellow w-full font-normal h-12 mb-2 ">
                  Create your card
                </Button>

                <Button className="bg-transparent border border-primary-blue text-primary-blue uppercase w-full  font-normal h-12 mb-2 ">
                  Login
                </Button>
              </div>
            </motion.div>
            <style jsx global>{`
              body {
                overflow: ${open ? "hidden" : "auto"};
              }
              .blur-background {
                filter: blur(${open ? "10px" : "0"});
                transition: filter 0.5s ease;
              }
              
            `}</style>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;





// "use client"
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import Logo from "../public/logF.svg";
// import { AnimatedHamburgerButton } from "./ui/HamMenu";
// import { CircleUserRound } from "lucide-react";
// import { Button } from "./ui/button";
// import { Link } from "next-view-transitions";

// const Header = () => {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     setOpen(false);

//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;

//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <motion.div
//       initial={{ y: -100 }}
//       animate={{ y: visible ? 0 : -100 }}
//       transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
//       className={`fixed top-0 left-0 z-50 w-full   font-concord font-normal ${
//         visible ? "" : "transform -translate-y-full"
//       }`}
//     >
//       <div className="  max-w-[1200px] mx-auto ">
//         <div className="bg-primary-blue rounded-3xl">

//       <div className="flex justify-between relative items-center lg:px-[3vw] md:px-[5vw]  rounded-3xl px-2 max-w-[1400px]   mx-auto pt-3 md:pt-6 pb-4 ">
//         <div className="flex items-center gap-1">
//           <div onClick={() => setOpen(!open)} className="lg:hidden z-30">
//             <AnimatedHamburgerButton open={open} />
//           </div>
//           <Image
//             src={Logo}
//             width={160}
//             height={80}
//             alt="logo"
//             className="lg:w-[240px]"
//           />
//         </div>
//         <div className="uppercase gap-8 text-xs bg-[#53508B] px-5 hidden lg:flex text-white rounded-lg">
//           <Link href="/" passHref>
//             <ul
//               className={`cursor-pointer h-full py-3 ${
//                 pathname === "/" ? "text-primary-yellow" : ""
//               }`}
//             >
//               home
//             </ul>
//           </Link>
//           <Link href="/aboutus" passHref>
//             <ul
//               className={`cursor-pointer py-3 ${
//                 pathname === "/aboutus" ? "text-primary-yellow" : ""
//               }`}
//             >
//               about
//             </ul>
//           </Link>
//           <Link href="/pricing" passHref>
//             <ul
//               className={`cursor-pointer py-3 ${
//                 pathname === "/pricing" ? "text-primary-yellow" : ""
//               }`}
//             >
//               pricing
//             </ul>
//           </Link>
//           <Link href="/blog" passHref>
//             <ul
//               className={`cursor-pointer py-3 ${
//                 pathname === "/blog" ? "text-primary-yellow" : ""
//               }`}
//             >
//               blog
//             </ul>
//           </Link>
//         </div>

//         <div className="flex justify-between items-center gap-2">
//           <CircleUserRound className="w-7 h-7 text-white lg:hidden" />
//           <Button className="uppercase border border-primary-yellow font-normal bg-transparent text-xs hidden lg:flex h-8">
//             Create your card
//           </Button>

//           <Button className="bg-primary-yellow uppercase w-14 md:w-16 font-normal text-xs h-8">
//             Login
//           </Button>
//         </div>
//       </div>
//         </div>

//       </div>
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
//               onClick={() => setOpen(false)}
//             />
//             <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: "60vh" }}
//               exit={{ height: 0 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="absolute top-14 md:top-16 bg-white rounded-b-2xl text-black right-0 left-0 overflow-hidden z-20"
//             >
//               <div className="p-4">
//                 <div className="uppercase gap-8  text-center ">
//                   <Link href="/" passHref>
//                     <ul
//                       className={`cursor-pointer h-full py-3 ${
//                         pathname === "/" ? "text-primary-yellow" : ""
//                       }`}
//                     >
//                       home
//                     </ul>
//                   </Link>
//                   <Link href="/aboutus" passHref>
//                     <ul
//                       className={`cursor-pointer py-3 ${
//                         pathname === "/aboutus" ? "text-primary-yellow" : ""
//                       }`}
//                     >
//                       about
//                     </ul>
//                   </Link>
//                   <Link href="/pricing" passHref>
//                     <ul
//                       className={`cursor-pointer py-3 ${
//                         pathname === "/pricing" ? "text-primary-yellow" : ""
//                       }`}
//                     >
//                       pricing
//                     </ul>
//                   </Link>
//                   <Link href="/blog" passHref>
//                     <ul
//                       className={`cursor-pointer py-3 ${
//                         pathname === "/blog" ? "text-primary-yellow" : ""
//                       }`}
//                     >
//                       blog
//                     </ul>
//                   </Link>
//                 </div>
//                 <Button className="uppercase border bg-primary-yellow w-full font-normal h-12 mb-2 ">
//                   Create your card
//                 </Button>

//                 <Button className="bg-transparent border border-primary-blue text-primary-blue uppercase w-full  font-normal h-12 mb-2 ">
//                   Login
//                 </Button>
//               </div>
//             </motion.div>
//             <style jsx global>{`
//               body {
//                 overflow: ${open ? "hidden" : "auto"};
//               }
//               .blur-background {
//                 filter: blur(${open ? "10px" : "0"});
//                 transition: filter 0.5s ease;
//               }
//             `}</style>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Header;
