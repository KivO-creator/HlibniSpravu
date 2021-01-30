$(function () {
	var header = $("#header"),
		introH = $("#intro").innerHeight();
	var scrollOffset = $(window).scrollTop;


	// Fixed Header

	checkScroll(scrollOffset);

	$(window).on("scroll", function () {

		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);

	});


	function checkScroll(scrollOffset) {
		scrollOffset = $(this).scrollTop();
		console.log(scrollOffset);

		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	//SmothScroll
	$("[data-scroll]").on("click", function (Event) {

		Event.preventDefault();

		var $this = $(this),
			blockId = $(this).data('scroll'),
			blockoffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active")

		$("html, body").animate({
			scrollTop: blockoffset
		}, 500);

	});

	/*Menu nav toogle*/
	$("#nav__toggle").on("click", function (Event) {

		Event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");

	});


	//Collapse

	$("[data-collapse]").on("click", function (Event) {

		Event.preventDefault();

		var $this = $(this),
			blockId = $(this).data('collapse');


		$(blockId).slideToggle();


	});







});