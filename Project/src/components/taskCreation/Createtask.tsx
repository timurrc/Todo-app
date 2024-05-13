import React, { useState } from "react";
import styles from "./Createtask.module.scss";
import newTask from "../../assets/newTask.svg";

interface Props {
  addNewTask: (task: { id: number; title: string }) => void;
  tasks: { id: number; title: string }[];
}

const Createtask: React.FC<Props> = ({ addNewTask, tasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    addNewTask({ id: tasks.length + 1, title: title });
    setIsModalOpen(false);
    setTitle("");
  };

  return (
    <>
      <div className={styles.createTask}>
        <button onClick={() => setIsModalOpen(true)}>
          <img src={newTask} alt="New Task" />
        </button>
        {isModalOpen && (
          <div className={styles.modal}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Createtask;
