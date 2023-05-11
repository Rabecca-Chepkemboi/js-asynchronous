// 1. Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.

async function messageLog(message, timeDelay){
    await new Promise((resolve)=>setTimeout(resolve, timeDelay));
    console.log(message);
}
messageLog("I practise coding severally ", 3000);


// 2. You have an array of user IDs and a function getUserData(id) that returns a Promise with user
 //data when given a user ID. Write an asynchronous function that fetches and logs the data for 
 //each user ID one by one, in sequence.

 const usersId = [5, 10, 15, 20, 25];
 async function findUsersData (detail){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const userData = {
                detail:detail,
                name: `name of user ${detail}`,
                yearOfBirth: `user ${detail}.yearOfBirth`
            };
            resolve(userData);
        }, 4000);
    });
 }
 async function findingUsersData(arryOfDetails){
    for (let x = 0; x < arryOfDetails.length; x++) {
        const datas = await findUsersData(arryOfDetails[x]);
        console.log(datas);
        
    }
 }
 findingUsersData(usersId)


// 3. You have an asynchronous function performTask() that returns a Promise. The Promise resolves
 //if the task is successful and rejects if there's an error. Write a function that calls 
 //performTask() and logs a custom success message if the task is successful, and a custom error
 // message if there's an error.

 async function taskPerforming(text){
    return new Promise((resolve, reject)=>{
        if(text == successful){
            resolve("success: text is successful");
        }
        else{
            reject("error: text is not successful");
        }
    }) 
 }

 async function getMessage(){
    await taskPerforming(successful)
    .then((answer)=>{
        console.log("task run is successful", answer);
    })
    .catch((error)=>{
        console.log("an error has occured", error);
    })
    .finally(()=>{
        console.log("everything is correct");
    });
 }
 getMessage();

