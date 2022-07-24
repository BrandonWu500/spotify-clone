import logo from '../../images/logo.jpg';
import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DownloadIcon from '@mui/icons-material/Download';
import { playlists } from '../../data';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <img src={logo} alt="spotify logo" className="logo-img" />
          <h2 className="logo-title">Spotify</h2>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <HomeIcon />
            <span className="sidebar-nav-item-text">Home</span>
          </li>
          <li className="sidebar-nav-item">
            <SearchIcon />
            <span className="sidebar-nav-item-text">Search</span>
          </li>
          <li className="sidebar-nav-item">
            <LibraryMusicIcon />
            <span className="sidebar-nav-item-text">Your Library</span>
          </li>
          <li className="sidebar-nav-item">
            <AddIcon />
            <span className="sidebar-nav-item-text">Create Playlist</span>
          </li>
          <li className="sidebar-nav-item">
            <FavoriteIcon />
            <span className="sidebar-nav-item-text">Liked Songs</span>
          </li>
          <li className="sidebar-nav-item">
            <BookmarkIcon />
            <span className="sidebar-nav-item-text">Your Episodes</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-bot">
        <ul className="sidebar-playlists">
          {playlists.map((p) => (
            <li className="sidebar-playlist-item" key={p.id}>
              <span className="sidebar-playlist-name">{p.title}</span>
            </li>
          ))}
        </ul>
        <div className="sidebar-install-app">
          <DownloadIcon />
          <span className="sidebar-install-app-text">Install App</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
