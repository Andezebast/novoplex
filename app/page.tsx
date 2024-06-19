import { getAllGames } from "./api/getAllGames";
import PopularGames from "./components/PopularGames/PopularGames";
import "./page.scss";

export default async function Page() {
  const data = await getAllGames();

  return (
    <div className="page">
      <div className="container">
        <h1>
          Казино <span>Популярні ігри</span>
        </h1>
        <PopularGames data={data} />
      </div>
    </div>
  );
}
