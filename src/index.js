import createToDo from "./todos";
import { createProject, projects } from "./projects";
import UI from "./UI";

const inbox = createProject("Inbox");
inbox.activeOn();
projects.addToDefault(inbox);
const today = createProject("Today");
projects.addToDefault(today);
const thisWeek = createProject("This Week");
projects.addToDefault(thisWeek);

UI.form.addEventListener("submit", () => {
  const task = createToDo(UI.formObj());
  projects.projectsList.forEach((project) => {
    if (project.getActive() == true) {
      project.addToList(task);
      UI.createToDos(project.getName(), project.toDoList);
    }
  });
  projects.defaultList.forEach((project) => {
    if (project.getActive() == true) {
      project.addToList(task);
      UI.createToDos(project.getName(), project.toDoList);
    }
  });
});

UI.inbox.addEventListener("click", () => {
  resetActives();
  inbox.activeOn();
  UI.createToDos(inbox.getName(), inbox.toDoList);
});

UI.today.addEventListener("click", () => {
  resetActives();
  today.activeOn();
  UI.createToDos(today.getName(), today.toDoList);
});

UI.thisWeek.addEventListener("click", () => {
  resetActives();
  thisWeek.activeOn();
  UI.createToDos(thisWeek.getName(), thisWeek.toDoList);
});

const resetActives = () => {
  projects.projectsList.forEach((project) => {
    project.activeOff();
  });
  projects.defaultList.forEach((project) => {
    project.activeOff();
  });
};

UI.projectForm.addEventListener("submit", () => {
  const project = createProject(UI.projectTitle.value);
  resetActives();
  project.activeOn();
  projects.addToList(project);
  UI.createProjects(projects.projectsList);
  UI.clearToDos();
  UI.setTitle(project.getName());
});

UI.eventHandler();

document.addEventListener("click", (e) => {
  if (e.target && e.target.className === "uncheck") {
    projects.projectsList.forEach((project) => {
      if (project.getActive()) {
        console.log(project.getName());
      }
    });
    projects.defaultList.forEach((project) => {
      if (project.getActive()) {
        const name = project.getName();
        project.removeFromList(e.target.dataset.id);
        UI.createToDos(name, project.toDoList);
      }
    });
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "project") {
    resetActives();
    projects.projectsList.forEach((item) => {
      if (item.getName() === e.target.textContent) {
        item.activeOn();
        UI.createToDos(item.getName(), item.toDoList);
      }
    });
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "delete-btn") {
    projects.removeFromList(e.target.dataset.id);
    UI.createProjects(projects.projectsList);
    UI.clearToDos();
    resetActives();
    inbox.activeOn();
    UI.createToDos(inbox.getName(), inbox.toDoList);
    UI.setTitle("Inbox");
  }
});
