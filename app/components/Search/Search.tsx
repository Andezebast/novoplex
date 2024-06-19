import { useAppDispatch } from "@/app/lib/hook";
import "./Search.scss";
import { GamesSlice } from "@/app/lib/games/GamesSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const handleSearchEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(GamesSlice.actions.setSearchGames(event.target.value));
  };
  return (
    <div className="games-search">
      <div className="games-search-input">
        <input
          type="text"
          placeholder="...Search"
          onChange={handleSearchEvent}
        />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg> */}
      </div>
    </div>
  );
};
export default Search;
