import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h2>{title}</h2>
            <ul className={style.ingredients}>
                {ingredients.map(ingredient => (
                    <li key={Math.random() * 1000}>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt="image of a dish"></img>
        </div>
    );
};

export default Recipe;
