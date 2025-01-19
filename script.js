
let keys = {};
keys.c = 'C Major, C, D, E, F, G, A, B, C';
keys.am = 'a minor, A, B, C, D, E, F, G, A';
keys.g = 'G Major, G, A, B, C, D, E, F&sharp;, G';
keys.em = 'e minor, E, F&sharp;, G, A, B, C, D, E';
keys.d = 'D Major, D, E, F&sharp;, G, A, B, C&sharp;, D';
keys.bm = 'b minor, B, C&sharp;, D, E, F&sharp;, G, A, B';
keys.a = 'A Major, A, B, C&sharp;, D, E, F&sharp;, G&sharp;, A';
keys.fsm = 'f&sharp; minor, F&sharp;, G&sharp;, A, B, C&sharp;, D, E, F&sharp;';
keys.e = 'E Major, E, F&sharp;, G&sharp;, A, B, C&sharp;, D&sharp;, E';
keys.csm = 'c&sharp; minor, C&sharp;, D&sharp;, E, F&sharp;, G&sharp;, A, B, C&sharp;';
keys.b = 'B Major, B, C&sharp;, D&sharp;, E, F&sharp;, G&sharp;, A&sharp;, B';
keys.gsm = 'g&sharp; minor, G&sharp;, A&sharp;, B, C&sharp;, D&sharp;, E, F&sharp;, G&sharp;';
keys.f = 'F Major, F, G, A, B&flat;, C, D, E, F';
keys.dm = 'd minor, D, E, F, G, A, B&flat;, C, D';
keys.bf = 'B&flat; Major, B&flat;, C, D, E&flat;, F, G, A, B&flat;';
keys.gm = 'g minor, G, A, B&flat;, C, D, E&flat;, F, G';
keys.ef = 'E&flat; Major, E&flat;, F, G, A&flat;, B&flat;, C, D, E&flat;';
keys.cm = 'c minor, C, D, E&flat;, F, G, A&flat;, B&flat;, C';

keys.af = 'A&flat; Major, A&flat;, B&flat;, C, D&flat;, E&flat;, F, G, A&flat;';
keys.fm = 'f minor, F, G, A&flat;, B&flat;, C, D&flat;, E&flat;, F';

keys.df = 'D&flat; Major, D&flat;, E&flat;, F, G&flat;, A&flat;, B&flat;, C, D&flat;';
keys.bfm = 'b&flat; minor, B&flat;, C, D&flat;, E&flat;, F, G&flat;, A&flat;, B&flat;';

keys.gf = 'G&flat; Major, G&flat;, A&flat;, B&flat;, C&flat;, D&flat;, E&flat;, F, G&flat;';
keys.efm = 'e&flat; minor, E&flat;, F, G&flat;, A&flat;, B&flat;, C&flat;, D&flat;, E&flat;';


function is_pentatonic() {
    let item = document.getElementById('btn-pentatonic');
    return item.classList.contains('on');
}

function set_pentatonic(truthy) {
    let item = document.getElementById('btn-pentatonic');
    if(truthy)
      item.classList.add('on');
    else
      item.classList.remove('on');
}

function is_triads() {
    let item = document.getElementById('btn-triads');
    return item.classList.contains('on');
}

function set_triads(truthy) {
    let item = document.getElementById('btn-triads');
    if(truthy)
      item.classList.add('on');
    else
      item.classList.remove('on');
}

function is_minor() {
    let item = document.getElementById('btn-minor');
    return item.classList.contains('on');
}

function is_major() {
  return false == is_minor();
}

function set_minor(truthy) {
    let item = document.getElementById('btn-minor');
    if(truthy)
      item.classList.add('on');
    else
      item.classList.remove('on');
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function board_toggle_class(css_class, sender) {


    if (sender.classList.contains('on'))
        sender.classList.remove('on');
    else {
        set_pentatonic(false);
        set_triads(false);
        // set_minor(false);
        sender.classList.add('on');
    }



    let major_key = 'C';
    let current_key = document.querySelector('.selected');
    if (current_key) {
        major_key = current_key.getAttribute('major');
    }

    let params = `#key=${capitalizeFirstLetter(major_key)}`;
    let pattern_params = `#key=${capitalizeFirstLetter(major_key)}&pattern`;

    if (is_pentatonic()) {
        params += '&pentatonic';
        pattern_params += '&pentatonic';
    }

    if (is_triads()) {
        params += '&triads';
        pattern_params += '&triads';
    }

    // if(is_minor() ) {
    //   params += '&minor';
    //   pattern_params += '&minor';
    // }


    let notes_frame = document.getElementById('notes_frame');
    notes_frame.src = notes_frame.src.split('#')[0] + params;

    let pattern_frame = document.getElementById('pattern_frame');
    pattern_frame.src = pattern_frame.src.split('#')[0] + pattern_params;

}

    function on_key_click_2(major_key, minor_key, sender) {
        console.log(`1on_key_click_2 ${major_key} ${minor_key}`, sender);

        let _keys = ['c', 'g', 'd', 'a', 'e', 'b', 'f',
                   'bf', 'ef', 'af', 'df', 'gf'];

          let minor = document.getElementById('btn-minor');
          // let is_major = true;
          //if(minor.classList.contains('on')) {
          if(is_minor() ) {
            //is_major = false;
            document.getElementById('major_header').classList.add('hidden');
            document.getElementById('minor_header').classList.remove('hidden');
          }
          else {
            document.getElementById('major_header').classList.remove('hidden');
            document.getElementById('minor_header').classList.add('hidden');
          }

         let _newkey = is_minor() ? minor_key : major_key;
         if(keys[_newkey]) {
           let k = keys[ _newkey ].split(', ');

           // let pentatonic = document.getElementById('btn-pentatonic');
           // let is_5 = pentatonic.classList.contains('on');
           update_scale_2(k, is_major(), is_pentatonic());
         }


          // let capitalizeFirstLetter = function (string) {
          //   return string.charAt(0).toUpperCase() + string.slice(1);
          // }


      let params = `#key=${capitalizeFirstLetter(major_key)}`;
      let pattern_params = `#key=${capitalizeFirstLetter(major_key)}&pattern`;
      if(is_pentatonic() ) {
        params += '&pentatonic';
        pattern_params += '&pentatonic';
      }

      if(is_triads() ) {
        params += '&triads';
        pattern_params += '&triads';
      }
          let notes_frame = document.getElementById('notes_frame');
          notes_frame.src =  notes_frame.src.split('#')[0] + params;

          let pattern_frame = document.getElementById('pattern_frame');
          pattern_frame.src =  pattern_frame.src.split('#')[0] + pattern_params;


        let previous = document.querySelector('.selected');
        if(previous)
          previous.className = '';

        sender.classList.add('selected');
        if(is_minor() ) {
          sender.classList.add('selected-as-minor');
        }
        
    }

    
    function update_scale_2(keys, is_major, is_5) {

      for (let i = 1; i <= 13; ++i) {
          let c = document.getElementById('sc-' + i);
          c.innerHTML = '';
          c.classList.remove('penta-omit');

      }

      let k = keys;
      let _ = (id) => { return document.getElementById(id); } ;
      _('sc-name' ).innerHTML = k[0]; 

      if(is_major) {
        _('sc-1' ).innerHTML = k[1]; 
        _('sc-3' ).innerHTML = k[2]; 
        _('sc-5' ).innerHTML = k[3]; 
        _('sc-6' ).innerHTML = k[4]; 
        _('sc-8' ).innerHTML = k[5]; 
        _('sc-10').innerHTML = k[6]; 
        _('sc-12').innerHTML = k[7]; 
        _('sc-13').innerHTML = k[8]; 

        if(is_5) {
          _('sc-6' ).classList.add('penta-omit');
          _('sc-12' ).classList.add('penta-omit');
        }
      }
      else {
        _('sc-1' ).innerHTML = k[1]; 
        _('sc-3' ).innerHTML = k[2]; 
        _('sc-4' ).innerHTML = k[3]; 
        _('sc-6' ).innerHTML = k[4]; 
        _('sc-8' ).innerHTML = k[5]; 
        _('sc-9' ).innerHTML = k[6]; 
        _('sc-11').innerHTML = k[7]; 
        _('sc-13').innerHTML = k[8]; 
        if(is_5) {
          _('sc-3' ).classList.add('penta-omit');
          _('sc-9' ).classList.add('penta-omit');
        }
      }

    }


    function on_load() {
      
        on_key_click_2('c', 'am', document.getElementById('btn-c'));
    }

