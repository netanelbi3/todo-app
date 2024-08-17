import React from "react";
import TaskItem from "./TaskItem";
const TaskList = ({ tasks, deleteTask, editTask, addInline }) => {
  return (
    <div>
     
      {tasks?.map((task) => (
        <TaskItem
          key={task._id}
          _id={task._id}
          title={task.title}
          description={task.description}
          expirationDate={task.expirationDate}
          priority={task.priority}
          deleteTask={deleteTask}
          editTask={editTask}
          isCompleted={task.isCompleted}
          addInline={addInline}
        />
      ))}
    </div>
  );
};

export default TaskList;
