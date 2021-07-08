export default function  templateAnimalsA() {
    const AnimalA = document.querySelector('.AnimalA');

    AnimalA.addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        const AnimalsA = document.querySelector('.AnimalsA');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        AnimalsA.classList.add('activeBar');
        templateAnimalsA()
    })

    function templateAnimalsA() {
        document.querySelector('.mainPage').style.display = 'none';
        let field = document.querySelector('.mainField');
        field.innerHTML = '';
        if(field.innerHTML === '') {
            field.innerHTML = `
        <div class="blocks">
            <div class="fistBlock">
                <div data-action="cat" style="background-image: url('https://english-for-kids.netlify.app/static/media/cat.e91220bb.jpg')" class="block"><span class="blocksName">cat</span></div>
                <div data-action="chick" style="background-image: url('https://english-for-kids.netlify.app/static/media/chick.11bf9adb.jpg')" class="block"><span class="blocksName"> chick </span></div>
                <div data-action="chicken" style="background-image: url('https://english-for-kids.netlify.app/static/media/chicken.915430df.jpg')" class="block"><span class="blocksName"> chicken </span></div>
                <div data-action="dog" style="background-image: url('https://english-for-kids.netlify.app/static/media/dog.109811ba.jpg')" class="block"><span class="blocksName"> dog </span></div>
            </div>
            <div class="secondBlock">
                <div data-action="horse" style="background-image: url('https://english-for-kids.netlify.app/static/media/horse.8a825b3b.jpg')" class="block"><span class="blocksName">horse</span></div>
                <div data-action="pig" style="background-image: url('https://english-for-kids.netlify.app/static/media/pig.72810927.jpg')" class="block"><span class="blocksName">pig </span></div>
                <div data-action="rabbit" style="background-image: url('https://english-for-kids.netlify.app/static/media/rabbit.7242c16a.jpg')" class="block"><span class="blocksName"> rabbit </span></div>
                <div data-action="sheep" style="background-image: url('https://english-for-kids.netlify.app/static/media/sheep.8d2deb43.jpg')" class="block"><span class="blocksName"> sheep </span></div>
            </div>
        </div>
        `;
        }
    }
}

templateAnimalsA();