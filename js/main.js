const encryptKey = {
	e: "enter",
	i: "imes",
	a: "ai",
	o: "ober",
	u: "ufat",
};

const btnAreaEnctypt = document.getElementById("btn-encrypt");
const btnAreaDecrypt = document.getElementById("btn-decrypt");
const textAreaResult = document.getElementById("text-result");
const textAreaInput = document.getElementById("text-input");
const alertMessage = document.getElementById("alert-message");

btnAreaEnctypt.addEventListener("click", () => {
	const encryptedText = textAreaInput.value.map((letter) => {
		return encryptKey[letter] || letter;
	});
	textAreaResult.value = encryptedText;
});

btnAreaDecrypt.addEventListener("click", () => {
	const decryptedText = encryptKey.map((element) => {
		return textAreaInput.value.includes(element)
			? encryptKey[element]
			: textAreaInput.value;
	});
	textAreaResult.value = decryptedText;
});

textAreaInput.addEventListener("keyup", () => {
	if (
		/[A-Z]/.test(textAreaInput.value) ||
		/[éèàù]/.test(textAreaInput.value) ||
		/[\-+_!@#$%^&*.,?'"]/.test(textAreaInput.value)
	) {
		btnAreaEnctypt.disabled = true;
		btnAreaDecrypt.disabled = true;
		alertMessage.style.color = "red";
	} else {
		btnAreaEnctypt.disabled = false;
		btnAreaDecrypt.disabled = false;
		alertMessage.style.color = "black";
	}
});
