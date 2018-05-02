import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'


const Controls = (props) => (
    <Paper>
        <TextField
            onChange={props.onChangeName}
            value={props.newContactValue}
            name={'new-contact'}
            placeholder={'Add your name'}
            fullWidth={true}
        />
        <TextField
            onChange={props.onChangePhone}
            value={props.newContactPhone}
            name={'new-contact'}
            placeholder={'Add phone number'}
            fullWidth={true}
        />
        <TextField
            onChange={props.onChangeEmail}
            value={props.newContactEmail}
            name={'new-contact'}
            placeholder={'Add e-mail address'}
            fullWidth={true}
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
    </Paper>
)

export default Controls