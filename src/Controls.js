import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Styles from './Styles'


const Controls = (props) => (
    <Styles>
        <TextField
            onChange={props.onChangeName}
            value={props.newContact}
            name={'new-contactName'}
            placeholder={'Add name*'}
            fullWidth={true}
            id={'nameField'}
        />
        <TextField
            onChange={props.onChangePhone}
            value={props.newContactPhone}
            name={'new-contactPhone'}
            placeholder={'Add phone number*'}
            fullWidth={true}
            id={'phoneField'}
        />
        <TextField
            onChange={props.onChangeEmail}
            value={props.newContactEmail}
            name={'new-contactEmail'}
            placeholder={'Add e-mail address*'}
            fullWidth={true}
            id={'emailField'}
        />
        <RaisedButton
            onClick={props.onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />
        <TextField
            onChange={props.onFilterChangeHandler}
            value={props.filterContactValue}
            name={'filter-contacts'}
            placeholder={'Filter contact'}
            fullWidth={true}
        />
    </Styles>
)

export default Controls