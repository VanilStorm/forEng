export default function menu () {
    const menuBar =  document.querySelector('.menuBar');
    document.querySelector('.btnMenu').addEventListener('click', () => {
        menuBar.classList.add('open');
    })
    document.querySelector('.close').addEventListener('click', () => {
            menuBar.classList.remove('open')
    })

    //menuList
    document.querySelector('.main').addEventListener('click', () => {
        document.querySelector('.mainPage').style.display = 'block';
        let field = document.querySelector('.mainField');
        field.innerHTML = '';
        const sections = document.querySelectorAll('.section');
        const main = document.querySelector('.main');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        main.classList.add('activeBar');
    })

    //ActionsA
    document.querySelector('.ActionsA').addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        document.querySelector('.ActionsA').classList.add('activeBar');

        function templateActionA() {
            document.querySelector('.mainPage').style.display = 'none';
            let field = document.querySelector('.mainField');
            field.innerHTML = '';
            if(field.innerHTML === '') {
                field.innerHTML = `
        <div class="blocks">
            <div class="fistBlock">
                <div data-action="cry" style="background-image: url('https://english-for-kids.netlify.app/static/media/cry.26a84a2c.jpg')" class="block"><span class="blocksName">cry</span></div>
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
        templateActionA();
    })
    //ActionsB
    document.querySelector('.ActionsB').addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        document.querySelector('.ActionsB').classList.add('activeBar');

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
        templateActionB();
    })
    //ActionsC
    document.querySelector('.ActionsC').addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        document.querySelector('.ActionsC').classList.add('activeBar');

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
        templateActionC();
    })
    //Adjectives
    document.querySelector('.Adjectives').addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        document.querySelector('.Adjectives').classList.add('activeBar');

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
        templateAdjectives();
    })

    //AnimalsA
    document.querySelector('.AnimalsA').addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        document.querySelector('.AnimalsA').classList.add('activeBar');

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
        templateAnimalsA();
    })
    //AnimalsB
    document.querySelector('.AnimalsB').addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        document.querySelector('.AnimalsB').classList.add('activeBar');

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
        templateAnimalsB();
    });

    //Clothes
    document.querySelector('.Clothes').addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        document.querySelector('.Clothes').classList.add('activeBar');

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
        templateClothes();
    })
    //Emotions
    document.querySelector('.Emotions').addEventListener('click', () => {
        const sections = document.querySelectorAll('.section');
        for (const section of sections) {
            section.classList.remove('activeBar');
        }
        document.querySelector('.Emotions').classList.add('activeBar');

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
        templateEmotions();
    })
}
menu()