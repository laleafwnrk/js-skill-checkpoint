// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงน
async function usernamedata() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userdata = await response.json();
    const newUser = userdata.map(newUser => newUser.name)
    console.log(newUser);
  }
usernamedata();