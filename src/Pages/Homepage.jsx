import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/features/cocktailSlice";
import Spinner from "../Components/shared/Spinner";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [modifiedCocktails, setModifiedCocktails] = useState([]);

  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {modifiedCocktails.map((item) => (
            <div className="col-md-3 mt-3 m-2" key={item.id}>
              <div className="card" style={{ width: "15rem" }}>
                <img src={item.img} alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-title">{item.glass}</h5>
                  <p className="card-text">{item.info}</p>
                  <Link
                    to={`/products/${item.id}`}
                    className="btn btn-primary cursor"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
