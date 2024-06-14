const express= require ("express");
const app= express();
const PORT= 8000;
const users=require('./MOCK_DATA.json')
//Define routes here
app.get("/api/users", function(req, res){
    return res.json(users);
})

app.get("/users", function(req, res){
    const HTML=`
    <ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`
    )}</ul>
    `;
    res.send(HTML);
})

app.get("/api/users/:id", function(req, res){
    const id= req.params.id;    
    const user= users[id];
    return res.json(user);
})

app.post("/api/users", function(req, res){
    const newUser= req.body;
    return res.json(newUser);
})

app.patch("/api/users/:id", function(req, res){
    const id= req.params.id;
    const updatedUser= req.body;
    return res.json(updatedUser);
})

app.listen(PORT, ()=> console.log('Server Started at PORT: ${PORT}'))  