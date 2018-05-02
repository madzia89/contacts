import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Sidebar from './Sidebar'
import Add from './Add'

class App extends React.Component {
    state = {
        isDrawerOpen: false

    }
    drawerBtnClickHandler = () => this.setState({
        isDrawerOpen: !this.state.isDrawerOpen
    })

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Home"
                        onLeftIconButtonClick={this.drawerBtnClickHandler}
                    />
                    <Router>
                        <div>
                            <Sidebar
                                isDrawerOpen={this.state.isDrawerOpen}
                                drawerBtnClickHandler={this.drawerBtnClickHandler}
                            />
                        </div>
                    </Router>
                    <Add/>
                </div>
            </MuiThemeProvider>
        )
    }

}

export default App