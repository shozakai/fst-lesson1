export default class {

    /**
     * constructor
     */
    constructor(){
        this.$slideTop = $('.js-slide-top');
        this.$slideThumb = $('.js-slide-thumb');
        
    }


    /**
     * init
     */
    init(){
        this.slide();
    }


    /**
     * slide
     */
    slide(){
        const $slideTopItem = $('.js-slide-top__item');
        const $slideThumbItem = $('.js-slide-thumb__item');
        const fadeTime = 1000;
        const delayTime = 5000;
        let setTimer = null;

        $slideTopItem.each(function(i){
            $(this).attr('id','view' + (i + 1).toString());
            $slideTopItem.css({zIndex:'98',opacity:'0'});
            $slideTopItem.first().css({zIndex:'99'}).stop().animate({opacity:'1'},fadeTime);
        });

        $slideThumbItem.on('click', function(){
            clearInterval(setTimer);
    
            var connectCont = $slideThumbItem.index(this);
            var showCont = connectCont+1;
    
            $('.js-slide-top__item#view' + (showCont))
                .siblings()
                .stop()
                .animate(
                    {opacity:'0'},
                    fadeTime,
                    function(){$(this).css({zIndex:'98'})}
                );
            $('.js-slide-top__item#view' + (showCont))
                .stop()
                .animate(
                    {opacity:'1'},
                    fadeTime,
                    function(){$(this).css({zIndex:'99'})}
                );
    
            $(this).addClass('is-active');
            $(this).siblings().removeClass('is-active');
    
            timer();
    
        });

	    $slideThumbItem.first().addClass('is-active');

        timer();

        function timer() {
            setTimer = setInterval(function(){
                $('.js-slide-thumb__item.is-active').each(function(){
                    const listLengh = $slideThumbItem.length;
                    const listIndex = $slideThumbItem.index(this);
                    const listCount = listIndex+1;
    
                    if(listLengh == listCount){
                        $slideThumbItem.first().click();
                    } else {
                        $(this).next($slideThumbItem).click();
                    };
                });
            },delayTime);
        };
    }


}