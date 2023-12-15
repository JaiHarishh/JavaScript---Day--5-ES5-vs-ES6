
const resume = {

    fname:"Harish",
    lname:"D",
    pno:123456789,
    location:"Madurai"

}


//For in Loop
for(let key in resume){
    console.log(resume[key]);
}

//For each

resume.forEach((repo) => {
    Object.entries(repo).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  });
  
//Fetch
const logBtn = document.getElementById('log');
logBtn.addEventListener('click', fetchData);

async function fetchData() {

    const response = await fetch('http://localhost:3000/users/');
    const data = await response.json();

    data.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key} ${value}`);
        });
        console.log('-------------------');
    });
}

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
});

