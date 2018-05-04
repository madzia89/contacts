import React from 'react'
import DeleteContact from './DeleteContact'
import Styles from './Styles'

const List = ({contactsList, deleteContactFunction, filterName}) => (
    <Styles>
        {
            contactsList
                .filter(contact =>
                    (contact.name.toLowerCase().indexOf(filterName.toLowerCase()) &&
                    (contact.phone.indexOf(filterName.toLowerCase())) &&
                    (contact.email.toLowerCase().indexOf(filterName.toLowerCase()))) !== -1)
                .map(contact => (
                    <DeleteContact
                        name={contact.name}
                        phone={contact.phone}
                        email={contact.email}
                        key={contact.uid}
                        deleteContact={() => deleteContactFunction(contact.uid)}
                    />
                ))
        }
    </Styles>
)

export default List