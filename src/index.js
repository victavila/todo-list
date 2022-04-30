import todo from "./todos";
import project from "./projects";

const inbox = project();
const task1 = todo(
  "Clean apartment",
  "Some description for the task",
  "date",
  "yes"
);
const task2 = todo("Walk dog", "Take the dog for a walk", "date", "no");
inbox.addToList(task1);
inbox.addToList(task2);
console.table(inbox.toDoList);
