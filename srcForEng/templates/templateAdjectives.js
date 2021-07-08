export default function  templateAdjectives() {
    const Adjective = document.querySelector('.Adjective');

    Adjective.addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        const Adjectives = document.querySelector('.Adjectives');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        Adjectives.classList.add('activeBar');
        templateAdjectives()
    })

    function templateAdjectives() {
        document.querySelector('.mainPage').style.display = 'none';
        let field = document.querySelector('.mainField');
        field.innerHTML = '';
        if(field.innerHTML === '') {
            field.innerHTML = `
        <div class="blocks">
            <div class="fistBlock">
                <div data-action="big" style="background-image: url('https://english-for-kids.netlify.app/static/media/big.15366658.jpg')" class="block"><span class="blocksName">big</span></div>
                <div data-action="small" style="background-image: url('https://english-for-kids.netlify.app/static/media/small.a9f7a59d.jpg')" class="block"><span class="blocksName"> small </span></div>
                <div data-action="fast" style="background-image: url('https://english-for-kids.netlify.app/static/media/fast.2d5d071e.jpg')" class="block"><span class="blocksName"> fast </span></div>
                <div data-action="slow" style="background-image: url('https://english-for-kids.netlify.app/static/media/slow.7bbcaa16.jpg')" class="block"><span class="blocksName"> slow </span></div>
            </div>
            <div class="secondBlock">
                <div data-action="friendly" style="background-image: url('https://english-for-kids.netlify.app/static/media/friendly.ebfd8e9a.jpg')" class="block"><span class="blocksName">friendly</span></div>
                <div data-action="unfriendly" style="background-image: url('https://english-for-kids.netlify.app/static/media/unfriendly.9bb158bd.jpg')" class="block"><span class="blocksName">unfriendly </span></div>
                <div data-action="young" style="background-image: url('https://english-for-kids.netlify.app/static/media/young.7498933a.jpg')" class="block"><span class="blocksName"> young </span></div>
                <div data-action="old" style="background-image: url('https://english-for-kids.netlify.app/static/media/old.76174203.jpg')" class="block"><span class="blocksName"> old </span></div>
            </div>
        </div>
        `;
        }
    }
}

templateAdjectives();