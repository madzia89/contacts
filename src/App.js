import React from 'react'
import AppBar from 'material-ui/AppBar'
import Add from './Add'
class App extends React.Component {

    render() {
        return (

                <div>
                    <AppBar title ="Home"
                            showMenuIconButton={false}
                            style={{backgroundColor: '#AD1457'}}
                    />
                    <Add/>
                </div>
        )
    }

}

export default App