export default class {

    /**
     * constructor
     */
    constructor(){}


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
        const delayTime = 3000;
        let setTimer = null;

        $slideThumbItem.first().addClass('is-active');
        timer();

        $slideTopItem.each(function(i){
            $(this).attr('id',`view${i + 1}`);
            $slideTopItem.css({zIndex:'0',opacity:'0'});
            $slideTopItem.first().css({zIndex:'1'}).stop().animate({opacity:'1'},fadeTime);
        });

        function timer() {
            setTimer = setInterval(function(){
                $('.js-slide-thumb__item.is-active').each(function(){
                    const listLengh = $slideThumbItem.length;
                    const listIndex = $slideThumbItem.index(this);
                    const listCount = listIndex+1;
    
                    if (listLengh === listCount) {
                        $slideThumbItem.first().trigger('click');
                    } else {
                        $(this).next($slideThumbItem).trigger('click');
                    };
                });
            },delayTime);
        };

        $slideThumbItem.on('click', function(){
            clearInterval(setTimer);
    
            const connectCont = $slideThumbItem.index(this);
            const showCont = connectCont+1;
            const $showItem = $(`.js-slide-top__item#view${showCont}`);

            $showItem
                .siblings()
                .stop()
                .animate(
                    {opacity:'0'},
                    fadeTime,
                    function(){$(this).css({zIndex:'0'})}
                );
            $showItem
                .stop()
                .animate(
                    {opacity:'1'},
                    fadeTime,
                    function(){$(this).css({zIndex:'1'})}
                );
    
            $(this).addClass('is-active');
            $(this).siblings().removeClass('is-active');
    
            timer();
        });    
        
    }

}