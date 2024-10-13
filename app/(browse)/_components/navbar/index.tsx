import React from "react";
import { Logo } from "./logo";
import Search from "./search";
import Actions from "./actions";

const Navbar = () => {
  return (
    <nav className="fixed top-0 h-20 z-[49] bg-[#252731] w-full px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Search />
      <Actions />
    </nav>
  );
};

export default Navbar;
