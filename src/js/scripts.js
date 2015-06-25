window.onload = function(){
  var element = document.getElementById('page-sidebar-trigger');

  element.onclick = function(){
    var sidebar = document.getElementById('page-sidebar'),
        display = sidebar.style.display,
        content = document.getElementById('page-content'),
        translate3d = content.style.transform;
        console.log(content.style);
    sidebar.style.display = display === 'none' ? 'block' : 'none';
  };
}