var agent = navigator.userAgent.toLowerCase();
window.isPc = function () {
  var result = agent.indexOf("Windows") > -1 || agent.indexOf("windows") > -1;
  return result;
}

window.isIOS = function () {
  let result = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || agent.indexOf("iphone") > -1 || agent.indexOf("ipad") > -1;
  return result;
}

window.isAnd = function () {
  var result = agent.indexOf("Android") > -1 || agent.indexOf("Adr") > -1 || agent.indexOf("android") > -1 || agent.indexOf("linux") > -1;
  return result;
}

window.isMobile = function () {
  if (document.documentElement.clientWidth < 738) {
    return true;
  }
  return false;
}

window.getRandom = function (arr) {
  let index = parseInt(Math.random() * arr.length);
  return arr[index];
}

function setShowScoll() {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  let clientHeight = 200;
  if (scrollTop >= clientHeight) {
    $(".go-up").show();
  } else {
    $(".go-up").hide()
  }
}

function totop(i) {
  if (i <= 0) {
    return
  } else {
    window.scroll(0, i);
    setTimeout(function () {
      totop(i - 40)
    }, 1)

  }
}

function doScroll1() {
  let scrollTop1 = document.body.scrollTop || document.documentElement.scrollTop;
  totop(scrollTop1);
}

function close_discor() {
  $('.close_discor').hide();
}
