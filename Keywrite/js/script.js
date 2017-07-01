    var inputWord = ''

    var randomWords = ['DESIGN!', 'AARDVARK', 'BABOON?', 'SHOULDER PADS', 'PEACH!', 'PINK?', 'GOLD.', 'DACHSHUND', 'POODLE,', 'BOREDOM..!', 'HAPPY!', 'WEIRD', 'CAVIAR?', 'SAUERKRAUT', 'MOIST', 'LOL', '?', '!']

    var randomWord = randomWords[ Math.floor(Math.random() * randomWords.length) ]


  var dictionary = {
   
    'zsedc' : 'A',
    'xdrfv' : 'A',
    'cftgb' : 'A',
    'vgyhn' : 'A',
    'bhujm' : 'A',
    'njik,' : 'A',
    'mkol.' : 'A',
    'zaqwsx' : 'B',
    'xswedc' : 'B',
    'cderfv' : 'B',
    'vfrtgb' : 'B',
    'bgtyhn' : 'B',
    'nhyujm' : 'B',
    'mjuik,' : 'B',
    ',kiol.' : 'B',
    'waz' : 'C',
    'esx' : 'C',
    'rdc' : 'C',
    'tfv' : 'C',
    'ygb' : 'C',
    'uhn' : 'C',
    'ijm' : 'C',
    'ok,' : 'C',
    'pl.' : 'C',
    'qwedxza' : 'D',
    'xswerfc' : 'D',
    'cdertgv' : 'D',
    'vfrtyhb' : 'D',
    'bgtyujn' : 'D',
    'nhyuikm' : 'D',
    'mjuiol,' : 'D',
    'ewqaszxc' : 'E',
    'rewsdxcv' : 'E',
    'tredfcvb' : 'E',
    'ytrfgvbn' : 'E',
    'uytghbnm' : 'E',
    'iuyhjnm,' : 'E',
    'oiujkm,.' : 'E',
    'ewqasz' : 'F',
    'rewsdx' : 'F',
    'tredfc' : 'F',
    'ytrfgv' : 'F',
    'uytghb' : 'F',
    'iuyhjn' : 'F',
    'oiujkm' : 'F',
    'poikl,' : 'F',
    'wqazxcfd' : 'G',
    'ewsxcvgf' : 'G',
    'redcvbhg' : 'G',
    'trfvbnjh' : 'G',
    'ytgbnmkj' : 'G',
    'uyhnm,lk' : 'G',
    'iujm,.;l' : 'G',
    'qazsedc' : 'H',
    'wsxdrfv' : 'H',
    'edcftgb' : 'H',
    'rfvgyhn' : 'H',
    'tgbhujm' : 'H',
    'yhnjik,' : 'H',
    'ujmkol.' : 'H',
    'qaz' : 'I',
    'wsx' : 'I',
    'edc' : 'I',
    'rfv' : 'I',
    'tgb' : 'I',
    'yhn' : 'I',
    'ujm' : 'I',
    'ik,' : 'I',
    'ol.' : 'I',
    'wsxz' : 'J',
    'edcx' : 'J',
    'rfvc' : 'J',
    'tgbv' : 'J',
    'yhnb' : 'J',
    'ujmn' : 'J',
    'ik,m' : 'J',
    'ol.,' : 'J',
    'qazsec' : 'K',
    'wsxdrv' : 'K',
    'edcftb' : 'K',
    'rfvgyn' : 'K',
    'tgbhu' : 'K',
    'tgbhum' : 'K',
    'yhnji,' : 'K',
    'ujmko.' : 'K',
    'qazxc' : 'L',
    'wsxcv' : 'L',
    'edcvb' : 'L',
    'rfvbn' : 'L',
    'tgbnm' : 'L',
    'yhnm,' : 'L',
    'ujm,.' : 'L',
    'zsedcftgb' : 'M',
    'xdrfvgyhn' : 'M',
    'cftgbhujm' : 'M',
    'vgyhnjik,' : 'M',
    'bhujmkol.' : 'M',
    'zsedcft' : 'N',
    'xdrfvgy' : 'N',
    'cftgbhu' : 'N',
    'vgyhnji' : 'N',
    'bhujmko' : 'N',
    'njik,lp' : 'N',
    'wazxde' : 'O',
    'esxcfr' : 'O',
    'rdcvgt' : 'O',
    'tfvbhy' : 'O',
    'ygbnju' : 'O',
    'uhnmki' : 'O',
    'ijm,lo' : 'O',
    'zaqws' : 'P',
    'xswed' : 'P',
    'cderf' : 'P',
    'vfrtg' : 'P',
    'bgtyh' : 'P',
    'nhyuj' : 'P',
    'mjuik' : 'P',
    ',kiol' : 'P',
    'awedxc' : 'Q',
    'serfcv' : 'Q',
    'drtgvb' : 'Q',
    'ftyhbn' : 'Q',
    'gyujnm' : 'Q',
    'huikm,' : 'Q',
    'jiol,.' : 'Q',
    'zaqwsc' : 'R',
    'xswedv' : 'R',
    'cderfb' : 'R',
    'vfrtgn' : 'R',
    'bgtyhm' : 'R',
    'nhyuj,' : 'R',
    'mjuik.' : 'R',
    'wqasdfcx' : 'S',
    'ewsdfgvc' : 'S',
    'redfghbv' : 'S',
    'trfghjnb' : 'S',
    'ytghjkmn' : 'S',
    'uyhjkl,m' : 'S',
    'qwesx' : 'T',
    'werdc' : 'T',
    'ertfv' : 'T',
    'rtygb' : 'T',
    'tyuhn' : 'T',
    'yuijm' : 'T',
    'uiok,' : 'T',
    'uiok,' : 'T',
    'iopl.' : 'T',
    'qazxde' : 'U',
    'wsxcfr' : 'U',
    'edcvgt' : 'U',
    'rfvbhy' : 'U',
    'tgbnju' : 'U',
    'yhnmki' : 'U',
    'ujm,lo' : 'U',
    'qazse' : 'V',
    'wsxdr' : 'V',
    'edcft' : 'V',
    'rfvgy' : 'V',
    'tgbhu' : 'V',
    'yhnji' : 'V',
    'ujmko' : 'V',
    'ik,lp' : 'V',
    'qazsedcft' : 'W',
    'wsxdrfvgy' : 'W',
    'edcftgbhu' : 'W',
    'rfvgyhnji' : 'W',
    'tgbhujmko' : 'W',
    'yhnjik,lp' : 'W',
    'qsezc' : 'X',
    'wdrxv' : 'X',
    'eftcb' : 'X',
    'rgyvn' : 'X',
    'thubm' : 'X',
    'yjin,' : 'X',
    'ukom.' : 'X',
    'qesz' : 'Y',
    'wrdx' : 'Y',
    'etfc' : 'Y',
    'rygv' : 'Y',
    'tuhb' : 'Y',
    'yijn' : 'Y',
    'uokm' : 'Y',
    'ipl,' : 'Y',
    'qweszxc' : 'Z',
    'werdxcv' : 'Z',
    'ertfcvb' : 'Z',
    'rtygvbn' : 'Z',
    'tyuhbnm' : 'Z',
    'yuijnm,' : 'Z',
    'uiokm,.' : 'Z',
    'qazc' : '!',
    'wsxv' : '!',
    'edcb' : '!',
    'rfvn' : '!',
    'tgbm' : '!',
    'yhn,' : '!',
    'ujm.' : '!',
    'qwesxv' : '?',
    'werdcb' : '?',
    'ertfvn' : '?',
    'rtygbm' : '?',
    'tyuhn,' : '?',
    'yuijm.' : '?',
    'q' : '.',
    'w' : '.',
    'e' : '.',
    'r' : '.',
    't' : '.',
    'y' : '.',
    'u' : '.',
    'i' : '.',
    'o' : '.',
    'p' : '.',
    'a' : '.',
    's' : '.',
    'd' : '.',
    'f' : '.',
    'g' : '.',
    'h' : '.',
    'j' : '.',
    'k' : '.',
    'l' : '.',
    'z' : '.',
    'x' : '.',
    'c' : '.',
    'v' : '.',
    'b' : '.',
    'n' : '.',
    'm' : '.',
    'qa' : ',',
    'ws' : ',',
    'ed' : ',',
    'rf' : ',',
    'tg' : ',',
    'yh' : ',',
    'uj' : ',',
    'ik' : ',',
    'ol' : ',',
    'az' : ',',
    'sx' : ',',
    'dc' : ',',
    'fv' : ',',
    'gb' : ',',
    'hn' : ',',
    'jm' : ',',
    'k,' : ',',
    'l.' : ','


}

$(document).ready(function() {
  var randomWord = randomFrom(randomWords);

    $("#title").append(randomWord);

 var entryCount = 0;
 var displayCount = 0;


 $( function() {
     $( "#draggable" ).draggable();
   } );



  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    saveCharacter(char);
    //createElement(char);
  });

  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8) {
      e.preventDefault();
      entryCount ++;
      displayCount --;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }

    if (e.which == 13) {
        e.preventDefault();
        entryCount ++;
        displayCount --;
        console.log(entryCount + e.which + displayCount);
        var didMatch = searchForWord(inputWord);
        if(didMatch){
            bool = false;
            $("body").css("background-color", "#ffdd33");
        } else{
            bool = true;
            $("body").css("background-color", "#BE45CC");

        }

        inputWord = "";
    }

  });

});

var bool = false;


function deleteElement() {
  $(".replaced").last().remove();
  inputWord = '';
}

function saveCharacter (c) {
  inputWord = inputWord + c;
  // searchForWord(inputWord);
  console.log(inputWord);
}

function randomFrom(array) {
  return array[ Math.floor(Math.random() * array.length) ];
}

function searchForWord(w) {
  var word = Object.keys(dictionary)
  console.log(Object.keys(dictionary))
  var cursor = $('#cursor');

  for(var i = 0; i < word.length; i++) {
    if(superMatch(word[i], w)) {
      var newWord = dictionary [ word[i]  ];
      bool = true;
      // console.log(newWord)
      // cursor.before('<span class="replaced">replaced</span>')
      console.log('replacing ' + w + ' with ' + newWord);
      cursor.before('<span class="replaced">' + newWord + '</span>')
      inputWord = "";
      return true;
      }
    }
    return false;
}

function superMatch(word1, word2){
    // return true or false

    return word1 == word2;
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

// function createElement(k) {
//   var elem = $('#cursor');
//   if (k == "a" || k == "A") { elem.before('<span class="inner">A</span>'); }
//   if (k == "b" || k == "B") { elem.before('<span class="inner">B</span>'); }
//   if (k == "c" || k == "C") { elem.before('<span class="inner"><img src="http://a.deviantart.net/avatars/i/n/infinitenyancatplz.gif"></span>'); }
//   if (k == "d" || k == "D") { elem.before('<span class="inner">D</span>'); }
//   if (k == "e" || k == "E") { elem.before('<span class="inner">E</span>'); }
//   if (k == "f" || k == "F") { elem.before('<span class="inner">F</span>'); }
//   if (k == "g" || k == "G") { elem.before('<span class="inner">G</span>'); }
//   if (k == "h" || k == "H") { elem.before('<span class="inner">H</span>'); }
//   if (k == "i" || k == "I") { elem.before('<span class="inner">I</span>'); }
//   if (k == "j" || k == "J") { elem.before('<span class="inner">J</span>'); }
//   if (k == "k" || k == "K") { elem.before('<span class="inner">K</span>'); }
//   if (k == "l" || k == "L") { elem.before('<span class="inner">L</span>'); }
//   if (k == "m" || k == "M") { elem.before('<span class="inner">M</span>'); }
//   if (k == "n" || k == "N") { elem.before('<span class="inner">N</span>'); }
//   if (k == "o" || k == "O") { elem.before('<span class="inner">O</span>'); }
//   if (k == "p" || k == "P") { elem.before('<span class="inner">P</span>'); }
//   if (k == "q" || k == "Q") { elem.before('<span class="inner">Q</span>'); }
//   if (k == "r" || k == "R") { elem.before('<span class="inner">R</span>'); }
//   if (k == "s" || k == "S") { elem.before('<span class="inner">S</span>'); }
//   if (k == "t" || k == "T") { elem.before('<span class="inner">T</span>'); }
//   if (k == "u" || k == "U") { elem.before('<span class="inner">U</span>'); }
//   if (k == "v" || k == "V") { elem.before('<span class="inner">V</span>'); }
//   if (k == "w" || k == "W") { elem.before('<span class="inner">W</span>'); }
//   if (k == "x" || k == "X") { elem.before('<span class="inner">X</span>'); }
//   if (k == "y" || k == "Y") { elem.before('<span class="inner">Y</span>'); }
//   if (k == "z" || k == "Z") { elem.before('<span class="inner">Z</span>'); }
//   if (k == " ") { elem.before('<span class="inner">&nbsp;</span>') };
// }


























