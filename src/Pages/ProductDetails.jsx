import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import { fetchSingleCocktail } from "../Redux/features/cocktailSlice";
import Spinner from "./../Components/shared/Spinner";
const ProductDetails = () => {
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCocktail({ id }));
  }, [id, dispatch]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strCategory: category,
        strAlcoholic: info,
        strGlass: glass,
        strDrinkThumb: img,
        strInstructions: instruction,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
      } = cocktail[0];

      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
      ];

      const newCocktail = [
        name,
        category,
        info,
        glass,
        img,
        instruction,
        ingredients,
      ];

      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifiedCocktail) {
    return <h2>No details found</h2>;
  } else {
    const { name, img, info, category, glass, ingredients, instruction } =
      modifiedCocktail;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <Layout>
            <div className="container mt-4">
              <Link to="/" className="btn btn-info">
                GO BACK
              </Link>
              <div className="row mt-4">
                <div className="col-md-5">
                  <img src={img} alt={name} height={300} width={400} />
                </div>
                <div className="col-md-5">
                  <h2>Name : {name}</h2>
                  <p className="mt-1">Category : {category}</p>
                  <p>Info : {info}</p>
                  <p>Glass : {glass}</p>
                  <p>Ingredients : {ingredients + " ,"}</p>
                  <p>instruction : {instruction}</p>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetails;
