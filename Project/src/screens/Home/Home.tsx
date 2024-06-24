import React, { FC, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Card from "../../components/Info/Card";
import Createtask from "../../components/taskCreation/Createtask";

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
}

const initialTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

const Home: FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addNewTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const handleCheckboxChange = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
              <div>
                <p>{task.description}</p>
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
