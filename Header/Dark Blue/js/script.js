const svg_1 = document.querySelector('#svg');
const sidebar = document.querySelector('#sidebar');
const svg_2 = document.querySelector('#svg_2')
const content = document.querySelector('#content')


svg_1.addEventListener('click', function() {
    sidebar.style.left = '0px'
    sidebar.style.animationName = 'side'
    content.style.filter = 'blur(5px)'
})

svg_2.addEventListener('click', function() {
    sidebar.style.left = '-100%'
    sidebar.style.animationName = ''
    content.style.filter = ''
    sidebar.style.animationName = 'invertside'
})

content.addEventListener('click', function(){
    sidebar.style.left = '-100%'
    sidebar.style.animationName = ''
    content.style.filter = ''
    sidebar.style.animationName = 'invertside'
})
