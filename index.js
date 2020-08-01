$(document).ready(function () {
  $(".tab_content").hide();
  $(".tab_1").show();
  $(".midnav li").click(function () {
    const now_tab = $(this).attr("data-attr");
    $(".tab_content").hide();

    $("." + now_tab).show();
  });
});
