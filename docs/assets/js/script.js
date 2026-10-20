"use strict";

const btns = document.querySelectorAll('.nav');
const ecrans = document.querySelectorAll('.views');    
const header = document.querySelector('.header');
const main = document.querySelector('main');
const butonNav=document.querySelector(".menu__nav");
const nav = document.querySelector('nav');

    btns.forEach(btn => 
    {

        btn.addEventListener('click',(e) => 
        {
            btns.forEach(b=>{
                if(b.classList.contains("active"))
                {
                    b.classList.remove("active");
                }
            })
            btn.classList.add("active");
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
            main.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            })
        })
    })
butonNav.addEventListener("click",()=>{
    nav.classList.toggle("active");
    butonNav.classList.toggle("active");
})