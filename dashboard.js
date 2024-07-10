var sidebarIsOpen =true;

togglebtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(sidebarIsOpen){
        dashboard_sidebar.style.width='10%';
        dashboard_sidebar.style.transition ='0.3s all';
        dashboard_content_container.style.width='90%';
        dashboard_logo.style.fontSize ='60px';
        userImg.style.width ='60px';
        dashboard_sidebar_menus.style.fontSize='20px';

        menuicons =document.getElementsByClassName('menutext');
        for(var i=0;i<menuicons.length;i++){
            menuicons[i].style.display ='none';
       }
       document.getElementsByClassName('dashboard_menu_lists')[0].style.textAlign='center';
       sidebarIsOpen = false;    
    }else{
        dashboard_sidebar.style.width='20%';
        dashboard_sidebar.style.transition ='0.3s all';
        dashboard_content_container.style.width='80%';
        dashboard_logo.style.fontSize ='80px';
        userImg.style.width ='80px';
        dashboard_sidebar_menus.style.fontSize='20px';

       menuicons =document.getElementsByClassName('menutext');
      for(var i=0;i<menuicons.length;i++){
            menuicons[i].style.display ='inline-block';
       }
       document.getElementsByClassName('dashboard_menu_lists')[0].style.textAlign='left';
       sidebarIsOpen=true ;
    }

});