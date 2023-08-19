<template>
    <div class="single-category">
        <div class="header">
            <h2>Category name</h2>
            <p>{{ remainingTasks.length }} remaining tasks</p>
        </div>
        <div class="body">
            <ul>
                <li v-for="task in tasks" :key="task.name" @click="done(task)" :class="{completed: task.isCompleted}" style="display: flex; align-items: center; gap: 10px;">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg> -->
                    <div style="width: 15px;height: 15px;border: 2px solid black; border-radius: 50%;" :class="{fill: task.isCompleted}"></div>
                    <span>{{ task.name }}</span>
                </li>
                <li style="display: flex; gap: 8px;" class="add-new-task">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    <input type="text"  placeholder="Enter a new task" v-model="newTask" @keyup="createTask">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: "",
            tasks: [
                {name: "Creating a new website", isCompleted: false},
                {name: "Learning something new", isCompleted: false},
            ],            
        }
    },
    methods: {
        createTask(e) {
                if (e.key == "Enter") {
                    if(this.newTask.length) {
                        this.tasks.push({name: this.newTask})
                        this.newTask = ""
                    } else {
                        alert("You have entered nothing yet")
                     }
                }
            },
            done(task) {
                task.isCompleted = !task.isCompleted
            }
    },
    computed: {
        remainingTasks() {
            return this.tasks.filter((task) => {
                return task.isCompleted !== true
            })
        }
    }
}
</script>

<style scoped>
.single-category {
    background-color: #fff;
    float: right;
    width: 400px;
    height: fit-content;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #E5E4E5;
}
.body {
    padding: 25px;
}
span::first-letter {
    text-transform: uppercase;
}
.body li:not(.add-new-task)  {
    font-size: 23px;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    padding-bottom: 10px;
    cursor: pointer;
    border-bottom: 1px solid #E5E4E5;
} 
.completed {
    color: lightgray;
    text-decoration:line-through
}
.fill {
    background-color: lightgray;
    border: none !important;
}
input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 5px 10px;
    width: 100%;
    border-bottom: 2px solid #000;
 }
</style>