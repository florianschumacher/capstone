import Header from '../modules/Header'
import ChartComponent from '../modules/page_components/ChartComponent'
import Form from '../modules/page_components/Form'


window.addEventListener('storage', function () {
    console.log('progress got signal');
});

const Progress = () => {
    // 1. Local storage - anything inside?
    // 2. state filled oder empty array
    // 3. form component gets function - send state has been refreshed to chart component
    return (
        <div>
            <Header title="Progress" />
            <div>
                <ChartComponent />
                <Form />
            </div>
        </div>
    )
}

export default Progress