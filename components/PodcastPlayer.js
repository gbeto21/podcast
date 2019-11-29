export default class PodcastPlayer extends React.Component {

    render() {

        const { title, channelTitle, high_mp3 } = this.props

        return <div className='player'>
            <h3>{title}</h3>
            <h6>{channelTitle}</h6>
            <audio controls autoPlay={false}>
                <source src={high_mp3} type='audio/mpeg' />
            </audio>

            <style jsx>{`
                .player {
                    padding: 30px;
                    background: rgba(0,0,0,0.3);
                    text-align: center;
                  }
                  h3 {
                    margin: 0;
                  }
                  h6 {
                    margin: 0;
                    margin-top: 1em;
                  }
                  audio {
                    margin-top: 2em;
                    width: 100%;
                  }
              
            `}</style>

        </div>
    }
}