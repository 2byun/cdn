$(function () {
  setShowScoll();
  if ($('.lazy').length > 0) {
    $(".lazy").lazyload({
      effect: "fadeIn"
    });
  }
  $(".close-link-zs").click(function () {
    $(".footer-fix").hide()
  });
  if ($('.url-share-copy').length > 0) {
    var clipboard = new ClipboardJS('.url-share-copy');
    clipboard.on('success', function (e) {
      $.openToast("你已成功复制分享链接，快点分享给好友吧");
      e.clearSelection();
    });
  }
  if ($('.fdm_down').length > 0) {
    var clipboard = new ClipboardJS('.fdm_down');
    clipboard.on('success', function (e) {
      $.openToast("你已成功复制下载链接，请前往fdm继续下载");
      e.clearSelection();
    });
  }
  window.onscroll = function () {
    setShowScoll();
  }
});
