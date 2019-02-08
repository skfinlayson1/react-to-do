import React from 'react';

class ToDoList extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = '';
    }

    render() {
        return (
            <li className='thingToDo'>
                <input className='checkBox' type='checkbox' checked={this.props.done} />
                <span>{this.props.desc}</span>
            </li>
        )
    }
}

export default ToDoList;