import 'isomorphic-fetch'
import Volver from '../components/Volver'
import PodcastImage from '../components/PodcastImage'
import PodcastPlayer from '../components/PodcastPlayer'

export default class Podcast extends React.Component {

  render() {

    const { mp3 } = this.props

    return <div>

      <header>Podcast</header>
      <div className='modal'>
        <div className='clip'>

          <Volver channelId={mp3.channel.id} />
          <PodcastImage urlImage={mp3.urls.image} urlOriginal={mp3.channel.urls.logo_image.original} />
          <PodcastPlayer title={mp3.title} channelTitle={mp3.channel.title} high_mp3={mp3.urls.high_mp3} />

        </div>
      </div>

      <style jsx>{`
    
    .clip {
      display: flex;
      height: 100%;
      flex-direction: column;
      background: #8756ca;
      color: white;
    }
    
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99999;
    }
  `}</style>

      <style jsx global>{`
    body {
      margin: 0;
      font-family: system-ui;
      background: white;
    }
  `}</style>

    </div >
  }
}