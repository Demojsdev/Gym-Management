import React from "react";
import { Navbar, Button, IconButton } from "@material-tailwind/react";

interface DNav {
  openNav: boolean;
  toggled: () => void;
}

const DashNavbar: React.FC<DNav> = ({ openNav, toggled }) => {
  return (
    <Navbar
      className={`fixed top-0 z-10 w-ful rounded-none px-4 py-2 lg:px-8 lg:py-4 duration-300 ease-linear ${
        openNav
          ? " lg:left-[5rem] l lg:max-w-[calc(100%-5rem)]"
          : " lg:left-[18.5rem] l lg:max-w-[calc(100%-18.5rem)]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={toggled}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
        </div>
      </div>
    </Navbar>
  );
};
export default DashNavbar;
