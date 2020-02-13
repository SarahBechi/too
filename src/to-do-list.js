import React, { Component } from 'react';
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ "val": "exemple", "txt": "none", "name": "compelete" }],
            inputValue: "",



        }


    }

    changeHandler = event => {

        this.setState({ inputValue: event.target.value });
    }


    addList = () => {
        this.setState({
            list: [...this.state.list, { "val": this.state.inputValue, "txt": "none", "name": "compelete" }]

        });

    }


    removeItem = (i) => {
        const removeIt = this.state.list.slice();
        removeIt.splice(i, 1);
        this.setState({
            list: removeIt
        })
    }

    modifyItem = (index) => {
        const newList = this.state.list.filter((item, i) => {
            if (index === i) { return item.txt = "line-through" }
            else { return item.txt }
        }

        )


        this.setState({ list: newList })
        const nList = this.state.list.filter((item, i) => {
            if (index === i) { return item.name = "undo" }
            else { return item.name }
        }

        )
        this.setState({ list: nList })
    }



    render() {

        return (<div>

            <div className="to-do-app">
                <span className="to-do">To-Do App!</span>
                <span className="new-element">Add New To-Do</span>
                <input type="text" className="enter-task" onChange={this.changeHandler}></input>
                <span className="add-btn" onClick={this.addList} >Add </span>
            </div>
            <div className="get-work-done">
                <span className="get-work-done">Let's get some work done!</span>
                <hr className="ligne"></hr>
                <div className="tasks">
                    <div className="items_list">
                        {this.state.list.map((item, i) => <div key={i}>

                            <span className="compeleteBtn" onClick={this.modifyItem.bind(this, i)} >{item.name}</span>
                            <span className="deleteBtn" onClick={this.removeItem.bind(this, i)}>Delete</span>
                            <span className="theInput" style={{ textDecoration: item.txt }} >{item.val}</span>
                        </div>)}
                    </div>
                </div>



            </div>


        </div>

        );
    }
}

export default ToDoList;

