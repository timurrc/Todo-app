import React, { FC, useState } from "react";
import styles from "./Home.module.scss";
import Card from "../../components/Info/Card";
import Createtask from "../../components/taskCreation/Createtask";

interface Task {
  id: number;
  title: string;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Take pills",
  },
  {
    id: 2,
    title: "Go to university",
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
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(task.id)}
              />
              {task.title}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.newTodo}>
        <h2>Create task</h2>
        <div>
          <Createtask addNewTask={addNewTask} tasks={tasks} />
        </div>
      </section>
    </div>
  );
};

export default Home;
