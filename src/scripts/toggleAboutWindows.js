const closeAboutButton = document.querySelectorAll('.closeAbout');
    const aboutWindow = document.getElementById('about')
    closeAboutButton.forEach((close)=>{
        close.addEventListener('click',()=>{
        aboutWindow.classList.add("hidden")
        })
    })