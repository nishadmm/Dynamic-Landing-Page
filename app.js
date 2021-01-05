// DOM contents
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Get time
function getTime() {

  let today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();

  // Change into 12hr format
  hour = hour > 12 ? hour % 12 : hour;

  // Add 0 into hou, min & sec
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  setInterval(() => {
    getTime();
  }, 1000);

  time.textContent = `${hour}:${minute}:${second}`;
}

// Add greeting and bg
function addGreetingBg() {
  const today = new Date(),
    hour = today.getHours();
  let greet;

  if (hour < 12) {
    greet = "Good Morinig,";
    document.body.style.background = 'url(images/morning.jpg) no-repeat center center/cover';
    document.body.style.color = "#ffffff";
    document.getElementById('focus-q').style.color = '#ffffff';
    focus.style.color = '#ffffff';
  } else if (hour < 16) {
    greet = "Good AfterNoon,";
    document.body.style.background = 'url(images/afternoon.jpg) no-repeat center center/cover';
  } else {
    greet = "Good Evening,";
    document.body.style.background = 'url(images/night.jpg) no-repeat center center/cover';
    document.body.style.color = "#ffffff";
    document.getElementById('focus-q').style.color = '#ffffff';
    focus.style.color = '#ffffff';
  }

  greeting.textContent = greet;
}

// Change name
function changeName(e) {
  const value = name.textContent;
  if (e.type === 'keypress') {
    if (e.keycode === 13 || e.which === 13) {
      localStorage.setItem('name', value);
      name.blur();
    }
  } else {
    localStorage.setItem('name', value);
  }
}

// Change Focus
function changeFocus(e) {
  const value = focus.textContent;
  if (e.type === 'keypress') {
    if (e.keycode === 13 || e.which === 13) {
      localStorage.setItem('focus', value);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', value);
  }
}

// Get name and focus
function getNameAndFocus() {
  if (localStorage.getItem('name') === null) {
    name.textContent = "[ Enter Name ]";
  } else {
    name.textContent = localStorage.getItem('name');
  }

  if (localStorage.getItem('focus') === null) {
    focus.textContent = "[ Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Listners
name.addEventListener('keypress', changeName);
name.addEventListener('blur', changeName);
focus.addEventListener('keypress', changeFocus);
focus.addEventListener('blur', changeFocus);

// Run functions
getTime();
addGreetingBg();
getNameAndFocus();