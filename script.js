let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.contols .active').classList.remove('active');
        btn.classList.add('active');

    })
})
