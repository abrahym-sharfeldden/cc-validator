let checkVal = function (e) {
	// Only numbers can be entered into the input field.
	let keyCode = e.which ? e.which : e.keyCode;

	return keyCode != 46 && keyCode > 31 && (keyCode < 48 || keyCode > 57)
		? false
		: true;
};

luhnCheck = function (cardNumber) {
	const alternates = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

	return (
		cardNumber
			.toString()
			.replace(/\s/g, "")
			.split("")
			.reverse()
			.reduce(function (total, current, i) {
				let num = Number(current);
				let isOdd = i % 2 == 0;

				return total + (isOdd ? num : alternates[num]);
			}, 0) %
			10 ==
		0
	);
};

let submitVal = function () {
	let log = document.querySelector("p");
	let cardNumber = document.querySelector("input#cardType").value;

	if (cardNumber < 13) return (log.innerHTML = `Invalid Card Number`);
	if (luhnCheck(cardNumber)) return (log.innerHTML = `Card Verified!`);
	else return (log.innerHTML = `Invalid Card Number!`);
};

let numFormat = function (v) {
	let log = document.querySelector("p");
	let cardType = document.querySelector("input#cardType");
	let visa = checkCardType(v) == "Visa";
	let mastercard = checkCardType(v) == "MasterCard";
	let amex = checkCardType(v) == "Amex";
	let discover = checkCardType(v) == "Discover";

	document.getElementById("cc-icon").classList = checkCardType(v)
		? `fab fa-3x fa-cc-${checkCardType(v).toLowerCase()}`
		: "fab fa-3x fa-cc-none";

	if (cardType == "") log.innerHTML = "<br />";

	if (amex) {
		cardType.maxLength = "17";

		if (v.match(/^\d{4}$/) !== null) {
			cardType.value = v + " ";
		} else if (v.match(/^\d{4}\s\d{6}$/) !== null) {
			cardType.value = v + " ";
		} else if (v.match(/^(\d{4}\s\d{6}\s\d{6})$/) !== null) {
			//last grouping of regex set to 6 to prevent
			// an unnecessary added space.
			cardType.value = v + " ";
		}
	} else {
		// (visa || mastercard || discover)
		cardType.maxLength = "19";

		if (v.match(/^\d{4}$/) !== null) {
			cardType.value = v + " ";
		} else if (v.match(/^\d{4}\s\d{4}$/) !== null) {
			cardType.value = v + " ";
		} else if (v.match(/^(\d{4}\s\d{4}\s\d{4})$/) !== null) {
			cardType.value = v + " ";
		}
	}
};

let checkCardType = function (cardNumber) {
	function isAmex() {
		return /^3[47]{1,2}/g.test(cardNumber) ? "Amex" : null;
	}
	function isVisa() {
		return /^4[0-9]{1}/g.test(cardNumber) ? "Visa" : null;
	}
	function isMasterCard() {
		let bool = /^5[1-5]{2}/g.test(cardNumber);

		return bool ? "MasterCard" : null;
	}
	function isDiscover() {
		let bool = /^6(?:011|5\d\d)(| |-)(?:\d{4}\1){2}\d{4}$/g;
		return bool ? "Discover" : null;
	}

	return isAmex() || isVisa() || isMasterCard() || isDiscover();
};
