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
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                >
                  <path
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
                    fill="#CBFAD6"
                  />
                  <path
                    d="M10 14.17l6.59-6.59L18 9l-8 8-4-4 1.41-1.41L10 14.17z"
                    fill="#0C9E67"
                  />
                </svg>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamesItem;
