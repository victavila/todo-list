const UI = (() => {
  const taskContainer = document.querySelector(".todos");
  const projectContainer = document.querySelector(".projects-container");
  const formContainer = document.querySelector(".form-container");
  const pjFormContainer = document.querySelector(".project-form-container");

  const form = document.querySelector(".form");
  const formTitle = form.elements["title"];
  const formDescription = form.elements["description"];
  const formDate = form.elements["due-date"];
  const formPriority = form.elements["priority"];

  const projectForm = document.querySelector(".project-form");
  const projectTitle = projectForm.elements["project"];

  const inbox = document.querySelector(".inbox");
  const today = document.querySelector(".today");
  const thisWeek = document.querySelector(".week");

  const addBtn = document.querySelector(".add");
  const cancelBtn = document.querySelector(".cancel");
  const projectBtn = document.querySelector(".project-btn");
  const pjCancelBtn = document.querySelector(".project-cancel");

  const title = document.querySelector(".title");

  const formObj = () => {
    const obj = {
      title: formTitle.value,
      description: formDescription.value,
      dueDate: formDate.value,
      priority: formPriority.value,
    };
    return obj;
  };

  const eventHandler = () => {
    addBtn.addEventListener("click", () => {
      formContainer.style.display = "block";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formContainer.style.display = "none";
      form.reset();
    });

    cancelBtn.addEventListener("click", () => {
      formContainer.style.display = "none";
      form.reset();
    });

    projectBtn.addEventListener("click", () => {
      pjFormContainer.style.display = "block";
    });

    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      pjFormContainer.style.display = "none";
      projectForm.reset();
    });

    pjCancelBtn.addEventListener("click", () => {
      pjFormContainer.style.display = "none";
      projectForm.reset();
    });
  };

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const createProjects = (arr) => {
    removeAllChildNodes(projectContainer);
    let i = 0;
    arr.forEach((project) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      const close = document.createElement("i");

      li.classList.add("project");
      button.classList.add("delete-btn");
      close.classList.add("fa", "fa-close", "close-icon");

      li.textContent = project.getName();
      button.setAttribute("data-id", i);

      button.appendChild(close);
      li.appendChild(button);
      projectContainer.appendChild(li);
      i++;
    });
  };

  const clearToDos = () => {
    removeAllChildNodes(taskContainer);
  };

  const createToDos = (header, arr) => {
    clearToDos();
    title.textContent = header;
    let i = 0;
    arr.forEach((toDo) => {
      const task = document.createElement("div");
      const leftContent = document.createElement("div");
      const rightContent = document.createElement("div");
      const check = document.createElement("button");
      const name = document.createElement("p");
      const date = document.createElement("p");

      check.setAttribute("data-id", i);

      name.textContent = toDo.title;
      date.textContent = toDo.dueDate;

      task.classList.add("task-row");
      check.classList.add("uncheck");
      leftContent.classList.add("left");
      rightContent.classList.add("right");

      leftContent.append(check, name);
      rightContent.appendChild(date);
      task.append(leftContent, rightContent);
      taskContainer.appendChild(task);
      i++;
    });
  };

  const setTitle = (name) => {
    title.textContent = name;
  };

  return {
    formObj,
    eventHandler,
    createProjects,
    clearToDos,
    createToDos,
    setTitle,
    form,
    projectForm,
    projectTitle,
    projectContainer,
    inbox,
    today,
    thisWeek,
  };
})();

export default UI;
