"use client";

import { FC } from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../../lib/store";
import "./PopularGames.scss";
import GamesList from "../GamesList/GamesList";
import Search from "../Search/Search";
import { IGames } from "@/app/types/IGames";
import { GamesSlice } from "@/app/lib/games/GamesSlice";

interface PopularGamesProps {
  data: IGames[];
}

const PopularGames: FC<PopularGamesProps> = ({ data }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(GamesSlice.actions.setAllGames(data));
  }
  return (
    <Provider store={storeRef.current}>
      <div className="popular-games">
        <Search />
        <GamesList />
      </div>
    </Provider>
  );
};

export default PopularGames;
