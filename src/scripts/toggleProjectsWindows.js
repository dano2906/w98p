const closeProjectsButtons = document.querySelectorAll('.closeProject');
    const projectsWindow = document.getElementById('projects')
    closeProjectsButtons.forEach((close)=>{
    close.addEventListener('click',()=>{
            projectsWindow.classList.add("hidden")
    })
})