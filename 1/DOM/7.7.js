const links = [
    "https://google.com", "/page.html", "https://tinder.com", "/hello.html"
];

const addLinks = () => {
    const out = document.querySelector('body');
    const currying = tag => text => `<${tag}><a href="${text}">${text}</a></${tag}>`;

    for (const link of links) {
        const tag = currying("li");
        const text = tag(`${link}`);
        out.innerHTML += text;
    }
};

const setStyles = () => {
  const hyperLinks = document.querySelectorAll("a");

  for (const link of hyperLinks) {
      if (link.innerHTML.includes("http")) {
          link.style.color = "red";
      }
  }
};

addLinks();
setStyles();