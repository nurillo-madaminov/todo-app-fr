<template>
    <div class="sidebar">
        <h3>my lists</h3>
        <div>
            <ul>
                <li v-for="category in categories" :key="category.name" @click="showTasks">
                    <router-link :to="{name: 'ListView', params: {id: category.id}}" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff" width="15"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                        &nbsp;&nbsp;{{category.name}}
                    </router-link> 
                </li>
                <li style="display: flex; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff" width="15"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                     <input type="text" placeholder="Enter a new list" v-model="newCategory" @keyup="createCategory">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newCategory: "",
            categories: [
                // Example
                {name: "daily", id: 1},
                {name: "weekly", id: 2},
            ]
        }
    },
    methods: {
        createCategory(e) {
            if(e.key == "Enter") {
                if(this.newCategory.length) {
                    this.categories.push({name: this.newCategory})
                    this.newCategory = ""
                } else {
                    alert("no no no siuuuuuuu")
                }
            }
        },
        showTasks() {
            console.log(123);
        }
    }
}
</script>

<style scoped>
::placeholder {
    color: #d3d3d3;
}
.sidebar {
    max-width: min-content;
    float: left;
    color: #fff;
    text-align: left;
} 
a {
    color: #fff;
    text-decoration: none;
}
.sidebar h3 {
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 20px;
}
ul li {
    padding: 0;
    display: inline;
    list-style: none;
    padding: 5px 8px;
    font-size: 17px;
    text-transform: capitalize;
    cursor: pointer;
}
ul {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
input {
    background-color: transparent;
    height: fit-content;
    border: none;
    outline: none;
    color: #fff;
    font-size: 17px;
    border-bottom: 3px solid #fff;
    width: 140px;
}
</style>