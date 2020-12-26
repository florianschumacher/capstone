import Header from '../modules/Header'
import BarChart from '../modules/page_components/ChartComponent'
import Form from '../modules/page_components/Form'

const Progress = () => {

    return (
        <div>
            <Header title="Progress" />
            <div>
                <BarChart />
                <Form />
            </div>
        </div>
    )
}

export default Progress