import { createProject, projects, createToDo } from "./todos";
import UI from "./UI";

const inbox = createProject("Inbox");
inbox.activeOn();
projects.addToList(inbox);
const today = createProject("Today");
projects.addToList(today);
const thisWeek = createProject("This Week");
projects.addToList(thisWeek);

UI.form.addEventListener("submit", () => {
  const task = createToDo(UI.formObj());
  projects.projectsList.forEach((project) => {
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
};

UI.projectForm.addEventListener("submit", () => {
  const project = createProject(UI.projectTitle.value);
  resetActives();
  project.activeOn();
  projects.addToList(project);
  UI.createProjects(
    [...projects.projectsList].splice(3, projects.projectsList.length - 3)
  );
  UI.clearToDos();
  UI.setTitle(project.getName());
});

UI.eventHandler();

document.addEventListener("click", (e) => {
  if (e.target.className === "trash") {
    projects.projectsList.forEach((project) => {
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
    UI.createProjects(
      [...projects.projectsList].splice(3, projects.projectsList.length - 3)
    );
    UI.clearToDos();
    resetActives();
    inbox.activeOn();
    UI.createToDos(inbox.getName(), inbox.toDoList);
    UI.setTitle("Inbox");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "details") {
    projects.projectsList.forEach((project) => {
      if (project.getActive()) {
        const task = project.toDoList[e.target.dataset.id];
        UI.createTaskCard(task);
      }
    });
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "close-btn") {
    UI.hideCard();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "box") {
    const icon = e.target.childNodes[0];
    const name = e.target.parentNode.childNodes[1];
    if (icon.className === "fa fa-square-o") {
      name.classList.add("strike");
      icon.classList.remove("fa-square-o");
      icon.classList.add("fa-check-square-o");
    } else if (e.target.childNodes[0].className === "fa fa-check-square-o") {
      name.classList.remove("strike");
      icon.classList.remove("fa-check-square-o");
      icon.classList.add("fa-square-o");
    }
  }
});
