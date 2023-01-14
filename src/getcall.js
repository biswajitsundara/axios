import axios from "axios";

async function getTodos() {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

  const response = await axios({
    method: "get",
    url: "/todos",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  console.log(response.data);
}

getTodos();
