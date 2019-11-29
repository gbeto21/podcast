export default class PodcastImage extends React.Component {

    render() {

        const { urlImage, urlOriginal } = this.props

        return <picture>
            <div style={{ backgroundImage: `url(${urlImage || urlOriginal})` }} />

            <style jsx>{`
            
            picture {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1 1;
                flex-direction: column;
                width: auto;
                padding: 10%;
            }
            picture div {
                width: 100%;
                height: 100%;
                background-position: 50% 50%;
                background-size: contain;
                background-repeat: no-repeat;
            }`}
            </style>

        </picture>
    }
}