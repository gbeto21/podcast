import ChannelGrid from './ChannelGrid'

export default class ChanneslGrid extends React.Component {
    render() {

        const { channels } = this.props

        return <div className="channels">
            {channels.map((channel) => (
                <ChannelGrid channel={channel} />
            ))}
            <style jsx>{`.channels{
                        display: flex;
                        flex-wrap: wrap;
                    }`}
            </style>
        </div>
    }
}