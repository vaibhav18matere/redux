import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../Redux/features/cocktailSlice";

const Searchbar = () => {
  const searchTerm = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchTerm.current.value;
    dispatch(fetchSearchCocktails({ searchText }));
  };

  const handleSubmit = (e) => {
    e.prevenrDefault();
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              ref={searchTerm}
              onChange={handleChange}
              className="form-control"
              placeholder="Serach cocktail here"
              style={{ width: "350px" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
