import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.svg";
import Themeselector from "./Themeselector";
import { FaShoppingBasket } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    return scrollY.on("change", (currentY) => {
      if (currentY > lastY && currentY > 80) {
        controls.start("hidden"); // Scrolling down
      } else {
        controls.start("visible"); // Scrolling up
      }
      setLastY(currentY);
    });
  }, [scrollY, lastY, controls]);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/products", label: "PRODUCTS" },
    { to: "/rituals", label: "RITUALS" },
    { to: "/stories", label: "STORIES" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <motion.div
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.25, ease: "easeOut" },
        },
        hidden: {
          y: "-100%",
          opacity: 0,
          transition: { duration: 0.2, ease: "easeIn" },
        },
      }}
      initial="visible"
      animate={controls}
      className="sticky top-0 z-50"
    >
      <NavigationMenu className="w-full border-b bg-background/80 backdrop-blur-2xl">
        <div className="w-full flex justify-between items-center p-4">
          {/* Left Side: Logo + Desktop Links */}
          <div className="flex items-center gap-8">
            <Link to="/">
              <img src={logo} alt="Zuriya Logo" className="h-16 w-16" />
            </Link>

            <NavigationMenuList className="hidden md:flex items-center gap-6 text-navtext font-sans">
              {navLinks.map(({ to, label }) => (
                <NavigationMenuItem key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "text-primary underline font-bold" : "hover:underline"
                    }
                  >
                    {label}
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>

          {/* Right Side: Cart + Theme Toggle + Hamburger */}
          <div className="flex items-center gap-4">
            <Themeselector />
            <FaShoppingBasket className="text-xl cursor-pointer text-primary" />

            <Sheet>
              <SheetTrigger className="md:hidden p-2 rounded hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="p-6 space-y-6">
                <Link to="/">
                  <img src={logo} alt="Zuriya Logo" className="h-16 w-16 mb-4" />
                </Link>
                <nav className="flex flex-col gap-4 text-lg text-navtext">
                  {navLinks.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "text-primary font-semibold" : "hover:underline"
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <Themeselector />
                  <FaShoppingBasket className="text-xl cursor-pointer" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </NavigationMenu>
    </motion.div>
  );
}

export default Navbar;
