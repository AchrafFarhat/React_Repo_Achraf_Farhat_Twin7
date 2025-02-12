import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

export default function TodoList({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { name: newTask, priority, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="text-center fw-bold">Todo List avec Priorités</h2>
      <h4 className="mt-3">Tâches :</h4>
      <ListGroup>
        {filteredTasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            className={`d-flex justify-content-between align-items-center ${task.completed ? "bg-success text-white" : ""}`}
          >
            <span className={task.completed ? "text-decoration-line-through" : "fw-bold"}>
              {task.name} - <span className="fw-normal">{task.priority}</span>
            </span>
            <div>
              <Button
                variant={task.completed ? "primary" : "primary"}
                onClick={() => toggleTask(index)}
              >
                {task.completed ? "Non terminé" : "Terminé"}
              </Button>
              <Button 
              variant="danger" className="ms-2" 
              onClick={() => deleteTask(index)}>
                Supprimer
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h5 className="mt-3">Total des tâches : {tasks.length}</h5>
      <h5 className="mt-2">Tâches terminées : {tasks.filter(t => t.completed).length}</h5>

      <Form className="mt-3">
        <Form.Control
          type="text"
          placeholder="Rechercher une tâche"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <div className="d-flex mt-3">
        <Form.Control
          type="text"
          placeholder="Nom de la tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="me-2"
        />
        <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </Form.Select>
        <Button className="ms-2" onClick={addTask}>Ajouter</Button>
      </div>
    </Container>
  );
}
