const axios = require("axios");
const moment = require('moment')

async function getUser() {
  try {
    const { data } = await axios.get("http://localhost:3000/inventory");
    const arr1 = []
    const arr2 = []
    const arr3 = []
    const arr4 = ['no data']
    const arr5 = []
    // 1. Find items in the Meeting Room.
    data.forEach(res=>{
      if(res.placement.name === 'Meeting Room'){
        arr1.push(res.name)
      }
    })
    // 2. Find all electronic devices.
    data.forEach(res=>{
      if(res.type === 'electronic'){
        arr2.push(res.name)
      }
    })
    // 3. Find all the furniture.
    data.forEach(res=>{
      if(res.type === 'furniture'){
        arr3.push(res.name)
      }
    })
    // 4. Find all items were purchased on 16 Januari 2020.
    data.forEach(res=>{
      console.log(moment(res.purchased_at).format('LL'));
    })
      // this date give date on january 19, 1970
    // 5. Find all items with brown color.
    data.forEach(res=>{
      res.tags.forEach(value=>{
        if (value === 'brown') {
          arr5.push(res.name)
        }
      })
    })
    // showen
    console.log("1. Items in the Meeting Room: "+arr1)
    console.log("2. All electronic devices: "+arr2)
    console.log("3. All the furniture: "+arr3)
    console.log("4. All items were purchased on 16 Januari 2020: "+arr4)
    console.log("5. All items with brown color: "+arr5)
  } catch (error) {
    console.error(error);
  }
}

getUser();
