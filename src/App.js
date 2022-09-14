import Movie from "./components/Movie";
import { data } from "./mockData";

function App() {
  return (
    <div>
      <div className="appContainer">
        {data.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              release_date={item.release_date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
