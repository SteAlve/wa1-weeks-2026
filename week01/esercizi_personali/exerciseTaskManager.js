import dayjs from 'dayjs'

function Task (id, title, ownerId, createdAt, done, priority){
    this.id = id;
    this.title = title;
    this.ownerId = ownerId;
    this.createdAt = dayjs(createdAt);
    this.done = done;
    this.priority = priority;
}

function TaskList(){
    this.taskList = [];
    this.addTask = (task) => {this.taskList.push(task)};
    this.getByOwner = (ownerId) => {
        return this.taskList.filter(t => t.ownerId === ownerId);
    }
    this.getDone = () => {
       return this.taskList.filter(t => t.done === true);
    }
    this.afterDate = (date) => {
        const d = dayjs(date);
        return this.taskList.filter(t => t.createdAt.isAfter(date));
    }
    this.listByPriority = () => {
        return [...this.taskList].sort((a,b) => {
            if(a.priority !== b.priority){
                return b.priority-a.priority;
            }
            return b.createdAt - a.createdAt;
        })
    }
}



// ====== TEST ======
const tl = new TaskList();

tl.addTask(new Task(1, "Fix bug login", 10, "2026-01-10T09:00:00", false, 4));
tl.addTask(new Task(2, "Write docs API", 10, "2026-01-11T10:00:00", true, 3));
tl.addTask(new Task(3, "Refactor UI", 11, "2026-01-12T12:00:00", false, 5));
tl.addTask(new Task(4, "Meeting notes", 11, "2026-01-05T08:00:00", true, 2));
tl.addTask(new Task(5, "Add tests", 10, "2026-02-01T15:30:00", false, 5));
tl.addTask(new Task(6, "Deploy staging", 11, "2025-12-20T18:00:00", false, 1));

console.log("\n--- getByOwner(10) (atteso 3) ---");
const o10 = tl.getByOwner(10);
console.log(o10.map(t => t.id));
console.log("count:", o10.length);

console.log("\n--- getDone() (atteso 2) ---");
const done = tl.getDone();
console.log(done.map(t => t.id));
console.log("count:", done.length);

console.log("\n--- afterDate('2026-01-10T23:59:59') (atteso 3: id 2,3,5) ---");
const after = tl.afterDate("2026-01-10T23:59:59");
console.log(after.map(t => t.id));
console.log("count:", after.length);

console.log("\n--- listByPriority() (priority desc, poi più recenti) ---");
const sorted = tl.listByPriority();
console.log(sorted.map(t => `id:${t.id} p:${t.priority} date:${t.createdAt.format("YYYY-MM-DD")}`));