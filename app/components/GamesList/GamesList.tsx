import { useAppSelector } from "@/app/lib/hook";
import "./GamesList.scss";
import GamesItem from "../GamesItem/GamesItem";
import { Fragment } from "react";

const GamesList = () => {
  const games = useAppSelector((state) => state.GamesReducer.dataFilterGames);
  return (
    <>
      {games.length > 0 ? (
        <div className="games-list">
          {games.map((game) => (
            <Fragment key={game.id}>
              <GamesItem game={game} />
            </Fragment>
          ))}
        </div>
      ) : (
        <div className="games-error">
          <p>Такої гри не найдено!</p>
        </div>
      )}
    </>
  );
};

export default GamesList;
