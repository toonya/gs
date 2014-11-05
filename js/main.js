
(function($) {
	// body...
	// var t = new TimelineMax();
	
	// t
	// .from('.light', 3, {opacity: 0})
	// .from('.boy', 2, { left:'-100%' }, '-=2')
	// .from('.girl', 2, { left: '200%' }, '-=2')
	// .from('.button', 2, { opacity: 0, scale: .2, ease: Elastic.easeOut })
	// .from('.love-star', 1, { opacity: 0, scale: .2, ease: Elastic.easeOut })
	// .from('.title', 1, { backgroundPosition: '50% -100%', ease: Elastic.easeOut })

	var tl = new TimelineLite();

	tl
	.call(function(){
		$('.page').addClass('animation-play')
	}, [], this, 0)

	
	// .call(function(){
	// 	$('.light').addClass('animation-finish')
	// }, [], this, 3)
	// .call(function(){
	// 	$('.boy, .girl').addClass('animation-play');
	// }, [], this, 2)
	// .call(function(){
	// 	$('.boy, .girl').addClass('animation-finish');
	// }, [], this, 3.5)
	// .call(function(){
	// 	$('.button').addClass('animation-play');
	// }, [], this, 3.5)
	// .call(function(){
	// 	$('.button').addClass('animation-finish');
	// }, [], this, 4.5)
})(jQuery)