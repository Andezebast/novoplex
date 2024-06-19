import { IGames } from "@/app/types/IGames";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGamesState {
  dataAllGames: IGames[];
  dataFilterGames: IGames[];
}

const initialState: IGamesState = {
  dataAllGames: [],
  dataFilterGames: [],
};
export const GamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setAllGames(state, action: PayloadAction<IGames[]>) {
      state.dataAllGames = action.payload;
      state.dataFilterGames = action.payload;
    },
    setSearchGames(state, action: PayloadAction<string>) {
      state.dataFilterGames = state.dataAllGames.filter((game) =>
        game.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export default GamesSlice.reducer;
