export default function  templateEmotions() {
    const Emotion = document.querySelector('.Emotion');

    Emotion.addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        const Emotions = document.querySelector('.Emotions');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        Emotions.classList.add('activeBar');
        templateEmotions()
    })

    function templateEmotions() {
        document.querySelector('.mainPage').style.display = 'none';
        let field = document.querySelector('.mainField');
        field.innerHTML = '';
        if(field.innerHTML === '') {
            field.innerHTML = `
        <div class="blocks">
            <div class="fistBlock">
                <div data-action="sad" style="background-image: url('https://english-for-kids.netlify.app/static/media/sad.5942f979.jpg')" class="block"><span class="blocksName">sad</span></div>
                <div data-action="angry" style="background-image: url('https://english-for-kids.netlify.app/static/media/angry.66b1074a.jpg')" class="block"><span class="blocksName"> angry </span></div>
                <div data-action="happy" style="background-image: url('https://english-for-kids.netlify.app/static/media/happy.996126dd.jpg')" class="block"><span class="blocksName"> happy </span></div>
                <div data-action="tired" style="background-image: url('https://english-for-kids.netlify.app/static/media/tired.a169662a.jpg')" class="block"><span class="blocksName"> tired </span></div>
            </div>
            <div class="secondBlock">
                <div data-action="surprised" style="background-image: url('https://english-for-kids.netlify.app/static/media/surprised.0667ed30.jpg')" class="block"><span class="blocksName">surprised</span></div>
                <div data-action="scared" style="background-image: url('https://english-for-kids.netlify.app/static/media/scared.e2747b49.jpg')" class="block"><span class="blocksName">scared </span></div>
                <div data-action="smile" style="background-image: url('https://english-for-kids.netlify.app/static/media/smile.f55cb470.jpg')" class="block"><span class="blocksName"> smile </span></div>
                <div data-action="laugh" style="background-image: url('https://english-for-kids.netlify.app/static/media/laugh.8bbca0b9.jpg')" class="block"><span class="blocksName"> laugh </span></div>
            </div>
        </div>
        `;
        }
    }
}
templateEmotions()