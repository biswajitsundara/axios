import axios from "axios";

async function postUser() {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

  const response = await axios({
    method: "post",
    url: "/posts",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  console.log(response.data);
}

postUser();
