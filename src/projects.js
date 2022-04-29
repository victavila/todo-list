const project = () => {
  let toDoList = [];
  const addToList = (task) => {
    toDoList.push(task);
  };
  return { toDoList, addToList };
};

export default project;
