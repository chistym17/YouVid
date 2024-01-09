import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Feed from '../components/Feed';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> 
      <Feed />
    </div>
  );
};

export default Main;
