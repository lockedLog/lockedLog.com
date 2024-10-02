const fakeInput = document.getElementById('fake-input');
let text1 = "ockedLog"; 
let text2 = "ogan"; 
let text = text1; 
let index = 0;
let deleting = false;
let alternate = true; 

function typeEffect() {
  if (!deleting) {
    fakeInput.textContent += text[index];
    index++;
    if (index === text.length) {
      deleting = true;
    }
  } else {
    fakeInput.textContent = 'l' + fakeInput.textContent.slice(1, -1); 
    if (fakeInput.textContent.length === 1) { 
      deleting = false;
      index = 0;

      text = alternate ? text2 : text1; 
      alternate = !alternate; 
    }
  }
  setTimeout(typeEffect, 343);
}

typeEffect();
