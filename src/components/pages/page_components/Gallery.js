import react from 'react'

const Slider ({ sildes }) => {
    const [current, setCurrent] = React.useState(0)
    console.log(current)
    React.useEffect(() => {
        setTimeout(() =>
            setCurrent(current * 1))
    })
    if (AArray.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section>
            {slides.map}
        </section>
    )
}