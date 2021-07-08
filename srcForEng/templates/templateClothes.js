export default function  templateClothes() {
    const Clothe = document.querySelector('.Clothe');

    Clothe.addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        const Clothes = document.querySelector('.Clothes');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        Clothes.classList.add('activeBar');
        templateClothes()
    })

    function templateClothes() {
        document.querySelector('.mainPage').style.display = 'none';
        let field = document.querySelector('.mainField');
        field.innerHTML = '';
        if(field.innerHTML === '') {
            field.innerHTML = `
        <div class="blocks">
            <div class="fistBlock">
                <div data-action="skirt" style="background-image: url('https://english-for-kids.netlify.app/static/media/skirt.b0ee2c91.jpg')" class="block"><span class="blocksName">skirt</span></div>
                <div data-action="pants" style="background-image: url('https://english-for-kids.netlify.app/static/media/pants.197f1069.jpg')" class="block"><span class="blocksName"> pants </span></div>
                <div data-action="blouse" style="background-image: url('https://english-for-kids.netlify.app/static/media/blouse.37a6d8fa.jpg')" class="block"><span class="blocksName"> blouse </span></div>
                <div data-action="dress" style="background-image: url('https://english-for-kids.netlify.app/static/media/dress.264b02bf.jpg')" class="block"><span class="blocksName"> dress </span></div>
            </div>
            <div class="secondBlock">
                <div data-action="boot" style="background-image: url('https://english-for-kids.netlify.app/static/media/boot.1a1ae11a.jpg')" class="block"><span class="blocksName">boot</span></div>
                <div data-action="shirt" style="background-image: url('https://english-for-kids.netlify.app/static/media/shirt.3bed1473.jpg')" class="block"><span class="blocksName">shirt </span></div>
                <div data-action="coat" style="background-image: url('https://english-for-kids.netlify.app/static/media/coat.8017b6ca.jpg')" class="block"><span class="blocksName"> coat </span></div>
                <div data-action="shoe" style="background-image: url('https://english-for-kids.netlify.app/static/media/shoe.5522fbfd.jpg')" class="block"><span class="blocksName"> shoe </span></div>
            </div>
        </div>
        `;
        }
    }
}
templateClothes()