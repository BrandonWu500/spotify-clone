import './playbar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import LyricsIcon from '@mui/icons-material/Lyrics';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import DevicesIcon from '@mui/icons-material/Devices';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import SongItem from '../songItem/SongItem';

const Playbar = () => {
  return (
    <div className="playbar">
      <div className="playbar-left">
        <SongItem />
        <FavoriteIcon fontSize="small" />
      </div>
      <div className="playbar-center">
        <div className="playbar-btns">
          <button className="playbar-btn">
            <ShuffleIcon fontSize="inherit" />
          </button>
          <button className="playbar-btn">
            <SkipPreviousIcon fontSize="inherit" />
          </button>
          <button className="playbar-btn">
            <PlayCircleIcon fontSize="inherit" />
          </button>
          <button className="playbar-btn">
            <SkipNextIcon fontSize="inherit" />
          </button>
          <button className="playbar-btn">
            <RepeatIcon fontSize="inherit" />
          </button>
        </div>
        <div className="playbar-track">
          <span className="playbar-track-time">0:00</span>
          <div className="playbar-track-progress"></div>
          <span className="playbar-track-time">3:27</span>
        </div>
      </div>
      <div className="playbar-right">
        <LyricsIcon fontSize="inherit" />
        <QueueMusicIcon fontSize="inherit" />
        <DevicesIcon fontSize="inherit" />
        <VolumeUpIcon fontSize="inherit" />
        <div className="playbar-volume-bar"></div>
        <FullscreenIcon fontSize="inherit" />
      </div>
    </div>
  );
};

export default Playbar;
