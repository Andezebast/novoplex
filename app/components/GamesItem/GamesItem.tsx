import { IGames } from "@/app/types/IGames";
import "./GamesItem.scss";
import { FC } from "react";

interface IGamesItem {
  game: IGames;
}

const GamesItem: FC<IGamesItem> = ({ game }) => {
  return (
    <div className="games-item">
      <div className="games-item-image">
        <img src={game.photo} alt="photo" />
      </div>
      <div className="games-item-content">
        <div className="games-item-title">
          <h2>{game.title}</h2>
        </div>
        <div className="games-item-description">
          <ul>
            {game.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamesItem;
