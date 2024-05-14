import React, { useState } from "react";
import styles from "./Createtask.module.scss";
import newTask from "../../assets/newTask.svg";

interface Props {
  addNewTask: (task: { id: number; title: string; category: string }) => void;
  tasks: { id: number; title: string }[];
}

const Createtask: React.FC<Props> = ({ addNewTask, tasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleAddTask = () => {
    addNewTask({ id: tasks.length + 1, title: title, category: category });
    setIsModalOpen(false);
    setTitle("");
    setCategory("");
  };

  return (
    <>
      <div className={styles.createTask}>
        <button onClick={() => setIsModalOpen(true)}>
          <img src={newTask} alt="New Task" />
        </button>
        {isModalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalInputs}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
              />
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Choose task category"
              />
            </div>

            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Createtask;
