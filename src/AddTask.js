import React from "react";
class AddTask extends React.Component{
    constructor(){
        super();
        this.state={input:""};
    }
render(){
    
    return <div>
            <input
                type="text"
                placeholder="task here"
                value={this.state.input}
                onChange={(e) => {
                    const newInput = e.target.value;
                    this.setState({ input: newInput });
                }} />
            
            <br />
            
            <button onClick={() => {
                this.props.handleTaskAddition(this.state.input);
                this.setState.input="";

               
                // console.log(newTasks)
                }}>ADD TASK</button>
        </div>
}
}
export default AddTask;