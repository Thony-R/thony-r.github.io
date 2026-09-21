const btns = document.querySelectorAll('.nav');
const ecrans = document.querySelectorAll('.views');

    btns.forEach(btn => 
    {
        btn.addEventListener('click',(e) => 
        {
        ecrans.forEach(ecran => {
            ecran.style.display = 'none';
        });
        const ecran = document.querySelector(`.${btn.id}`)
        ecran.style.display = 'block';
        window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        })
        })
    })
