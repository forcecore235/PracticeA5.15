let storyJSON = {
  "text": [
    "Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:",
    "{speach}"
  ]
};

let var1el = document.querySelector(".var1");
let var2el = document.querySelector(".var2");
let var3el = document.querySelector(".var3");
let var4el = document.querySelector(".var4");
let var5el = document.querySelector(".var5");
let var6el = document.querySelector(".var6");
let speachel = document.querySelector(".speach");

let storyText = document.querySelector(".story");

let createButton = document.querySelector(".createText");
let changeButton = document.querySelector(".changeVar");

createButton.addEventListener('click', story);
changeButton.addEventListener('click', changeStory);

function story() {
  	if (storyText.innerHTML == storyJSON.text) {
  		createButton.innerHTML = "Показать шаблон"
  		storyText.innerHTML = "Курочка ряба"
  	} else {
  		createButton.innerHTML = "Скрыть Шаблон"
  		storyText.innerHTML = storyJSON.text;
  	};
}

function changeStory() {
	let var1 = var1el.value;
	let var2 = var2el.value;
	let var3 = var3el.value;
	let var4 = var4el.value;
	let var5 = var5el.value;
	let var6 = var6el.value;
	let speach = speachel.value;
	newStoryObj = {
  "text": [
    `Жили-были ${var1} да ${var2}`,
    `Была у них ${var3}`,
    `Снесла ${var3} ${var4}, не простое - золотое`,
    `- ${var1} бил, бил - не разбил`,
    `- ${var2} била, била - не разбила`,
    `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
    `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
    `${speach}`
  ]
};
	storyText.innerHTML = newStoryObj.text;
}

// function changeObj(objName) {
// 	return `objName`;
// }
