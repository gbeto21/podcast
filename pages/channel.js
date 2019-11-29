import Channel from '../components/Channel'

export default class extends React.Component {

    static async getInitialProps({ query }) {
        let idChannel = query.id

        let [reqChannel, reqSeries, reqAudios] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${idChannel}`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
        ])

        let dataChannel = await reqChannel.json()
        let channel = dataChannel.body.channel

        let dataAudios = await reqAudios.json()
        let audioClips = dataAudios.body.audio_clips

        let dataSeries = await reqSeries.json()
        let series = dataSeries.body.channels

        return { channel, audioClips, series }
    }

    render() {

        const { channel, audioClips, series } = this.props

        return <Channel
            channel={channel}
            audioClips={audioClips}
            series={series} />
    }
}