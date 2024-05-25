
import Tag from "./Tag.jsx";
import"./TaskForm.css";
import {useState} from "react";

const TaskForm = () => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo"
    })

    const handleChange = e => {
        const {name, value} = e.target;
        console.log(name, value);


    }
    

    return (
        <header className="app_header">
            <form onChange={handleChange}>
                <input type="text" 
                    className="task_input"
                    placeholder="Enter your task"
                    name="task"
                    
                    />

                <div className="task_form_botton_line">
                    <div>
                    <Tag tagName = "HTML"/>
                    <Tag tagName = "CSS"/>
                    <Tag tagName = "JavaScript"/>
                    <Tag tagName = "React"/>
               
                   
                    
                    </div>
                   <div>
                    <select className="task_status" name="status">
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="Done">Done</option>
                    </select> 
                    <button type="submit"
                            className="task_submit">+ Add Task</button>
                   </div>
                   
                   
                </div>
            </form>
      </header>
    )
}

export default TaskForm;