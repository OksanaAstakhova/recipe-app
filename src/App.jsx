import { useEffect, useState } from "react";

import Recipe from "./Recipe/Recipe";
import Skeleton from "./Recipe/Skeleton";
import "./App.css";

const skeletonList = [];
for (let i = 0; i < 6; i++) {
    skeletonList.push(<Skeleton key={`skeleton ${i}`} />);
}

const App = () => {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    const [loading, setLoading] = useState(false);

    console.log(loading);
    const getRecipes = async () => {
        setLoading(true);
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        setLoading(false);
    };

    useEffect(() => {
        getRecipes();
    }, [query]);

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
    };

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
                {loading
                    ? skeletonList
                    : recipes.map(({ recipe }) => (
                          <Recipe
                              key={`${recipe.label} ${recipe.url}`}
                              title={recipe.label}
                              image={recipe.image}
                              url={recipe.url}
                              ingredients={recipe.ingredients}
                          />
                      ))}
            </div>
        </div>
    );
};

export default App;
