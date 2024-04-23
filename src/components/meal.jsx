import { Link } from "react-router-dom";

function Meal(props) {
    const {strMeal, idMeal, strMealThumb} = props;

    return (
        <div className="card green lighten-4">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn green lighten-1" >
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export { Meal };