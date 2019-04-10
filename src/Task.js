import React from "react";
class Task extends React.Component{
    render(){
        console.log(this.props, "PROPS");
        return <li key={this.props.index}><h2>{this.props.text}</h2><button onClick={()=>{
            this.props.handleTaskDeletion(this.props.index);
            console.log(this.props.index,"DELETS POS from TASK.JS");
            }}>DELETE TASK</button></li>
          ;
    }
}
export default Task;