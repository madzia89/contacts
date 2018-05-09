import React from 'react'
import Styles from './Styles'
import List from './List'
import Controls from './Controls'


class Add extends React.Component {

    state = {
        contacts: [
            {name: 'Benjamin Morales', email: 'benjamin.morales22@example.com', phone: '8188291865', uid: 9827},
            {name: 'Clara Matthews', email: 'clara.matthews35@example.com', phone: '8802174620', uid: 981823}
        ],
        filterText: '',
        newContact: ''

    }
    componentWillMount(){
        localStorage.getItem('contacts') && this.setState({
            contacts: JSON.parse(localStorage.getItem('contacts'))
        })
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
            phone: this.state.newContactPhone,
            email: this.state.newContactEmail,
            uid: Date.now()
        }
        if ((newContact.name !== undefined) && (newContact.email !== undefined) && (newContact.phone !== undefined)) {
            const newContacts = this.state.contacts.concat(newContact)
            this.setState({
                contacts: newContacts,
                newContact: undefined,
                newContactPhone: undefined,
                newContactEmail: undefined,
            })
            this.clearTextFields()
        } else {
            alert('fill required fields')
        }
    }

    clearTextFields = () => {
        document.getElementById('nameField').value = ''
        document.getElementById('phoneField').value = ''
        document.getElementById('emailField').value = ''
    }

    newContactNameF = (event, name) => {
        this.setState({
            newContact: name
        })
    }
    newContactPhoneF = (event, phone) => {
        this.setState({
            newContactPhone: phone
        })
    }
    newContactEmailF = (event, email) => {
        this.setState({
            newContactEmail: email,
        })
    }

    newFilterChangeHandler = (event, newValue) => {
        this.setState({
            filterText: newValue
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('contacts', JSON.stringify(nextState.contacts))
        localStorage.setItem('contactsDate', Date.now())
    }
    render() {
        return (
            <Styles>
                <Controls
                    onClickHandler={this.addContact}
                    onChangeName={this.newContactNameF}
                    onChangePhone={this.newContactPhoneF}
                    onChangeEmail={this.newContactEmailF}
                    onFilterChangeHandler={this.newFilterChangeHandler}
                    filtrContactValue={this.state.filterText}
                />

                <List
                    deleteContactFunction={this.deleteContact}
                    contactsList={this.state.contacts}
                    filterName={this.state.filterText}
                />
            </Styles>
        )
    }

}

export default Add