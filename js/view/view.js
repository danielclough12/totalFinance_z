// JS code for view

LCB = window.LCB || {};

LCB.view = (function() {
  'use strict';
  
  // Private vars here
  //
  //
  //
  
  // Displays message in modal window
  function showMsg(msg) {
      $('#userMsg p').text(msg);
      $('#userMsg').show();  
  }
  
  // Public vars & functions here
  var publicAPI = {
    
    // Public vars here
    
    

    // Public functions here
    defDate: function() {
      var date = new Date();

      $('.dateOpt').attr('value', date.getFullYear().toString() +
                         '-' + ('0' + (date.getMonth() + 1).toString()).slice(-2) +
                         '-' + ('0' + date.getDate().toString()).slice(-2));
    },
    togglePages: function(hash) {
      $('[id^="m_"]').hide();
      $(hash).show();
    },
    userAcct: function(result) {
      var menuItem;
      
      // If user chose 'Log out' result should be null
      if (result === null) {
        // TBD: Add confirmation?
        $('a.toLogin').text('LOG IN/SIGN UP');
        $('#myNavbar div a:first-child').hide();
        $('#mySidebar a:nth-child(2)').hide();
        
      // If user successfully signed in, update menu
      } else if (typeof result.name !== "undefined") {
        $('a.toLogin').text('LOG OUT');
        $('#myNavbar div a:first-child span').text(' ' + result.name);
        $('#mySidebar a:nth-child(2) span').text(' ' + result.name);
        $('#myNavbar div a:first-child').show();
        $('#mySidebar a:nth-child(2)').show();
      
      // If error occurred during login, display modal window
      } else {
        showMsg(result.err_msg);
      }      
    },
    userVerify: function(result) {
      var msg = (typeof result.err_msg === "undefined")
                ? result.success_msg
                : result.err_msg;
      
      showMsg(msg);
    }
  };
  return publicAPI;
})();