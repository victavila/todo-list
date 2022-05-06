const userInterface = (() => {
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
    const ul = document.createElement("ul");
    arr.forEach((project) => {
      const li = document.createElement("li");
      li.textContent = project.getName();
      ul.appendChild(li);
    });
    projectContainer.appendChild(ul);
  };

  return {
    formObj,
    eventHandler,
    createProjects,
    form,
    projectForm,
    projectTitle,
  };
})();

export default userInterface;
