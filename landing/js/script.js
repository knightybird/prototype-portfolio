/* ======================
    Display - Date & Day
   ======================
*/
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function checkTime() {
  var date = new Date();
  var sufix = '';
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var day = date.getDate();
  var month = monthNames[date.getMonth()];
  var weekday = dayNames[date.getDay()];
  if (day > 3 && day < 21) sufix = 'th';
  switch (day % 10) {
    case 1:
      sufix = "st";
    case 2:
      sufix = "nd";
    case 3:
      sufix = "rd";
    default:
      sufix = "th";
  }

  var today = new Date();

var day2 = today.getDate();
var month2 = today.getMonth() + 1;
var year2 = today.getFullYear();

if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}


  var out = document.getElementById("date-output");

out.innerHTML = "  It's "+ day2 + "/" + month2 + "/" + year2 + "</span><br/><span class='date'>" + month + ' ' + day + sufix + ', ' + weekday + '.';
}

setInterval(checkTime(), 1000);

  /*
-----------------------------
  jQuery UI draggable
-----------------------------
 */
// $(document).ready(function(){

//   $('.toggle').dblclick(function(){ //dblclick = on double click
//       $('.toggle').toggleClass('active')
//       $('ul').toggleClass('active')
//   })
//   $('.draggable').draggable();
// })


/* ===============
 layer 4 - audio 
 ================*/
// $(document).ready(function() {

//   var song;
//   var tracker = $('.tracker');
//   var volume = $('.volume');

//   function initAudio(elem) {
//     var url = elem.attr('audiourl');

//     var title = elem.text();
//     var artist = elem.attr('artist');

//     $('.player .title').text(title);
//     $('.player .artist').text(artist);

//     // song = new Audio('media/'+url);
//     song = new Audio(url);

//     // timeupdate event listener
//     song.addEventListener('timeupdate', function() {
//       var curtime = parseInt(song.currentTime, 10);
//       tracker.slider('value', curtime);
//     });

//     $('.playlist li').removeClass('active');
//     elem.addClass('active');
//   }

//   function playAudio() {
//     song.play();

//     tracker.slider("option", "max", song.duration);

//     $('.play').addClass('hidden');
//     $('.pause').addClass('visible');
//   }

//   function stopAudio() {
//     song.pause();

//     $('.play').removeClass('hidden');
//     $('.pause').removeClass('visible');
//   }

//   // play click
//   $('.play').click(function(e) {
//     e.preventDefault();
//     // playAudio();

//     song.addEventListener('ended', function() {
//       var next = $('.playlist li.active').next();
//       if (next.length == 0) {
//         next = $('.playlist li:first-child');
//       }
//       initAudio(next);

//       song.addEventListener('loadedmetadata', function() {
//         playAudio();
//       });

//     }, false);

//     tracker.slider("option", "max", song.duration);
//     song.play();
//     $('.play').addClass('hidden');
//     $('.pause').addClass('visible');

//   });

//   // pause click
//   $('.pause').click(function(e) {
//     e.preventDefault();
//     stopAudio();
//   });

//   // next track
//   $('.fwd').click(function(e) {
//     e.preventDefault();

//     stopAudio();

//     var next = $('.playlist li.active').next();
//     if (next.length === 0) {
//       next = $('.playlist li:first-child');
//     }
//     initAudio(next);
//     song.addEventListener('loadedmetadata', function() {
//       playAudio();
//     });
//   });

//   // prev track
//   $('.rew').click(function(e) {
//     e.preventDefault();

//     stopAudio();

//     var prev = $('.playlist li.active').prev();
//     if (prev.length === 0) {
//       prev = $('.playlist li:last-child');
//     }
//     initAudio(prev);

//     song.addEventListener('loadedmetadata', function() {
//       playAudio();
//     });
//   });

//   // show playlist
//   $('.playlistIcon').click(function(e) {
//     e.preventDefault();
//     $('.playlist').toggleClass('show');
//   });

//   // playlist elements - click
//   $('.playlist li').click(function() {
//     stopAudio();
//     initAudio($(this));
//   });

//   // initialization - first element in playlist
//   initAudio($('.playlist li:first-child'));

//   song.volume = 0.8;

//   volume.slider({
//     orientation: 'vertical',
//     range: 'max',
//     max: 100,
//     min: 1,
//     value: 80,
//     start: function(event, ui) {},
//     slide: function(event, ui) {
//       song.volume = ui.value / 100;
//     },
//     stop: function(event, ui) {},
//   });

//   $('.volumeIcon').click(function(e) {
//     e.preventDefault();
//     $('.volume').toggleClass('show');
//   });

//   // empty tracker slider
//   tracker.slider({

//     range: 'min',
//     min: 0,
//     max: 10,
//     start: function(event, ui) {},
//     slide: function(event, ui) {
//       song.currentTime = ui.value;
//     },
//     stop: function(event, ui) {}
//   });
// });


// audio 2 
var vid = "7O7C5Nfa6O4",
    audio_streams = {},
    audio_tag = document.getElementById('youtube');

fetch("https://"+vid+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D" + vid).then(response => {
    if (response.ok) {
        response.text().then(data => {

            var data = parse_str(data),
                streams = (data.url_encoded_fmt_stream_map + ',' + data.adaptive_fmts).split(',');

            streams.forEach(function(s, n) {
                var stream = parse_str(s),
                    itag = stream.itag * 1,
                    quality = false;
                console.log(stream);
                switch (itag) {
                    case 139:
                        quality = "48kbps";
                        break;
                    case 140:
                        quality = "128kbps";
                        break;
                    case 141:
                        quality = "256kbps";
                        break;
                }
                if (quality) audio_streams[quality] = stream.url;
            });

            console.log(audio_streams);

            audio_tag.src = audio_streams['128kbps'];
            audio_tag.play();
        })
    }
});

function parse_str(str) {
    return str.split('&').reduce(function(params, param) {
        var paramSplit = param.split('=').map(function(value) {
            return decodeURIComponent(value.replace('+', ' '));
        });
        params[paramSplit[0]] = paramSplit[1];
        return params;
    }, {});
}
