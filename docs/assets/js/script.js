const btns = document.querySelectorAll('.nav');
const ecrans = document.querySelectorAll('.views');    
const header = document.querySelector('.header');

    btns.forEach(btn => 
    {
        btn.addEventListener('click',(e) => 
        {
        ecrans.forEach(ecran => {
            ecran.style.display = 'none';
        });
        const ecran = document.querySelector(`.${btn.id}`)
        ecran.style.display = 'block';
        if(ecran != document.querySelector('.Info'))
        {
            header.classList.add('Header__Noprofil');
            header.classList.remove('Header__profil');
        }
        else
        {
            header.classList.add('Header__profil');
            header.classList.remove('Header__Noprofil');
        }
        window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        })
        })
    })
