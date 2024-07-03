const _ = require("lodash");
console.log(_.camelCase("I am from MF one"));

const mount = (el) => {
  let text = _.camelCase("I am from MF one");
  el.innerHTML = text;
};

if (process.env.NODE_ENV === "development") {
  let el = document.querySelector("#mf-one");
  mount(el);
}

export { mount };
