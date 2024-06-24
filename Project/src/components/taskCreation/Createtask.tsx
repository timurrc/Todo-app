import React, { useState } from "react";
import styles from "./Createtask.module.scss";
import newTask from "../../assets/newTask.svg";

interface Props {
  addNewTask: (task: {
    id: number;
    title: string;
    description: string;
    category: string;
  }) => void;
  tasks: { id: number; title: string }[];
}

const Createtask: React.FC<Props> = ({ addNewTask, tasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleAddTask = () => {
    addNewTask({
      id: tasks.length + 1,
      title: title,
      description: description,
      category: category,
    });
    setIsModalOpen(false);
    setTitle("");
    setDescription("");
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
              <textarea
                rows={4}
                cols={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="Gym">Gym</option>
                <option value="Job">Job</option>
              </select>
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
