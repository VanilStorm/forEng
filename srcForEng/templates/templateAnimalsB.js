export default function  templateAnimalsB() {
    const AnimalB = document.querySelector('.AnimalB');

    AnimalB.addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        const AnimalsB = document.querySelector('.AnimalsB');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        AnimalsB.classList.add('activeBar');
        templateAnimalsB()
    })

    function templateAnimalsB() {
        document.querySelector('.mainPage').style.display = 'none';
        let field = document.querySelector('.mainField');
        field.innerHTML = '';
        if(field.innerHTML === '') {
            field.innerHTML = `
        <div class="blocks">
            <div class="fistBlock">
                <div data-action="bird" style="background-image: url('https://english-for-kids.netlify.app/static/media/bird.f0a80efa.jpg')" class="block"><span class="blocksName">bird</span></div>
                <div data-action="fishR" style="background-image: url('https://english-for-kids.netlify.app/static/media/fish1.296cfcd4.jpg')" class="block"><span class="blocksName"> fish </span></div>
                <div data-action="frog" style="background-image: url('https://english-for-kids.netlify.app/static/media/frog.e8a07dca.jpg')" class="block"><span class="blocksName"> frog </span></div>
                <div data-action="giraffe" style="background-image: url('https://english-for-kids.netlify.app/static/media/giraffe.32ab22c7.jpg')" class="block"><span class="blocksName"> giraffe </span></div>
            </div>
            <div class="secondBlock">
                <div data-action="lion" style="background-image: url('https://english-for-kids.netlify.app/static/media/lion.273c0650.jpg')" class="block"><span class="blocksName">lion</span></div>
                <div data-action="mouse" style="background-image: url('https://english-for-kids.netlify.app/static/media/mouse.a73259d9.jpg')" class="block"><span class="blocksName">mouse </span></div>
                <div data-action="turtle" style="background-image: url('https://english-for-kids.netlify.app/static/media/turtle.b1e5849e.jpg')" class="block"><span class="blocksName"> turtle </span></div>
                <div data-action="dolphin" style="background-image: url('https://english-for-kids.netlify.app/static/media/dolphin.905447d1.jpg')" class="block"><span class="blocksName"> dolphin </span></div>
            </div>
        </div>
        `;
        }
    }
}
templateAnimalsB()