const axios = require('axios');

async function getUser() {
  try {
    const {data} = await axios.get('http://localhost:3000/profiles');
    console.log(data)
  } catch (error) {
    console.error(error);
  }
}

getUser()