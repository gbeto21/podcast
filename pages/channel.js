import Channel from '../components/Channel'
import Error from 'next/error'

export default class extends React.Component {

    static async getInitialProps({ query, res }) {
        let idChannel = query.id

        try {

            let [reqChannel, reqSeries, reqAudios] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
            ])

            if (reqChannel.status >= 400) {
                res.statusCode = reqChannel.status
                return {
                    channel: null,
                    audioClips: null,
                    series: null,
                    satusCode: 404
                }
            }

            let dataChannel = await reqChannel.json()
            let channel = dataChannel.body.channel

            let dataAudios = await reqAudios.json()
            let audioClips = dataAudios.body.audio_clips

            let dataSeries = await reqSeries.json()
            let series = dataSeries.body.channels

            return { channel, audioClips, series, statusCode: 200 }

        } catch (error) {
            // res.statusCode = 503
            return { channel: null, audioClips: null, series: null, satusCode: 503 }
        }

    }

    render() {

        const { channel, audioClips, series, statusCode } = this.props

        if (statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

        return <Channel
            channel={channel}
            audioClips={audioClips}
            series={series} />
    }
}