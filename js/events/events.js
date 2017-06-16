// Display login modal window
$('.toLogin').on('click', function() {

  if (this.text === "LOG OUT") {
    LCB.controller.signout();
  } else {
    $('#login').toggle();
  }
});

// Close login window
$('#login span').on('click', function() {
  $('#login').toggle();
});

// Close user msg window
$('#userMsg span').on('click', function() {
  $('#userMsg').toggle();
});
// Close user msg window (TBD: consolidate with above)
$('#userMsg button').on('click', function() {
  $('#userMsg').toggle();
});

// Create account or signin
// TBD: eventually hash the pw in php first...
$('#login button').on('click', function(e) {
  var id = this.id;
  var userInfo = {};

  if (id === "signup_now") {
    // TBD: check that name is not blank and use regex to check email - 
    // here or in controller or model.js?
    userInfo.name = $('#name_set').val();
    userInfo.email = $('#email_set').val();

  } else if (id === "login_now") {
    userInfo.name = '';
    userInfo.email = $('#email').val();
    userInfo.password = $('#password').val();
  }

  LCB.controller.signin(userInfo);
});


// For login - toggling between Sign Up and Log In
$('.message a').click(function(){
   $('#login form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

// Toggle between showing and hiding the sidebar when clicking the menu icon
$('#menu_icon').on('click', function() {
  $('#mySidebar').toggle();
});

// Hide sidebar if user clicks on any sidebar option (incl 'close')
$('#mySidebar a').on('click', function() {
  $('#mySidebar').hide();
});

// Call fcn to hide/display correct page (home, income, budget...)
$('.swap').on('click', function(e) {
  LCB.view.togglePages(e.target.hash);
});