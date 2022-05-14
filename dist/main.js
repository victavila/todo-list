/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UI = (() => {\n  const taskContainer = document.querySelector(\".todos\");\n  const projectContainer = document.querySelector(\".projects-container\");\n  const formContainer = document.querySelector(\".form-container\");\n  const pjFormContainer = document.querySelector(\".project-form-container\");\n\n  const form = document.querySelector(\".form\");\n  const formTitle = form.elements[\"title\"];\n  const formDescription = form.elements[\"description\"];\n  const formDate = form.elements[\"due-date\"];\n  const formPriority = form.elements[\"priority\"];\n\n  const projectForm = document.querySelector(\".project-form\");\n  const projectTitle = projectForm.elements[\"project\"];\n\n  const cardContainer = document.querySelector(\".card-container\");\n  const cardTitle = document.querySelector(\".card-title\");\n  const cardDescription = document.querySelector(\".card-description\");\n  const cardPriority = document.querySelector(\".card-priority\");\n  const cardDate = document.querySelector(\".card-date\");\n\n  const inbox = document.querySelector(\".inbox\");\n  const today = document.querySelector(\".today\");\n  const thisWeek = document.querySelector(\".week\");\n\n  const addBtn = document.querySelector(\".add\");\n  const cancelBtn = document.querySelector(\".cancel\");\n  const projectBtn = document.querySelector(\".project-btn\");\n  const pjCancelBtn = document.querySelector(\".project-cancel\");\n\n  const title = document.querySelector(\".title\");\n\n  const formObj = () => {\n    const obj = {\n      title: formTitle.value,\n      description: formDescription.value,\n      dueDate: formDate.value,\n      priority: formPriority.value,\n    };\n    return obj;\n  };\n\n  const eventHandler = () => {\n    addBtn.addEventListener(\"click\", () => {\n      formContainer.style.display = \"block\";\n    });\n\n    form.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      formContainer.style.display = \"none\";\n      form.reset();\n    });\n\n    cancelBtn.addEventListener(\"click\", () => {\n      formContainer.style.display = \"none\";\n      form.reset();\n    });\n\n    projectBtn.addEventListener(\"click\", () => {\n      pjFormContainer.style.display = \"block\";\n    });\n\n    projectForm.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      pjFormContainer.style.display = \"none\";\n      projectForm.reset();\n    });\n\n    pjCancelBtn.addEventListener(\"click\", () => {\n      pjFormContainer.style.display = \"none\";\n      projectForm.reset();\n    });\n  };\n\n  function removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  }\n\n  const createProjects = (arr) => {\n    removeAllChildNodes(projectContainer);\n    let i = 3;\n    arr.forEach((project) => {\n      const li = document.createElement(\"li\");\n      const button = document.createElement(\"button\");\n      const close = document.createElement(\"i\");\n\n      li.classList.add(\"project\");\n      button.classList.add(\"delete-btn\");\n      close.classList.add(\"fa\", \"fa-close\", \"close-icon\");\n\n      li.textContent = project.getName();\n      button.setAttribute(\"data-id\", i);\n\n      button.appendChild(close);\n      li.appendChild(button);\n      projectContainer.appendChild(li);\n      i++;\n    });\n  };\n\n  const clearToDos = () => {\n    removeAllChildNodes(taskContainer);\n  };\n\n  const createToDos = (header, arr) => {\n    clearToDos();\n    title.textContent = header;\n    let i = 0;\n    arr.forEach((toDo) => {\n      const task = document.createElement(\"div\");\n      const leftContent = document.createElement(\"div\");\n      const rightContent = document.createElement(\"div\");\n      const check = document.createElement(\"button\");\n      const checkIcon = document.createElement(\"i\");\n      const name = document.createElement(\"p\");\n      const detailsBtn = document.createElement(\"button\");\n      const date = document.createElement(\"p\");\n      const trashBtn = document.createElement(\"button\");\n      const trashIcon = document.createElement(\"i\");\n\n      trashBtn.setAttribute(\"data-id\", i);\n      detailsBtn.setAttribute(\"data-id\", i);\n\n      name.textContent = toDo.title;\n      detailsBtn.textContent = \"Details\";\n      date.textContent = toDo.dueDate;\n\n      task.classList.add(\"task-row\");\n      check.classList.add(\"box\");\n      detailsBtn.classList.add(\"details\");\n      leftContent.classList.add(\"left\");\n      rightContent.classList.add(\"right\");\n      trashBtn.classList.add(\"trash\");\n\n      checkIcon.classList.add(\"fa\", \"fa-square-o\");\n      trashIcon.classList.add(\"fa\", \"fa-trash\");\n\n      check.appendChild(checkIcon);\n      trashBtn.appendChild(trashIcon);\n      leftContent.append(check, name);\n      rightContent.append(detailsBtn, date, trashBtn);\n      task.append(leftContent, rightContent);\n      taskContainer.appendChild(task);\n\n      if (toDo.priority === \"Low\") {\n        task.classList.add(\"low\");\n      } else if (toDo.priority === \"Medium\") {\n        task.classList.add(\"medium\");\n      } else if (toDo.priority === \"High\") {\n        task.classList.add(\"high\");\n      }\n\n      i++;\n    });\n  };\n\n  const createTaskCard = (obj) => {\n    cardTitle.textContent = obj.title;\n    cardDescription.textContent = `Description: ${obj.description}`;\n    cardPriority.textContent = `Priority: ${obj.priority}`;\n    cardDate.textContent = `Due Date: ${obj.dueDate}`;\n    cardContainer.classList.remove(\"hidden\");\n  };\n\n  const hideCard = () => {\n    cardContainer.classList.add(\"hidden\");\n  };\n\n  const setTitle = (name) => {\n    title.textContent = name;\n  };\n\n  return {\n    formObj,\n    eventHandler,\n    createProjects,\n    clearToDos,\n    createToDos,\n    createTaskCard,\n    hideCard,\n    setTitle,\n    form,\n    projectForm,\n    projectTitle,\n    projectContainer,\n    inbox,\n    today,\n    thisWeek,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n\nconst inbox = (0,_todos__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Inbox\");\ninbox.activeOn();\n_todos__WEBPACK_IMPORTED_MODULE_0__.projects.addToList(inbox);\nconst today = (0,_todos__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Today\");\n_todos__WEBPACK_IMPORTED_MODULE_0__.projects.addToList(today);\nconst thisWeek = (0,_todos__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"This Week\");\n_todos__WEBPACK_IMPORTED_MODULE_0__.projects.addToList(thisWeek);\n\n_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form.addEventListener(\"submit\", () => {\n  const task = (0,_todos__WEBPACK_IMPORTED_MODULE_0__.createToDo)(_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].formObj());\n  _todos__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList.forEach((project) => {\n    if (project.getActive() == true) {\n      project.addToList(task);\n      _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createToDos(project.getName(), project.toDoList);\n    }\n  });\n});\n\n_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].inbox.addEventListener(\"click\", () => {\n  resetActives();\n  inbox.activeOn();\n  _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createToDos(inbox.getName(), inbox.toDoList);\n});\n\n_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].today.addEventListener(\"click\", () => {\n  resetActives();\n  today.activeOn();\n  _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createToDos(today.getName(), today.toDoList);\n});\n\n_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].thisWeek.addEventListener(\"click\", () => {\n  resetActives();\n  thisWeek.activeOn();\n  _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createToDos(thisWeek.getName(), thisWeek.toDoList);\n});\n\nconst resetActives = () => {\n  _todos__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList.forEach((project) => {\n    project.activeOff();\n  });\n};\n\n_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectForm.addEventListener(\"submit\", () => {\n  const project = (0,_todos__WEBPACK_IMPORTED_MODULE_0__.createProject)(_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectTitle.value);\n  resetActives();\n  project.activeOn();\n  _todos__WEBPACK_IMPORTED_MODULE_0__.projects.addToList(project);\n  _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createProjects(\n    [..._todos__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList].splice(3, _todos__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList.length - 3)\n  );\n  _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearToDos();\n  _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTitle(project.getName());\n});\n\n_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eventHandler();\n\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.className === \"trash\") {\n    _todos__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList.forEach((project) => {\n      if (project.getActive()) {\n        const name = project.getName();\n        project.removeFromList(e.target.dataset.id);\n        _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createToDos(name, project.toDoList);\n      }\n    });\n  }\n});\n\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.className === \"project\") {\n    resetActives();\n    _todos__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList.forEach((item) => {\n      if (item.getName() === e.target.textContent) {\n        item.activeOn();\n        _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createToDos(item.getName(), item.toDoList);\n      }\n    });\n  }\n});\n\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.className === \"delete-btn\") {\n    _todos__WEBPACK_IMPORTED_MODULE_0__.projects.removeFromList(e.target.dataset.id);\n    _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createProjects(\n      [..._todos__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList].splice(3, _todos__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList.length - 3)\n    );\n    _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearToDos();\n    resetActives();\n    inbox.activeOn();\n    _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createToDos(inbox.getName(), inbox.toDoList);\n    _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTitle(\"Inbox\");\n  }\n});\n\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.className === \"details\") {\n    _todos__WEBPACK_IMPORTED_MODULE_0__.projects.projectsList.forEach((project) => {\n      if (project.getActive()) {\n        const task = project.toDoList[e.target.dataset.id];\n        _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTaskCard(task);\n      }\n    });\n  }\n});\n\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.className === \"close-btn\") {\n    _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hideCard();\n  }\n});\n\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.className === \"box\") {\n    const icon = e.target.childNodes[0];\n    const name = e.target.parentNode.childNodes[1];\n    if (icon.className === \"fa fa-square-o\") {\n      name.classList.add(\"strike\");\n      icon.classList.remove(\"fa-square-o\");\n      icon.classList.add(\"fa-check-square-o\");\n    } else if (e.target.childNodes[0].className === \"fa fa-check-square-o\") {\n      name.classList.remove(\"strike\");\n      icon.classList.remove(\"fa-check-square-o\");\n      icon.classList.add(\"fa-square-o\");\n    }\n  }\n});\n\nconsole.log(localStorage.getItem(\"projects\"));\n\nconst updateLocalStorage = () => {\n  if (localStorage.getItem(\"projects\") === null) {\n    console.log(\"hi\");\n  }\n};\n\nupdateLocalStorage();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createToDo\": () => (/* binding */ createToDo),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\nconst createToDo = (obj) => {\n  return Object.assign({}, obj);\n};\n\nconst createProject = (name) => {\n  let toDoList = [];\n\n  let active = false;\n\n  const activeOn = () => {\n    active = true;\n  };\n\n  const activeOff = () => {\n    active = false;\n  };\n\n  const getActive = () => {\n    return active;\n  };\n\n  const getName = () => {\n    return name;\n  };\n\n  const addToList = (task) => {\n    toDoList.push(task);\n  };\n\n  const removeFromList = (id) => {\n    if (id > -1) {\n      toDoList.splice(id, 1);\n    }\n  };\n\n  return {\n    toDoList,\n    activeOn,\n    activeOff,\n    getActive,\n    getName,\n    addToList,\n    removeFromList,\n  };\n};\n\nconst projects = (() => {\n  let projectsList = [];\n\n  let defaultList = [];\n\n  const addToDefault = (project) => {\n    defaultList.push(project);\n  };\n\n  const addToList = (project) => {\n    projectsList.push(project);\n  };\n\n  const removeFromList = (id) => {\n    if (id > -1) {\n      projectsList.splice(id, 1);\n    }\n  };\n\n  return { projectsList, defaultList, addToDefault, addToList, removeFromList };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;