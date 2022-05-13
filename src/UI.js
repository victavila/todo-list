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

  const cardContainer = document.querySelector(".card-container");
  const cardTitle = document.querySelector(".card-title");
  const cardDescription = document.querySelector(".card-description");
  const cardPriority = document.querySelector(".card-priority");
  const cardDate = document.querySelector(".card-date");

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
    let i = 3;
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
      const checkIcon = document.createElement("i");
      const name = document.createElement("p");
      const detailsBtn = document.createElement("button");
      const date = document.createElement("p");
      const trashBtn = document.createElement("button");
      const trashIcon = document.createElement("i");

      trashBtn.setAttribute("data-id", i);
      detailsBtn.setAttribute("data-id", i);

      name.textContent = toDo.title;
      detailsBtn.textContent = "Details";
      date.textContent = toDo.dueDate;

      task.classList.add("task-row");
      check.classList.add("box");
      detailsBtn.classList.add("details");
      leftContent.classList.add("left");
      rightContent.classList.add("right");
      trashBtn.classList.add("trash");

      checkIcon.classList.add("fa", "fa-square-o");
      trashIcon.classList.add("fa", "fa-trash");

      check.appendChild(checkIcon);
      trashBtn.appendChild(trashIcon);
      leftContent.append(check, name);
      rightContent.append(detailsBtn, date, trashBtn);
      task.append(leftContent, rightContent);
      taskContainer.appendChild(task);
      i++;
    });
  };

  const createTaskCard = (obj) => {
    cardTitle.textContent = obj.title;
    cardDescription.textContent = `Description: ${obj.description}`;
    cardPriority.textContent = `Priority: ${obj.priority}`;
    cardDate.textContent = `Due Date: ${obj.dueDate}`;
    cardContainer.classList.remove("hidden");
  };

  const hideCard = () => {
    cardContainer.classList.add("hidden");
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
    createTaskCard,
    hideCard,
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
