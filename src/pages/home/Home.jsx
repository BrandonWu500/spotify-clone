import './home.css';
import Content from '../../components/content/Content';
import Playbar from '../../components/playbar/Playbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Content />
      <Playbar />
    </div>
  );
};

export default Home;
