const createToDo = (obj) => {
  return Object.assign({}, obj);
};

const createProject = (name) => {
  let toDoList = [];

  let active = false;

  const activeOn = () => {
    active = true;
  };

  const activeOff = () => {
    active = false;
  };

  const getActive = () => {
    return active;
  };

  const getName = () => {
    return name;
  };

  const addToList = (task) => {
    toDoList.push(task);
  };

  const removeFromList = (id) => {
    if (id > -1) {
      toDoList.splice(id, 1);
    }
  };

  return {
    toDoList,
    activeOn,
    activeOff,
    getActive,
    getName,
    addToList,
    removeFromList,
  };
};

const projects = (() => {
  let projectsList = [];

  let defaultList = [];

  const addToDefault = (project) => {
    defaultList.push(project);
  };

  const addToList = (project) => {
    projectsList.push(project);
  };

  const removeFromList = (id) => {
    if (id > -1) {
      projectsList.splice(id, 1);
    }
  };

  return { projectsList, defaultList, addToDefault, addToList, removeFromList };
})();

export { createToDo, createProject, projects };
