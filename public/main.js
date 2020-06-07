getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    //创建style标签
    const style = document.createElement("style");
    //填写style内容
    style.innerHTML = request.response;
    //插入
    document.head.appendChild(style);
  };
  request.onerror = () => {};
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "2.js");
  request.onload = () => {
    //创建一个js标签
    const script = document.createElement("script");
    //填写js内容
    script.innerHTML = request.response;
    //插入
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.status);
        //创建一个div标签
        const div = document.createElement("div");
        //填写div内容
        div.innerHTML = request.response;
        //插入
        document.body.appendChild(div);
      } else {
        alert("你的方法多少有些问题");
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(typeof request.response);
      console.log(request.response);
      const object = JSON.parse(request.response);
      console.log(typeof object);
      console.log(object);
      myName.textContent = object.name + object.age;
    }
  };
  request.send();
};
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
