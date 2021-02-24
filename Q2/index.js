const axios = require('axios');

async function getUser() {
  try {
    const {data} = await axios.get('http://localhost:3000/profiles');
    const arr1 = []
    const arr2 = []
    const arr3 = []
    const arr4 = ['no user']
    const arr5 = []
    const arr6 = []
    const arr7 = []
    // 1 Find users who don't have any phone numbers. 
    data.filter(function(data){
      if(data.profile.phones[0]){
        arr1.push(data.username);
      }
    });
    // 2. Find users who have articles. 
    data.filter(function(data){
      if(data.articles[0]){
        arr2.push(data.username);
      }
    });
    // 3. Find users who have "annis" on their name.
    // 4. Find users who have articles on the year 2020.
    data.forEach(res=>{
      res.articles.forEach(value=>{
        if (value.published_at >= '2020-01-01T01:00:00' && value.published_at <= '2020-12-01T01:00:00') {
          arr4.push(res.username)
        }
      })
    })
    // 5. Find users who are born in 1986. 
    data.filter(function(data){
      if(data.profile.birthday >= '1986-01-01' && data.profile.birthday <= '1986-12-12'){
        arr5.push(data.username);
      }
    });
    // 6. Find articles that contain "tips" on the title.
    // 7. Find articles published before August 2019
    data.forEach(res=>{
      res.articles.forEach(value=>{
        if (value.published_at <= '2019-08-11T13:00:00') {
          arr7.push(value.title)
        }
      })
    })
    // show in log
    console.log("1. users who don't have any phone numbers: "+arr1)
    console.log("2. users who have articles: "+arr2)
    console.log("3. users who have 'annis' on their name: "+arr3)
    console.log("4. users who have articles on the year 2020: "+arr4)
    console.log("5. users who are born in 1986: "+arr5)
    console.log("6. articles that contain 'tips' on the title: "+arr6)
    console.log("7. articles published before August 2019: "+arr7)
  } catch (error) {
    console.error("data cannot be reach");
  }
}

getUser()