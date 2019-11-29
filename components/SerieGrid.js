export default class SerieGrid extends React.Component {

    render() {
        const { serie } = this.props
        return <div>
            {serie.title}
            <style jsx>{`

            header{
                color:#fff;
                background: #8756ca;
                padding: 15px;
                text-align:center;
            }

            .channels{
                display: grid;
                grid-gap: 15px;
                padding: 15px;
                grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));
            }

            .channel{
                display: block;
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                margin-bottom: 0.5em;
            }
            .channel img{
                width: 100%;
            }

            h1{
                font-weight: 600;
                padding: 15px;
            }

            h2{
                padding: 5px;
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-align: center;
            }
            `}
            </style>

            <style jsx global>
                {`
                body {
                    margin: 0;
                    font-family:system-ui;
                    background: white;
                }

                `  }
            </style>
        </div>
    }
}