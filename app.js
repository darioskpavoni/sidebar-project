// Selectors
const closeSidebar = document.querySelector('.close-btn');
const toggleSidebar = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

// Event listener
toggleSidebar.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
})
closeSidebar.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})