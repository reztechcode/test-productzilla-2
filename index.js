document.addEventListener("DOMContentLoaded", function () {
	const myForm = document.getElementById("form");
	const resultMessage = document.getElementById("message");

	myForm.addEventListener("submit", function (event) {
	  event.preventDefault();

	  const myName = document.getElementById("my-name").value;
	  const mySkill = document.getElementById("my-skill").value;

	  resultMessage.textContent = `Hi, ${myName}, Anda Memiliki Skill: ${mySkill}.`;

	  if (mySkill === "HTML") {
		document.documentElement.style.setProperty(
		  "--primary-color",
		  "#f28841"
		);
	  } else if (mySkill === "CSS") {
		document.documentElement.style.setProperty(
		  "--primary-color",
		  "#2992d9"
		);
	  } else if (mySkill === "JavaScript") {
		document.documentElement.style.setProperty(
		  "--primary-color",
		  "#d9d329"
		);
	  }
	});
  });