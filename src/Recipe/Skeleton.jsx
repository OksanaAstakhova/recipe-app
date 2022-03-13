import style from "./recipe.module.css";

const Skeleton = () => {
    return <div className={`${style.recipe} ${style.skeleton}`}></div>;
};

export default Skeleton;
