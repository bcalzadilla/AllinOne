function Application() {
    // body...
    var myApp = new Framework7(
    {
        swipePanel : 'left'
    });
    var mainView = myApp.addView('.view-main');
    var $$= Dom7;

    $$('#toogleID').on('click',function()
    {
        myApp.openPanel('left');
    });

    $$('#mainmenuID').on('click',function(e)
    {
        myApp.closePanel();
        mainView.router.loadPage('mainmenu.html');
    });

}

Application();