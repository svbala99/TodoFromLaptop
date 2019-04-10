import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
import './App.css';

class App extends React.Component {
  constructor() {
    super(); //call super class because we overwrite child class constructor
    this.state = { tasks: ["first task is here", "second one", "third is also here"]};
  }

handleTaskAddition = (input)=>{
  let newTasks = [...this.state.tasks];
  newTasks.push(input);

  console.log(newTasks);

  this.setState({tasks:newTasks, input:""})
}



  handleTaskDeletion= (deleteIndex)=>{
        
    console.log(deleteIndex,"DELETE INDEX");
    let newTasks = [...this.state.tasks];
    newTasks.splice(deleteIndex,1);
    this.setState({tasks:newTasks})

    console.log(newTasks)

  }
  render= ()=> {
    console.log("Render is called here");
    return (
      <div>
        
        <AddTask handleTaskAddition = {this.handleTaskAddition}/>
        
        <ul>
          {
            this.state.tasks.map((task, index) => {
              return  <Task key = {index} index={index} text={task} handleTaskDeletion={this.handleTaskDeletion}/> 
              

            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
