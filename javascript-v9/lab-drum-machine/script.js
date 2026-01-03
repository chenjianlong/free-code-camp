const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'audio/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'audio/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'audio/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'audio/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'audio/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'audio/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'audio/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'audio/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'audio/Cev_H2.mp3'
  }];
  
  const bankTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'audio/Chord_1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'audio/Chord_2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'audio/Chord_3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'audio/Give_us_a_light.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'audio/Dry_Ohh.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'audio/Bld_H1.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'audio/punchy_kick_1.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'audio/side_stick_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'audio/Brk_Snr.mp3'
  }];
  
  const state = {
    power: true,
    display: ' ',
    currentPadBank: bankOne,
    currentPadBankId: 'Heater Kit',
    sliderVal: 0.3
  };
  
  const display = document.getElementById('display');
  function setDisplay(text) {
    state.display = text;
    display.innerText = text;
  };
  
  function adjustVolume(e) {
    if (state.power) {
      state.sliderVal = e.target.value;
      setDisplay("Volume: ".concat(Math.round(e.target.value * 100)));
      setTimeout(function () {
        return setDisplay(' ');
      }, 1000);
      document.querySelectorAll('.clip').forEach(function (sound) {
        sound.volume = state.sliderVal;
      });
    }
  };
  
  function activatePad(pad) {
    pad.classList.add('active');
    setTimeout(function () {
      return pad.classList.remove('active');
    }, 100);
  };
  
  function playSound(id, name) {
    if (!state.power) return;
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
    activatePad(sound.parentNode);
    setDisplay(name);
  };
  
  function renderPadBank() {
    const padBank = document.querySelector('#pad-bank');
    padBank.innerHTML = '';
    state.currentPadBank.forEach(function (drum) {
      const pad = document.createElement('div');
      pad.classList.add('drum-pad');
      pad.id = drum.id;
      pad.innerText = drum.keyTrigger;
      const audio = document.createElement('audio');
      audio.classList.add('clip');
      audio.id = drum.keyTrigger;
      audio.src = drum.url;
      pad.appendChild(audio);
      pad.addEventListener('click', function () {
        return playSound(drum.keyTrigger, drum.id.replace(/-/g, ' '));
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === drum.keyTrigger.toLowerCase()) playSound(drum.keyTrigger, drum.id.replace(/-/g, ' '));
      });
      padBank.appendChild(pad);
    });
  };
  
  function powerControl() {
    state.power = !state.power;
    document.getElementById('power-status').textContent = state.power ? 'On' : 'Off';
    setDisplay('');
    const powerSlider = document.querySelector('.power-control .select .inner');
    powerSlider.style.left = state.power ? 'calc(100% - 18px)' : '0';
  };
  
  function selectBank() {
    if (!state.power) return;
    setDisplay(' ');
    state.currentPadBank = state.currentPadBankId === 'Heater Kit' ? bankTwo : bankOne;
    state.currentPadBankId = state.currentPadBankId === 'Heater Kit' ? 'Smooth Piano Kit' : 'Heater Kit';
    renderPadBank();
    document.getElementById('current-bank').textContent = state.currentPadBankId === 'Heater Kit' ? 'Heater Kit' : 'Smooth Piano Kit';
    const bankControl = document.querySelector('.bank-control .select .inner');
    bankControl.style.left = state.currentPadBankId === 'Heater Kit' ? 'calc(100% - 18px)' : '0';
  };
  
  document.querySelector('.power-control').addEventListener('click', powerControl);
  document.querySelector('.bank-control').addEventListener('click', selectBank);
  document.querySelector('.volume-slider input').addEventListener('input', adjustVolume);
  renderPadBank();