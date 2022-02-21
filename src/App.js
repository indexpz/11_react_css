import React from 'react'
import './App.css';
import Text from './Text'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
    state = {
        active: true,
        underline: false,
    }

    render() {
        const btn_off = {
            border: 'none',
            padding: '5px 10px',
            fontSize: 30,
            display: "block",
            margin: '20px auto',
            backgroundColor: 'royalblue',
            color: 'white',
        }

        const btn_on = {
            border: 'none',
            padding: '5px 10px',
            fontSize: 30,
            display: "block",
            margin: '20px auto',
            backgroundColor: 'darkblue',
            color: 'white',
        }

        const btn_inline = {
            marginTop: '80vh'
        }

        const styles = {
            btn_on: {
                border: 'none',
                padding: '5px 10px',
                fontSize: 30,
                display: "block",
                margin: '20px auto',
                backgroundColor: 'darkblue',
                color: 'white',
            },
            btn_off: {
                border: 'none',
                padding: '5px 10px',
                fontSize: 30,
                display: "block",
                margin: '20px auto',
                backgroundColor: 'royalblue',
                color: 'white',
            }
        }


        let btn = {
            border: 'none',
            padding: '5px 10px',
            fontSize: 30,
            display: "block",
            margin: '20px auto',
            backgroundColor: 'darkblue',
            color: 'white',
        }

        if (this.state.active) {
            btn.backgroundColor = "black"
            btn.color = "red"
        }

        //--------------------------------------------------
        let classes = ""
        if (this.state.underline) {
            classes += " underline"
        }

        const text = "Ala ma kota"
        let textClass = ""
        if (text.length > 10) {
            textClass += " big"
        }
        //--------------------------------------------------

        const classArray = ["one"]
        if (this.state.underline) {
            classArray.push("underline")
        }


        return (
            <React.Fragment>

                <div className="app" onClick={() => this.setState({underline: !this.state.underline})}>
                    <h1 className={classes}>Witaj na stronie</h1>
                    <h2 className={textClass}>{text}</h2>
                    <h3 className={classArray.join(" ")}>Bla bla bla</h3>
                    <Text/>
                </div>

                <div style={btn_inline}>
                    <button style={{
                        backgroundColor: "red", color: "blue", border: 'none',
                        padding: '5px 10px',
                        fontSize: 30,
                        display: "block",
                        margin: '20px auto'
                    }}
                            onClick={() => this.setState({active: !this.state.active})}>{this.state.active ? "Wyłącz" : "Włącz"}</button>

                    <button style={this.state.active ? btn_on : btn_off}
                            onClick={() => this.setState({active: !this.state.active})}>{this.state.active ? "Wyłącz" : "Włącz"}</button>

                    <button style={this.state.active ? styles.btn_on : styles.btn_off}
                            onClick={() => this.setState({active: !this.state.active})}>{this.state.active ? "Wyłącz" : "Włącz"}</button>

                    <button style={btn}
                            onClick={() => this.setState({active: !this.state.active})}>{this.state.active ? "Wyłącz" : "Włącz"}</button>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
