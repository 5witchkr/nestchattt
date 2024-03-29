//root domain
const socket = io('/chatroot');

const getElementById = (id) => document.getElementById(id) || null;

//* get DOM element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');


//global socket handler (broadcast)
socket.on('user_connected', (username) => {
  console.log(`${username} connected`);
})


//draw fun
const drawHelloStranger = (username) => (
  helloStrangerElement.innerText = `Hello ${username} Stranger:`
);

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username, (data) => {
    console.log(data);
    drawHelloStranger(data);
  });
}

function init() {
  helloUser();
}

init();