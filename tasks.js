
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("-------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n') {
    quit();
  }
  else if(text === 'exit\n') {
    exit();
  }
  else if(text.trim().split(" ")[0]==="hello"){
    hello(text.trim().substring(5));
  }
  else if (text === 'list\n'){
  List();
  }
  else if (text === 'add\n'){
    console.log("you didn't add anything please add ");
  }
  else if (text.startsWith('add')){
      add(text);
    }
  else if(text === 'help\n'){
    help();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 * /
 * @returns {void}
 */
  function hello(text){
    console.log(`Hello${text}!`)
}

var list=Array("task1","task2","task3");
function List(){
  console.log(
    list.map((tasks,key) => `${key+1} - ${tasks} `).join("\n")
  )
}
function add(text){
 list.push(text.slice(4, text.length -1))
 console.log("you added a element")
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
function exit(){
  console.log('exitting now, goodbye!')
  process.exit();
}

/**
 * shows a list of the available commands
 *
 * @returns {void}
 */
// The following line starts the application
function help() {
  console.log(`you may use these commands :
  exit and quit : "for close the application"
  hello : " hello and your name for welcoming"
  help : "To find the command to use "
  `)
}
startApp("Ahmad Breiss")
