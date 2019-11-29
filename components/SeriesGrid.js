import SerieGrid from '../components/SerieGrid'

export default class SeriesGrid extends React.Component {

    render() {

        const { series } = this.props

        return <div>
            <h2>Series</h2>
            {series.map((serie) => (
                <SerieGrid serie={serie} />
            ))}

            <style jsx>
                {`
                    h2{
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                    }
                `}
            </style>
        </div>
    }
}