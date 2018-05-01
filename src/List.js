import React from 'react'
import DeleteContact from './DeleteContact'
import Paper from 'material-ui/Paper'

const List = ({contactsList, deleteContactFunction, filterName}) => (
    <Paper>
        {
            contactsList
                .filter(contact => (contact.name.toLowerCase().indexOf(filterName.toLowerCase())) !== -1)
                .map(contact => (
                    <DeleteContact
                        name={contact.name}
                        key={contact.uid}
                        deleteContact={() => deleteContactFunction(contact.uid)}
                    />
                ))
        }
    </Paper>
)

export default List