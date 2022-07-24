import './songItem.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const SongItem = () => {
  return (
    <div className="song-item">
      <MusicNoteIcon fontSize="large" className="song-item-image" />
      <div className="song-item-text">
        <div className="song-item-title">Song Title</div>
        <div className="song-item-artist">Artist</div>
      </div>
    </div>
  );
};

export default SongItem;
