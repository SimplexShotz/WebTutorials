if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  setTimeout(() => {
    document.getElementById("header").style.padding = "30px 10% 30px 10%";
    document.getElementById("header").style.fontSize = "50pt";
    document.getElementById("header").style.textAlign = "center";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("navbar-mobile").style.display = "block";
    document.getElementById("content").style.margin = "0px 5% 0px 5%";
    for (var i = 0; i < document.getElementsByTagName("h1").length; i++) {
      document.getElementsByTagName("h1")[i].style.fontSize = "40pt";
    }
    for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
      document.getElementsByTagName("p")[i].style.fontSize = "30pt";
    }
    for (var i = 0; i < document.getElementsByTagName("a").length; i++) {
      document.getElementsByTagName("a")[i].style.fontSize = "30pt";
    }
    for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
      document.getElementsByTagName("li")[i].style.fontSize = "30pt";
    }
    document.getElementById("footer").style.padding = "30px";
    document.getElementById("footer").style.fontSize = "30pt";
    document.getElementById("footer").style.width = "calc(100% - 60px)";
  }, 0);
}
setTimeout(() => {
  var height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  if (height > window.innerHeight) {
    document.getElementById("footer").style.position = "static";
  }
  for (var i = 0; i < document.getElementsByClassName("code").length; i++) {
    var c = document.getElementsByClassName("code")[i].innerHTML.split("");
    for (var j = 0; j < c.length - 2; j++) {
      if (c[j] === "&" && c[j + 1] === "l" && c[j + 2] === "t") {
        c.splice(j, 0, "<div class=\"code-tag\">");
        j += 3;
      }
      console.log(c[j]);
    }
  }
}, 0);
