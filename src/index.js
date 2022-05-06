import createToDo from "./todos";
import { createProject, projects } from "./projects";
import userInterface from "./UI";

const inbox = createProject("inbox");

const today = createProject("today");

const thisWeek = createProject("thisWeek");

userInterface.form.addEventListener("submit", () => {
  const task = createToDo(userInterface.formObj());
  console.table(task);
});

userInterface.projectForm.addEventListener("submit", () => {
  const project = createProject(userInterface.projectTitle.value);
  projects.addToList(project);
  userInterface.createProjects(projects.projectsList);
});

userInterface.eventHandler();
