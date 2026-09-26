import { useReducer, useState, type FormEvent } from "react";
import { LIGHT_THEME } from "../constants/theme";
import { useTheme } from "../context/ThemeContext";
import { taskReducer } from "../reducers/taskReducer";
import styles from "./TaskManager.module.css";

export default function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [taskText, setTaskText] = useState("");
  const { theme } = useTheme();

  const canAddTask = taskText.trim().length > 0;
  const themeClass =
    theme === LIGHT_THEME ? styles.lightTheme : styles.darkTheme;

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedText = taskText.trim();
    if (trimmedText.length === 0) {
      return;
    }

    dispatch({ type: "add", payload: trimmedText });
    setTaskText("");
  }

  return (
    <section className={`${styles.taskManager} ${themeClass}`}>
      <h2 className={styles.heading}>Task Manager</h2>

      <form className={styles.taskForm} onSubmit={handleAddTask}>
        <input
          aria-label="New task"
          className={styles.taskInput}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="Enter a task"
          type="text"
          value={taskText}
        />
        <button
          className={styles.actionButton}
          disabled={!canAddTask}
          type="submit"
        >
          Add Task
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className={styles.emptyState}>No tasks yet.</p>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li className={styles.taskItem} key={task.id}>
              <span className={styles.taskText}>{task.text}</span>
              <button
                className={styles.actionButton}
                onClick={() =>
                  dispatch({ type: "remove", payload: task.id })
                }
                type="button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}