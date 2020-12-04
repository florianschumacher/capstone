import { useLocation } from "react-router-dom";


export default function Recipes() {
    const location = useLocation()
    const { title, calories, image, ingredients } = location.state
    return (
        <>
            <h1>
                {title}
            </h1>
            <img src={image} alt="" />
            <p>
                {calories.toFixed(0)}
            </p>
            <ul>
                <ol>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </ol>
            </ul>
        </>
    )
}