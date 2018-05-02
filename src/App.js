import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs';
import Add from './Add'
class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Tabs>
                        <Tab label="Home"
                    />
                    </Tabs>
                    <Add/>
                </div>
            </MuiThemeProvider>
        )
    }

}

export default App