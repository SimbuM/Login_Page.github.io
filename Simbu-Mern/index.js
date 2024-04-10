loginForm = document.querySelector('#loginForm')
userName = document.querySelector('#uname')
password = document.querySelector('#pass')

userData = []

fetch("./user.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    userData = [...data]
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    uname = userName.value
    pass = password.value
    result()
    userName.value = ''
    password.value = ''
})

function loginUser(uname, pass){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user=userData.find(
                (user)=>user.name === uname && user.password === pass
            );
            if(user){
                resolve(user);
                console.log('got')
            }else{
                reject(new Error("Invalid email or password"));
            }
        },1000);
    }).then((user)=>console.log(user));
}
async function result(){
    const user = await loginUser(uname, pass);
    window.location.href = ''
    console.log(user);
}