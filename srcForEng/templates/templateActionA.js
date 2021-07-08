export default function templateActionA() {
    const actionA = document.querySelector('.ActionA');

    actionA.addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        const ActionsA = document.querySelector('.ActionsA');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        ActionsA.classList.add('activeBar');
        templateActionA()
    })

    function templateActionA() {
        document.querySelector('.mainPage').style.display = 'none';
        let field = document.querySelector('.mainField');
        field.innerHTML = '';
        if(field.innerHTML === '') {
            field.innerHTML = `
        <div class="blocks">
            <div class="fistBlock">
                <div data-action="cry" style="background-image: url('https://english-for-kids.netlify.app/static/media/cry.26a84a2c.jpg')" class="block"><span class="blocksName">cry</span>
</div>
                <div data-action="dance" style="background-image: url('https://english-for-kids.netlify.app/static/media/dance.c70cc103.jpg')" class="block"><span class="blocksName"> dance </span></div>
                <div data-action="dive" style="background-image: url('https://english-for-kids.netlify.app/static/media/dive.41b7d509.jpg')" class="block"><span class="blocksName"> dive </span></div>
                <div data-action="draw" style="background-image: url('https://english-for-kids.netlify.app/static/media/draw.82be9665.jpg')" class="block"><span class="blocksName"> draw </span></div>
            </div>
            <div class="secondBlock">
                <div data-action="fish" style="background-image: url('https://english-for-kids.netlify.app/static/media/fish.27eb7746.jpg')" class="block"><span class="blocksName">fish</span></div>
                <div data-action="fly" style="background-image: url('https://english-for-kids.netlify.app/static/media/fly.6122fa03.jpg')" class="block"><span class="blocksName">fly </span></div>
                <div data-action="hug" style="background-image: url('https://english-for-kids.netlify.app/static/media/hug.9dda3c46.jpg')" class="block"><span class="blocksName"> hug </span></div>
                <div data-action="jump" style="background-image: url('https://english-for-kids.netlify.app/static/media/jump.ac945820.jpg')" class="block"><span class="blocksName"> jump </span></div>
            </div>
        </div>
        `;
        }
    }
}

templateActionA();
