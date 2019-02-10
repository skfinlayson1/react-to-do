import React from 'react';

class AddToDo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {text: ''}
    }

    newText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSub = (e) => {
        e.preventDefault();
        if (!this.state.text === false) {
            this.props.newToDo(this.state.text);
        }
        this.setState({text: ''})
    }

 
    render() {
        return (
            <form className='formEntry' onSubmit={this.onSub}>
                <input className='input' type='text' value={this.state.text} placeholder='Got something new to do?' onChange={this.newText} />
                <input className='button' type='submit' />
            </form>
        );
    }
}

export default AddToDo;