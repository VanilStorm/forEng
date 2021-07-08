export default function  templateActionC() {
    const actionC = document.querySelector('.ActionC');

    actionC.addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        const ActionsC = document.querySelector('.ActionsC');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        ActionsC.classList.add('activeBar');
        templateActionC()
    })

    function templateActionC() {
        document.querySelector('.mainPage').style.display = 'none';
        let field = document.querySelector('.mainField');
        field.innerHTML = '';
        if(field.innerHTML === '') {
            field.innerHTML = `
        <div class="blocks">
            <div class="fistBlock">
                <div data-action="argue" style="background-image: url('https://english-for-kids.netlify.app/static/media/argue.06b9a73a.jpg')" class="block"><span class="blocksName">argue</span></div>
                <div data-action="build" style="background-image: url('https://english-for-kids.netlify.app/static/media/build.0ddc52ca.jpg')" class="block"><span class="blocksName"> build </span></div>
                <div data-action="carry" style="background-image: url('https://english-for-kids.netlify.app/static/media/carry.4e29617e.jpg')" class="block"><span class="blocksName"> carry </span></div>
                <div data-action="catch" style="background-image: url('https://english-for-kids.netlify.app/static/media/catch.02ee0391.jpg')" class="block"><span class="blocksName"> catch </span></div>
            </div>
            <div class="secondBlock">
                <div data-action="drive" style="background-image: url('https://english-for-kids.netlify.app/static/media/drive.7756db52.jpg"')" class="block"><span class="blocksName">drive</span></div>
                <div data-action="drop" style="background-image: url('https://english-for-kids.netlify.app/static/media/drop.8cb9f43a.jpg')" class="block"><span class="blocksName">drop </span></div>
                <div data-action="pull" style="background-image: url('https://english-for-kids.netlify.app/static/media/pull.958b53a6.jpg')" class="block"><span class="blocksName"> pull </span></div>
                <div data-action="push" style="background-image: url('https://english-for-kids.netlify.app/static/media/push.f5183491.jpg')" class="block"><span class="blocksName"> push </span></div>
            </div>
        </div>
        `;
        }
    }
}

templateActionC();