import PodcastGrid from '../components/PodcastGrid'

export default class PodcastsGrid extends React.Component {
    render() {

        const { audioClips } = this.props

        return <div>
            <h2>Últimos podcast</h2>
            {audioClips.map((clip) => (
                <PodcastGrid clip={clip} />
            ))}

            <style jsx>{`
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