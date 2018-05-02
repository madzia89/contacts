import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'

const divStyle = {
    fontWeight: 'bold'
}

const DeleteContact = ({name, lastName, phone, email, deleteContact}) => (
    <MenuItem
        primaryText={
            <div>
                <div style={divStyle}>
                    {name} {lastName}
                </div>
                <div>
                    {phone}, {email}
                </div>
            </div>
        }

        rightIcon={
            <Delete
                onClick={deleteContact}
            />
        }
    />
)

export default DeleteContact