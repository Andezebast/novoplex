import { getAllGames } from "./api/getAllGames";
import PopularGames from "./components/PopularGames/PopularGames";
import "./page.scss";

export default async function Page() {
  const data = await getAllGames();
  console.log(data, "data");

  return (
    <div className="page">
      <div className="container">
        <h1>
          Казіно - <span>Популярні ігри</span>
        </h1>
        {typeof data === "string" ? (
          <div className="error">Щось пішло не так, Ігри не знайдені!</div>
        ) : (
          <PopularGames data={data} />
        )}
      </div>
    </div>
  );
}
