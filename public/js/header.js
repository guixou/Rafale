'use strict';

document.addEventListener('DOMContentLoaded', function () {


    /* voir la nav au recize écrant */

    const closeNav = document.getElementById("closeNav");
    const openNav = document.getElementById("openNav");
    const navigation = document.getElementById("nav")
    var isOpen = true

    
    window.addEventListener('load', handleResize)

    window.addEventListener('resize', handleResize)
    
    function handleResize(){
        // console.log(window.innerWidth)
        if (window.innerWidth > 1020) {
            closeNav.classList.add("hidden");
            openNav.classList.add("hidden");
            navigation.classList.remove("hidden")
        } else {
            if (isOpen == true) {
                closeNav.classList.remove("hidden");
            } else {
                openNav.classList.remove("hidden");
            }
        }
    }

    /* button show nav */

    closeNav.addEventListener('click', function(){
        isOpen = false;
        closeNav.classList.add("hidden");
        openNav.classList.remove("hidden");
        navigation.classList.add("hidden");
        open()
    });
    
    openNav.addEventListener('click', function(){
        isOpen = true
        openNav.classList.add("hidden");
        closeNav.classList.remove("hidden");
        navigation.classList.remove("hidden");
        open()
    });

    function open(){
        isOpen ? console.log('oui') : console.log('non')
    }

});
        

