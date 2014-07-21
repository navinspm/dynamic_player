$(document).ready(function(){
  

  /* myplaylist= audio juke box, myplaylist2= radio, myplaylist3= video */

$.ajax({ 
        type: 'GET',
        url:window.location.pathname ,
        dataType: "json",
        success: function(json){
          $.each(json.audios,function(index, audio){
            $.each(audio, function(index, audio) {
              myPlaylist.add({title:(audio.name), m4a:(audio.audio.audio.url)});
              });
                 });
              }
           });

$.getJSON("../audios.json",function(data){ 
        $.each(data,function(index,audio){
         myPlaylist2.add({title:(audio.name),m4a:(audio.audio.audio.url)});
          myPlaylist2.shuffle();
        })
         });

$.ajax({ 
        type: 'GET',
        url:window.location.pathname ,
        dataType: "json",
        success: function(json){
          $.each(json,function(data){ 
            myPlaylist3.add({title:$(this).attr("video_identifier"),m4v:$(this).attr("video_url")})
             });
              }
           });


/*$('.play').on("click",function(){
  $(this).each(function(){
    url=this.href 
    $.getJSON(url,function(data){
      $.each(data,function(data){ 
            myPlaylist3.add()
            myPlaylist3.add({title:$(this).attr("video_identifier"),m4v:$(this).attr("video_url")})
             });
         });
      }); 
      return false;
 });  
*/

 $("#jquery_jplayer_1").bind($.jPlayer.event.setmedia, function(event) { 
  $("#jquery_jplayer_1").jPlayer("play");
    });

  $("#jquery_jplayer_3").bind($.jPlayer.event.setmedia, function(event) { 
  $("#jquery_jplayer_3").jPlayer("play");
    });
  var myPlaylist = new jPlayerPlaylist({
  jPlayer: "#jquery_jplayer_1",
  cssSelectorAncestor: "#jp_container_1"
  }, 
  [
   
  ], 
{
    playlistOptions: {
    autoPlay: false,
    loopOnPrevious: false,
    shuffleOnLoop: false,
     addTime: 'fast',

},
    supplied: "m4a,ogg,mp3",
    preload: "auto",
    


  });

  var myPlaylist2 = new jPlayerPlaylist({
  jPlayer: "#jquery_jplayer_2",
  cssSelectorAncestor: "#jp_container_2"
  }, 
  [
   
  ], 
{
     playlistOptions: {
     autoPlay: false,
     loopOnPrevious: false,
     shuffleOnLoop: true,
     enableRemoveControls: false,
     displayTime: 'slow',
     addTime: 'fast',
     removeTime: 'fast',
     shuffleTime: 'slow',
    
},
    supplied: "m4a,ogg,mp3",
    preload: "auto"

  });


  var myPlaylist3 = new jPlayerPlaylist({
  jPlayer: "#jquery_jplayer_3",
  cssSelectorAncestor: "#jp_container_3"
  }, 
  [
   
  ], 
{
    playlistOptions: {
    autoPlay: true,
},
    supplied: "mp4,m4v",
    preload: "auto"

  });

   $("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
    $("#jplayer_inspector_2").jPlayerInspector({jPlayer:$("#jquery_jplayer_2")});
    $("#jplayer_inspector_3").jPlayerInspector({jPlayer:$("#jquery_jplayer_3")});
});