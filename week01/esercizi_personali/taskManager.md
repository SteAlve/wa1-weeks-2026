# Exercise: Mini Task Manager

## Goal

Manage a list of tasks using JavaScript constructor functions and functional programming methods (`filter`, `map`, `reduce`, `sort`).

---

## Task Structure

Each **Task** must contain:

- `id` → positive integer, unique
- `title` → string
- `ownerId` → positive integer
- `createdAt` → Date object
- `done` → boolean
- `priority` → integer from 1 to 5

Define a constructor function:

---
function Task(id, title, ownerId, createdAt, done, priority)

---

## TaskList Structure

Define a constructor function:

```
function TaskList()
```

It must contain:

- `tasks` → array of Task objects

---

## Required Methods

Implement the following methods inside `TaskList`:

### 1. addTask(task)

Adds a fully constructed `Task` object to the list.

---

### 2. getByOwner(ownerId)

Returns all tasks belonging to the given owner.

---

### 3. getDone()

Returns all completed tasks (`done === true`).

---

### 4. afterDate(date)

Returns all tasks created after the given date.

---

### 5. listByPriority()

Returns a new array of tasks sorted by:

- Higher priority first (descending)
- If same priority → more recent tasks first

---

### 6. statsByOwner()

Returns an object structured like:

```
{
ownerId1: numberOfTasks,
ownerId2: numberOfTasks,
...
}
```


Use `reduce()`.

---

## Final Requirement

Create an instance of `TaskList` and add at least:

- 6 tasks
- At least 2 completed tasks
- At least 2 different owners

---

## Example Usage (Conceptual)

```
const taskList = new TaskList();

taskList.addTask(new Task(1, "Fix bug", 10, new Date(), false, 4));
taskList.addTask(new Task(2, "Write docs", 11, new Date(), true, 3));

console.log(taskList.getDone());
console.log(taskList.listByPriority());
console.log(taskList.statsByOwner());
```
