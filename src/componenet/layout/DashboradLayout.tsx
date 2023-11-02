import { Typography } from '@material-tailwind/react';
import Asidebar from '../common/Asidebar';
import DashNavbar from '../common/DashNavbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const DashboardLayout = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggled = () => setOpenNav(!openNav);
  return (
    <section>
      <DashNavbar openNav={openNav} toggled={toggled} />
      <main className=' w-full mt-[4.5rem] max-w-[calc(100%-18.5rem)] bg-red-500 ml-[18.5rem] mr-0'>
        {/* <Outlet /> */}
        <Typography variant='h2'>
          <Outlet />
        </Typography>
      </main>
      <Asidebar openNav={openNav} />
    </section>
  );
};
export default DashboardLayout;
