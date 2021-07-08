import './styles.css';
import PlayAudio from './audio/audio.js';
import templateActionA from './templates/templateActionA';
import templateActionB from './templates/templateActionB';
import templateActionC from './templates/templateActionC';
import templateAdjectives from "./templates/templateAdjectives";
import templateAnimalsA from "./templates/templateAnimalsA";
import templateAnimalsB from "./templates/templateAnimalsB";
import templateClothes from "./templates/templateClothes";
import templateEmotions from "./templates/templateEmotions";
import menu from './menu/menu';

const mainField = document.querySelector('.mainField');

new PlayAudio(mainField);
new SwapBtn(mainField);
