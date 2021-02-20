const body = document.querySelector("body");

const options = {
    top: "10px",
    right: "10px",
    message: "Bitcoin will be 100k$",
    className: "welcome"
};

const setStyles = () => {
    const notificationDiv = document.querySelector(".notification");
    notificationDiv.style.position = "absolute";
    notificationDiv.style.display = "block";
    notificationDiv.style.width = "auto";
    notificationDiv.style.top = options.top;
    notificationDiv.style.right = options.right;
    notificationDiv.style.backgroundColor = "purple";
};

const showNotification = options => {
    body.innerHTML = `<div class ="notification ${options.className}"> ${options.message} </div>`;
    setStyles();
    setTimeout(() => {
        const notificationDiv = document.querySelector(".notification");
        notificationDiv.innerHTML = '';
    }, 1500)
};

showNotification(options);