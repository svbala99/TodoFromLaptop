const axios = require('axios');

axios.post("http://192.168.0.5/projects/todo/fetchTasks.php", {})
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
});

console.log("reaching here");

