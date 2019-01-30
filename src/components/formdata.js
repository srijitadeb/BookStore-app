import React from 'react';
import {render} from 'react-dom';

export class NameForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleChangeName(){
        this.setState(
            {
                value:event.target.value
            }
        )
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChangeName} />
                </label>
                <label>Address:
                    <input type="text" name="address" value={this.state.value} onChange={this.handleChangeAddress} />
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}

