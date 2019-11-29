import Link from 'next/link'

export default class Volver extends React.Component {

    render() {

        const { channelId } = this.props

        return <nav>
            <Link href={`/channel?id=${channelId}`}>
                <a className='close'>&lt; Volver</a>
            </Link>

            <style jsx>
                {`
                    nav {
                        background: none;
                    }
                    nav a {
                    display: inline-block;
                    padding: 15px;
                    color: white;
                    cursor: pointer;
                    text-decoration: none;
                }`}
            </style>

        </nav>

    }
}