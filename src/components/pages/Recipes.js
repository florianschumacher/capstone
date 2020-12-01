import { useLocation } from "react-router-dom";


export default function Recipes() {
    const location = useLocation()
    const { title, calories, image, ingredients } = location.state
    return (
        <>
            <h1>
                {title}
            </h1>
            <p>
                {calories}
            </p>
            <img src={image} alt="" />
        </>
    )
}