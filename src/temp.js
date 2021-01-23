import React from 'react';
import logo from './logo.svg';
import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  // method will be used to add data to the list
  addItem(todoValue){
    if (todoValue !== "") {
      const NewItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      // get the current values from the state's 'list' value and add it to the local 'list's array.
      const list = [...this.state.list]
      // newitem gets add to the local list
      list.push(NewItem);
      // update the states list and reset the state's newItem to ""
      // we didnt have to put 'list: list' - es7 is intelligent enough to figure it out as long as they have same name
      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id){
    // get a copy of the state's list
    const list = [...this.state.list];
    // will create an updated list which will not have the item that matches the id that was given to the method
    const updatelist = list.filter(item => item.id != id)
    // update the setstate with the new list
    this.setState({
      list: updatelist
    });
  }

  updateInput(input){
    this.setState({newItem: input});
  }

  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo"/>
        <h1 className="app-title">React ToDo App</h1>
        <div className="Container">
          Add an Item...
          <br/>
          <input type="text" className="input-text" placeholder="Write a todo"
            required value={this.state.newItem} onChange={e => this.updateInput(e.target.value)}
          />
          <button className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add todo</button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input type="checkbox"
                    name="isDone"
                    checked={item.isDone}
                    onChange={()=>{}}
                    />
                    {item.value}
                    <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                  </li>
                )
              })}
              <li>
                <input type="checkbox" name="" id=""/>
                Record youtube videos
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;