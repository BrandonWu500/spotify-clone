import './content.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';
import ContentRow from '../contentRow/ContentRow';
import { songs } from '../../data';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Content = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const profileDropdownRef = useRef();
  const handleProfileClick = () => {
    if (profileDropdown) {
      profileDropdownRef.current.style.visibility = 'hidden';
    } else {
      profileDropdownRef.current.style.visibility = 'visible';
    }
    setProfileDropdown(!profileDropdown);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="content">
      <div className="content-top">
        <div className="content-top-nav">
          <div className="content-top-nav-left">
            <button className="content-top-nav-btn">
              <ChevronLeftIcon />
            </button>
            <button className="content-top-nav-btn">
              <ChevronRightIcon />
            </button>
          </div>
          <div
            className="content-top-nav-right"
            onClick={() => handleProfileClick()}
          >
            <div className="content-person-icon-wrapper">
              <PersonIcon fontSize="small" />
            </div>
            <span className="content-username">Username</span>
            {profileDropdown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            <ul
              className="profile-dropdown"
              ref={profileDropdownRef}
              onClick={(e) => handleDropdownClick(e)}
            >
              <li className="profile-dropdown-item">
                <span className="profile-dropdown-link">
                  Account <LaunchIcon fontSize="small" />
                </span>
              </li>
              <li className="profile-dropdown-item">
                <span className="profile-dropdown-link">Profile</span>
              </li>
              <li className="profile-dropdown-item">
                <span className="profile-dropdown-link">Log out</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-top-content">
          <div className="content-top-content-box">
            <FavoriteIcon fontSize="large" />
          </div>
          <div className="content-top-content-text">
            <span className="content-top-content-subtitle">PLAYLIST</span>
            <h1 className="content-top-content-title">Liked Songs</h1>
            <p className="content-top-content-desc">
              <strong>Username</strong> - 100 songs
            </p>
          </div>
        </div>
      </div>
      <div className="content-bot">
        <button className="content-play-btn">
          <PlayArrowIcon />
        </button>
        <table className="content-table">
          <thead className="content-thead">
            <tr className="content-tr">
              <td className="content-td">#</td>
              <td className="content-td">TITLE</td>
              <td className="content-td">ALBUM</td>
              <td className="content-td">DATE ADDED</td>
              <td className="content-td content-time-icon">
                <AccessTimeIcon fontSize="inherit" />
              </td>
            </tr>
          </thead>
          <tbody className="content-tbody">
            {songs.map((song) => (
              <ContentRow key={song.id} song={song} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
