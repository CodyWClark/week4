function Big() {
	document.getElementById("Text").style.fontSize = '24px';
}
function Fancy()	{
	document.getElementById("Text").style.fontWeight = "bold";
	document.getElementById("Text").style.color = "blue";
	document.getElementById("Text").style.textDecoration = "underline";
}
function Boring()	{
	document.getElementById("Text").style.fontWeight = "normal";
	document.getElementById("Text").style.color = "black";
	document.getElementById("Text").style.textDecoration = "none";
}
function Moo()	{
	var str = document.getElementById("Text").value;
	var parts = str.split(".");
	str = parts.join("moo.");
	str = str.toUpperCase();
	document.getElementById("Text").value = str;
}	