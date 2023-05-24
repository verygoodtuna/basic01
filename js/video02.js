$(function(){
    $('#bgndVideo').YTPlayer({
        videoURL:'2R6gtTWmihE',
        containment:'#main_visual',
        autoPlay:true, 
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#conVideo').YTPlayer({
        videoURL:'X8JaUlaqAo0',
        containment:'#bgm1',
        autoPlay:true, 
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#conVideo2').YTPlayer({
        videoURL:'X8JaUlaqAo0',
        containment:'#bgm2',
        autoPlay:true, 
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#conVideo3').YTPlayer({
        videoURL:'X8JaUlaqAo0',
        containment:'#bgm3',
        autoPlay:true, 
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#main_visual .pause').on('click', function (){
        $('#bgndVideo').YTPPause();
    })

    
    $('#main_visual .play').on('click', function (){
        $('#bgndVideo').YTPPlay();
    })
})

// const vdo

