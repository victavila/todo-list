const createProject = (name) => {
  let toDoList = [];

  const getName = () => {
    return name;
  };

  const addToList = (task) => {
    toDoList.push(task);
  };

  const removeFromList = (task) => {
    let index = toDoList.indexOf(task);
    if (index > -1) {
      toDoList.splice(index, 1);
    }
  };

  return { toDoList, getName, addToList, removeFromList };
};

const projects = (() => {
  let projectsList = [];

  const addToList = (project) => {
    projectsList.push(project);
  };

  const removeFromList = (project) => {
    let index = projectsList.indexOf(project);
    if (index > -1) {
      projectsList.splice(index, 1);
    }
  };

  return { projectsList, addToList, removeFromList };
})();

export { createProject, projects };
