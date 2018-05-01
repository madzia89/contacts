import React from 'react'
import Paper from 'material-ui/Paper'
import List from './List'
import Controls from './Controls'


class Add extends React.Component {
    state = {
        contacts: [
            {name: 'umyj naczynia ', uid: 82664478218},
            {name: 'biegaj ', uid: 82686478218}
        ],
        filterText: '',
        newContact: ''
    }

    deleteContact = (contactUid) => {
        const newContacts = this.state.contacts.filter(contact => contactUid !== contact.uid)
        this.setState({
            contacts: newContacts
        })
    }

    addContact = () => {
        const newContact = {
            name: this.state.newContact,
            uid: Date.now()
        }
        const newContacts = this.state.contacts.concat(newContact)
        this.setState({
            contacts: newContacts
        })
    }

    newContactChangeHandler = (event, newValue) => {
        this.setState({
            newContact: newValue
        })
    }
    newFilterChangeHandler = (event, newValue) => {
        this.setState({
            filterText: newValue
        })
    }

    render() {
        return (
            <Paper>
                <Controls
                    onClickHandler={this.addContact}
                    onChangeHandler={this.newContactChangeHandler}
                    newContactValue={this.state.newContact}
                    onFilterChangeHandler={this.newFilterChangeHandler}
                    filtrContactValue={this.state.filterText}

                />

                <List
                    deleteContactFunction={this.deleteContact}
                    contactsList={this.state.contacts}
                    filterName={this.state.filterText}
                />
            </Paper>
        )
    }
}

export default Add