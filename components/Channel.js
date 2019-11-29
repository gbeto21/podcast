import SeriesGrid from '../components/SeriesGrid'
import PodcastsGrid from './PodcastsGrid'

export default class Channel extends React.Component {
    render() {

        const { channel, audioClips, series } = this.props

        return <div>
            <header>Podcasts</header>
            <h1>{channel.title}</h1>

            <SeriesGrid series={series} />
            <PodcastsGrid audioClips={audioClips} />


            <style jsx>{`

            header{
                color:#fff;
                background: #8756ca;
                padding: 15px;
                text-align:center;
            }

            h1{
                font-weight: 600;
                padding: 15px;
            }
            `}
            </style>
        </div>
    }
}