var explain = window.matchMedia("(min-width: 1000px)"); /***** portrait alert media querie *****/

if (explain.matches) {
	alert("Hello! I have made this page with the goal to make it as interactive and and interesting to the viewer as possible, without over-doing it. Use the blank space on the sides to scroll up and down without distraction. As you view the site make sure your mouse follows your eyes!! Enjoy!!!!");
} else

// media query event handler
if (matchMedia) {
  var explain = window.matchMedia("(min-width: 1050px)");
  explain.addListener(WidthChange);
  WidthChange(explain);
}

// media query change
function WidthChange(explain) {

 if (explain.matches) {
	alert("Hello! I have made this page with the goal to make it as interactive and and interesting to the viewer as possible, without over-doing it. Use the blank space on the sides to scroll up and down without distraction. As you view the site make sure your mouse follows your eyes!! Enjoy!!!!");
	// WidthChange(explain) = none;
} 

}



