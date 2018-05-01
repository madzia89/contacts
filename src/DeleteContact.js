import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'



const DeleteContact = ({name, deleteContact}) => (
    <MenuItem
        primaryText={name}
        rightIcon={
            <Delete
                onClick={deleteContact}
            />
        }
    />
)

export default DeleteContact