import React, { FC, useState } from "react";
import styles from "./Home.module.scss";
import Card from "../../components/Info/Card";
import Createtask from "../../components/taskCreation/Createtask";

interface Task {
  id: number;
  title: string;
  category: string;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Take pills",
    category: "Daily",
  },
  {
    id: 2,
    title: "Go to university",
    category: "Work",
  },
];

const Home: FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addNewTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleCheckboxChange = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tasks}>
        <Card title={"Total tasks"} count={tasks.length} />
        <Card title={"Projects"} count={0} />
      </div>
      <section className={styles.todos}>
        <h2>Recent tasks</h2>
        <div className={styles.recentTasks}>
          {tasks.map((task: Task) => (
            <div className={styles.recentTasksElements} key={task.id}>
              <div
                style={{ display: "flex", gap: "13px", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <h4>{task.title}</h4>
              </div>
              <p style={{ opacity: "30%" }}>{task.category}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.newTodo}>
        <h2>Create task</h2>

        <Createtask addNewTask={addNewTask} tasks={tasks} />
      </section>
    </div>
  );
};

export default Home;
