import { useState } from "react";

import style from "./recipe.module.css";

const Recipe = ({ title, url, image, ingredients }) => {
    const [imageUrl, setImageUrl] = useState("./logo512.png");

    const handleLoad = () => {
        setImageUrl(image)
    }

    return (
        <a
            href={url}
            className={style.recipe}
            target="_blank"
            rel="noopener noreferer"
        >
            <h2>{title}</h2>
            <ul className={style.ingredients}>
                {ingredients.map((ingredient) => (
                    <li key={Math.random() * 1000}>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={imageUrl} alt="dish" onLoad={handleLoad}></img>
        </a>
    );
};

export default Recipe;
