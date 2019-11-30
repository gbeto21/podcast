import { Link } from '../routes'
import slug from '../helpers/slug'

export default class ChannelGrid extends React.Component {

    render() {

        const { channel } = this.props

        return <div className="channelContainer">

            <Link route="channel" params={{
                slug: slug(channel.title),
                id: channel.id
            }} prefetch >
                <a className="channel">
                    <img src={channel.urls.logo_image.original} alt="" />
                    <h2><span> {channel.title} </span></h2>
                </a>
            </Link>
            <style jsx>{`
                    
                    .channelContainer{
                        display: flex;
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        margin: 0.5em;
                        width:160px;
                    }
                    
                    .channel{
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        margin-bottom: 0.5em;
                        width:160px;
                    }

                    .channelContainer img{
                        width: 10em;
                    }

                    h2{
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                        line-height: 1.5em;
                    }
                    `}
            </style>
        </div>

    }

}