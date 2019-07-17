import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import { bindActionCreators } from 'redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import '../App.css';

const status = [
    {
        value: 'To-Do',
        label: 'To-Do',
    },
    {
        value: 'Ongoing',
        label: 'Ongoing',
    },
    {
        value: 'Stalled',
        label: 'Stalled',
    },
    {
        value: 'Done',
        label: 'Done',
    },
];

const textFieldStyle = 'row centerText';//'row-xs-10 row-sm-10 row-lg-10';

class CreateTodo extends Component {
    constructor(props) {

        super(props)
        this.state = {
            todotext: '',
            formData: {
                title: '',
                description: '',
                dueDate: '',
                status: ''
            }
        }
    }

    handleChange = field => event => {
        let text = event.target.value;
        let temp = this.state.formData;
        temp[field] = text;
        this.setState({
            formData: temp
        });
        // console.log("New Form Data - ", this.state.formData);
        // console.log("field - ",field);
    };

    resetForm = () => {
        console.log("RESET!!");
        const formData = {
            title: '',
            description: '',
            dueDate: '',
            status: ''
        }
        this.setState({
            formData: formData
        })
    }

    handleSubmit = () => {
        let title = this.state.formData.title.length;
        let desc = this.state.formData.description.length;
        if (title && desc) {
            this.props.addTodo(this.state.formData);//(JSON.stringify(this.state.formData));
            this.resetForm();
            this.props.history.push('/table')
        }
        else if (!title && !desc)
            alert('Please fill title & description');
        else if (!title)
            alert('Please fill title');
        else
            alert('Please fill description');
    }

    render() {

        return (
            <div className="container">
                <div className='col'>
                    <div className='row-sm centerText' style={{ marginTop: '40px' }}>
                        <h1> Tasks to do </h1>
                    </div>
                    <div className={textFieldStyle}>
                        <TextField
                            id="standard-required"
                            value={this.state.formData.title}
                            required
                            label="Title"
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                    </div>
                    <div className={textFieldStyle}>
                        <TextField
                            id="standard-required"
                            value={this.state.formData.description}
                            required
                            label="Description"
                            onChange={this.handleChange('description')}
                            margin="normal"
                        />
                    </div>
                    <div className={textFieldStyle} style={{ paddingTop: '20px' }}>
                        <TextField
                            id="date"
                            label="Due Date"
                            value={this.state.formData.dueDate}
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChange('dueDate')}
                        />
                    </div>
                    <div className={textFieldStyle}>
                        <TextField
                            id="standard-select-status"
                            select
                            label="Status"
                            value={this.state.formData.status}
                            onChange={this.handleChange('status')}
                            helperText="Select Status here"
                            margin="normal"
                        >
                            {status.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <Button variant="contained" color="primary" onClick={this.resetForm} style={{ marginTop: "25px",marginLeft: "20vw", marginRight: "15px" }}> Clear </Button>
                    <Button variant="contained" color="primary"
                        onClick={this.handleSubmit}
                        style={{ marginTop: "25px"}}>Save</Button>
                    <div className={textFieldStyle} style={{ paddingTop: '20px' }} >
                        <Link to='/table'>Go to tasks</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)