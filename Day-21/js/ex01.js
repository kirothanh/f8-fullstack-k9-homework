var text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, eius? Libero esse repudiandae quod quis.`;
var position = 0;
var output = '';
var temp = '';
var count = 0;
var length = text.length;
var originalText = text;

setInterval(() => {
  if (text.trim().length === 0) {
    text = originalText;
    temp = '';
    count = 0;
    position = 0;
  }

  output = '';
  var nextSpace = text.indexOf(" ");
  if (nextSpace === -1) {
    nextSpace = text.length;
  }

  output += temp + "<span>" + text.slice(0, nextSpace) + " " + "</span>";
  temp += text.slice(0, nextSpace) + " ";
  position = nextSpace + 1;
  count += position;
  text = text.slice(position);
  output += text;

  document.body.innerHTML = output;
}, 500);
