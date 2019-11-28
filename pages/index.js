export default class extends React.Component {
    render() {
        return <div>
            <h2>Hola a todos.</h2>
            <p>Bienvenidos a todos
                al curso de Next.js
            </p>
            <img src='/static/platzi-logo.png' alt="Platzi" />
            <style jsx>{`
            h2{color:red;}
            div :global(p){color: green;}
            img {
                max-width: 50%;
                display: block;
                margin: 0 auto;
            }
            `}</style>
            <style jsx global>
                {`
                    body {background: yellow;}
    
                    `  }
            </style>
        </div>

    }
}