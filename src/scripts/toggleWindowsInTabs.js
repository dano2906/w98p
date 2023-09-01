const toggleProjects = document.getElementById('toggleProjects')
    const projectsWindow = document.getElementById('projects')
    const toggleAbout = document.getElementById('toggleAbout')
    const aboutWindow = document.getElementById('about')

    toggleProjects.addEventListener('click',()=>{
        projectsWindow.classList.toggle('hidden');
        toggleProjects.removeEventListener('click',()=>{})
    })

    toggleAbout.addEventListener('click',()=>{
        aboutWindow.classList.toggle('hidden');
        toggleAbout.removeEventListener('click',()=>{})
    })