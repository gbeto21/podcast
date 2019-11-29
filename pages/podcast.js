import Podcast from '../components/Podcast'

export default class extends React.Component {

  static async getInitialProps({ query }) {

    let idPodcast = query.id
    let reqMP3 = await fetch(`https://api.audioboom.com/audio_clips/${idPodcast}.mp3`)
    let dataMP3 = await reqMP3.json()
    let mp3 = dataMP3.body.audio_clip
    return { mp3 }
  }

  render() {
    const { mp3 } = this.props
    return <Podcast mp3={mp3} />
  }
}