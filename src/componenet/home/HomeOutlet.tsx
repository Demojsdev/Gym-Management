import { Outlet } from "react-router-dom";

const HomeOutlet = () => {
  return (
    <div className="mt-2 mx-auto py-2 max-w-screen-xl px-4">
      <Outlet />
    </div>
  );
};

export default HomeOutlet;
