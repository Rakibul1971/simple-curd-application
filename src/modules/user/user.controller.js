const users = [];
function createUser (req, res){
    const body = req.body;
    const email = body.email;
    
    const user = users.find(user => user.email === email);
  
    if(user) return res.send("User already exists");
  
    users.push(body);
    res.send(body);
}

function getUsers (req, res){
    res.send(users);
}

function deleteUser (req, res){
    const email = req.params.email;
    
    const arrayIndex = users.findIndex(user => user.email === email);

    const elementArray = users[arrayIndex];
  
    if(arrayIndex>-1) {
        users.splice(arrayIndex,1)
        return res.send(elementArray);
    }
    else res.send('Not Found');
} 

function updateUser (req, res){
    const email = req.params.email;
    const name = req.body.name;

    const user = users.find(user => user.email === email);

    if(!user) return res.send('User not found');

    user.name = name;
    
    res.send(user);
}

function getUser (req, res){
    const email = req.params.email;
    
    const user = users.find(user => user.email === email);

    if(!user) return res.send('User not found');
    
    res.send(user);
}

module.exports.createUser = createUser;
module.exports.getUsers = getUsers;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;
module.exports.getUser = getUser;