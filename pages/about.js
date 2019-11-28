export default class extends React.Component {
    render() {
        return <div>
            <img src="../static/platzi-logo.png" alt="Logo platzi" />
            <div>
                <h3>Hecho por:</h3>
                <h2>Ing. Alberto González Balderas</h2>
            </div>
            <style jsx>{`
                img{width:100px; height:100px; justify-content: center; aling-items:center; display:inline-block;text-align: center;display: block;}
                h3{color:white;}
                h2{color:darkblue;}
            `}
            </style>
            <style jsx global>
                {`body{background: darkgreen; display:flex-box;}`}
            </style>
        </div>
    }
}