import React from 'react';

class ToDoList extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = '';
    }

    render() {
        return (
            <li className='thingToDo'>
                <input className='checkBox' type='checkbox' defaultChecked={this.props.done} onChange={this.props.checkedBox} />
                <span>{this.props.desc}<span className='remove' onClick={() => this.props.remove(this.props.desc)}>X</span></span>
            </li>
        )
    }
}

export default ToDoList;