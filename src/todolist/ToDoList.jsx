import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Suplex", "Repeat"]);
    const [newTask, setNewTask] = useState("");
    function addTask() {
        setTasks([...tasks, newTask]);
        setNewTask("");
    }
    function removeTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }
    return (
        <div className="todo-list-ctn">
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="add-btn" onClick={addTask}>
                    Add
                </button>
                <h4>Your tasks {newTask}</h4>
            </div>

            <ul>
                {tasks.map((tasks, index) => (
                    <li key={index}>
                        {/* <input type="checkbox" onChange={handlePriority} /> */}
                        {tasks}
                        <button className="remove-btn" onClick={() => removeTask(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList
