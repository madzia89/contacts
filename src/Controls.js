import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'


const Controls = (props) => (
    <Paper>
        <TextField
            onChange={props.onChangeHandler}
            value={props.newContactValue}
            name={'new-contact'}
            placeholder={'Add new contact'}
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
            value={props.filtrContactValue}
            name={'filter-contacts'}
            placeholder={'Filter contact'}
            fullWidth={true}
        />
    </Paper>
)

export default Controls