import { IGames } from "../types/IGames";

export async function getAllGames(): Promise<IGames[] | string> {
  try {
    const response = await fetch(
      "https://6672d49b6ca902ae11b1fa17.mockapi.io/games"
    );
    if (!response.ok) {
      return "error";
    }
    const data: IGames[] = await response.json();
    return data;
  } catch (error: any) {
    console.error("Failed to fetch games:", error);
    return "error";
  }
}
