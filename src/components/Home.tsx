import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home = () => {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.anime
  );
  const page = data.length > 0 ? data[0].Page.media : [];

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <h4 style={{ color: "red" }}>Error: {error}</h4>}
      {page.map((item: any) => (
        <>
          <fieldset>
            <h2>{item.title.english}</h2>
            <br />
            <p>{item.description}</p>
            <br />
            <a href={item.siteUrl}>Site Url</a>
          </fieldset>
          <br />
        </>
      ))}
    </div>
  );
};

export default Home;
