import Link from 'next/link'

export default class PodcastGrid extends React.Component {

    render() {
        const { clip } = this.props
        return <div>
            <Link href={`/podcast?id=${clip.id}`}>
                <a className="channel">
                    {clip.title}
                </a>
            </Link>
            <style jsx>{`
            .channel{
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                margin-bottom: 0.5em;
                width:160px;
            }
                    `}
            </style>

        </div>
    }
}