import { IGames } from "../types/IGames";

export function getAllGames(): Promise<IGames[]> {
  return fetch("https://6672d49b6ca902ae11b1fa17.mockapi.io/games").then(
    (res) => res.json()
  );
}
