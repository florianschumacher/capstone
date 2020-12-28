import Header from '../modules/Header'
import Chart from '../modules/page_components/ChartComponent'
import Form from '../modules/page_components/Form'


window.addEventListener('storage', function () {
    console.log('progress got signal');
});

const Progress = () => {

    return (
        <div>
            <Header title="Progress" />
            <div>
                <Chart />
                <Form />
            </div>
        </div>
    )
}

export default Progress