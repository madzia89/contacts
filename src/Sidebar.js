import React from 'react'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'

const Sidebar = (props) => (
    <Drawer
        docked={false}
        onRequestChange={props.drawerBtnClickHandler}
        open={props.isDrawerOpen}
    >
        <RaisedButton
            label="Close Menu"
            onClick={props.drawerBtnClickHandler}
        />
    </Drawer>

)
export default Sidebar