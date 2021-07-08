export default function templateActionB () {
   const actionB = document.querySelector('.ActionB');

    actionB.addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        const ActionsB = document.querySelector('.ActionsB');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        ActionsB.classList.add('activeBar');
        templateActionB()
    })

    function templateActionB() {
        document.querySelector('.mainPage').style.display = 'none';
        let field = document.querySelector('.mainField');
        field.innerHTML = '';
        if(field.innerHTML === '') {
            field.innerHTML = `
        <div class="blocks">
            <div class="fistBlock">
                <div data-action="open" style="background-image: url('https://english-for-kids.netlify.app/static/media/open.191b88af.jpg')" class="block"><span class="blocksName">open</span></div>
                <div data-action="play" style="background-image: url('https://english-for-kids.netlify.app/static/media/play.75cbc10c.jpg')" class="block"><span class="blocksName"> play </span></div>
                <div data-action="point" style="background-image: url('https://english-for-kids.netlify.app/static/media/point.ba50996a.jpg')" class="block"><span class="blocksName"> point </span></div>
                <div data-action="ride" style="background-image: url('https://english-for-kids.netlify.app/static/media/ride.b7a77474.jpg')" class="block"><span class="blocksName"> ride </span></div>
            </div>
            <div class="secondBlock">
                <div data-action="run" style="background-image: url('https://english-for-kids.netlify.app/static/media/run.0e8d157f.jpg')" class="block"><span class="blocksName">run</span></div>
                <div data-action="sing" style="background-image: url('https://english-for-kids.netlify.app/static/media/sing.d2d52786.jpg')" class="block"><span class="blocksName">sing </span></div>
                <div data-action="skip" style="background-image: url('https://english-for-kids.netlify.app/static/media/skip.081bf61e.jpg')" class="block"><span class="blocksName"> skip </span></div>
                <div data-action="swim" style="background-image: url('https://english-for-kids.netlify.app/static/media/swim.bddf0687.jpg')" class="block"><span class="blocksName"> swim </span></div>
            </div>
        </div>
        `;
        }
    }
}

templateActionB();