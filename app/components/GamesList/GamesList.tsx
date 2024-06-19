import { useAppSelector } from "@/app/lib/hook";
import "./GamesList.scss";
import GamesItem from "../GamesItem/GamesItem";
import { Fragment } from "react";

const GamesList = () => {
  const games = useAppSelector((state) => state.GamesReducer.dataFilterGames);
  return (
    <div className="games-list">
      {games.map((game) => (
        <Fragment key={game.id}>
          <GamesItem game={game} />
        </Fragment>
      ))}
    </div>
  );
};

export default GamesList;
