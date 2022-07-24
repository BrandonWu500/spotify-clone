import './contentRow.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongItem from '../songItem/SongItem';

const ContentRow = (song) => {
  return (
    <tr className="content-tr">
      <td className="content-td">{song.id}</td>
      <td className="content-td">
        <SongItem />
      </td>
      <td className="content-td">Album Title</td>
      <td className="content-td">1 hour ago</td>
      <td className="content-td content-last-col">
        <button className="content-td-btn content-td-like-btn">
          <FavoriteIcon fontSize="inherit" />
        </button>
        <span className="content-td-time">3:10</span>
        <button className="content-td-btn content-td-more-btn">
          <MoreHorizIcon fontSize="inherit" />
        </button>
      </td>
    </tr>
  );
};

export default ContentRow;
