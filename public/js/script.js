


$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 10);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });



  $(document).ready(preloderFunction());
    
  function preloderFunction() {
    
      setTimeout(function() {
          document.getElementById("page-top").scrollIntoView();
        
          $('#ctn-preloader').addClass('loaded');  
          $('body').removeClass('no-scroll-y');
  
          if ($('#ctn-preloader').hasClass('loaded')) {
            $(this).delay(1000).fadeOut();
          }


      }, 1000);
  }
  
  
  
  function afterLoad() {
  }
 
  






  $('#carousel_sel').owlCarousel({
    loop:true,
    margin:15,
    rtl:true,
      navText : ['<i className="fa-solid fa-arrow-left" aria-hidden="true"></i>','<i className="fa-solid fa-arrow-right" aria-hidden="true"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
$('#carousel').owlCarousel({
  loop:true,
  margin:15,
  rtl:true,
    navText : ['<i className="fa-solid fa-arrow-left" aria-hidden="true"></i>','<i className="fa-solid fa-arrow-right" aria-hidden="true"></i>'],
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
  }
})

  
  $('#carousel_s').owlCarousel({
    loop:true,
    margin:15,
    rtl:true,
      navText : ['<i className="fa-solid fa-arrow-left" aria-hidden="true"></i>','<i className="fa-solid fa-arrow-right" aria-hidden="true"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})




// // 















var carousels = ["#carousel-Latest-photos", "#Special_Days", "#carousel3", "#carousel4", "#carousel5" ,"#carousel6" , "#carousel-SPECIAL-Days"];

jQuery.each(carousels, function(index, carousel) {
  jQuery(carousel).owlCarousel({
    autoplay: false,
    rewind: true,
    margin: 20,
    responsiveClass: true,
    // autoHeight: true,
    navText: ['<i className="fa-solid fa-arrow-left" aria-hidden="true"></i>', '<i className="fa-solid fa-arrow-right" aria-hidden="true"></i>'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      },
      1366: {
        items: 3
      }
    }
  });
});
























$(function() {
  $('div[youtube]').each(function() {
      $(this).wrap('<div className="youtube-wrap"></div>');
      let youtube = $(this).attr('youtube');
      let image = $(this).attr('poster');
      if (image) {
          $(this).html('<img alt="" src="'+ image +'" />');   
      } else {
          $(this).html('<img alt="" src="https://i.ytimg.com/vi/'+ youtube +'/sddefault.jpg" />'); 
      }
  }); 
  $('div[youtube]').click(function() {
      if (!$(this).hasClass('show')) {
          $(this).addClass('show');    
          $(this).append('<iframe src="https://www.youtube.com/embed/'+ $(this).attr('youtube') +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
          $(this).children('img').fadeOut('slow');
      } 
  });





  //  Map Init 
  $('.map-links-list #store-stores li').on('click', function(e) {
    e.preventDefault();
    let link = $(this).attr('data-mapLink')
    $('.gmap_canvas iframe').attr('src', link)
  })
});
































// ajax find store 
$(document).ready(function() {
  $("#find-store").submit(function(event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: "POST", 
      url: "data.php", 
      data: formData,
      success: function(response) {
        console.log(response);
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});
// end ajax find store 

// start ajax searchBoxFooter

$(document).ready(function() {
  $("#searchBoxFooter").submit(function(event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: "POST", 
      url: "data.php", 
      data: formData,
      success: function(response) {
        console.log(response);
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});

// end ajax searchBoxFooter

// start ajax footer-submit-contact

$(document).ready(function() {
  $(".btn-send-form-contact-us").click(function(event) {
    event.preventDefault(); 

    var formData = $("#footer-submit-contact").serialize();

    $.ajax({
      type: "POST", 
      url: ".php", 
      data: formData,
      success: function(response) {
        console.log("AJAX request successful:", response);
      },
      error: function(xhr, status, error) {
        console.error("AJAX request error:", error);
      }
    });
  });
});
// end ajax footer-submit-contact


// start ajax form-catering-services

$(document).ready(function() {
  $("#btn-catering-services").click(function(event) {
    event.preventDefault();

    // Validate the form fields
    var isValid = validateForm();

    if (isValid) {
      var formData = new FormData($("#form-catering-services")[0]);

      $.ajax({
        type: "POST",
        url: "your-api-url.php",
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
          console.log("AJAX request successful:", response);
        },
        error: function(xhr, status, error) {
          console.error("AJAX request error:", error);
        }
      });
    } else {
      console.error("Form validation failed.");
    }
  });

  function validateForm() {
    var isValid = true;

    // Validate name field
    var nameInput = $("#name-catering-services").val();
    if (!nameInput || nameInput.trim() === "") {
      isValid = false;
      $("#name-catering-services").addClass("error");
    } else {
      $("#name-catering-services").removeClass("error");
    }

    // Validate email field
    var emailInput = $("#email-catering-services").val();
    if (!isValidEmail(emailInput)) {
      isValid = false;
      $("#email-catering-services").addClass("error");
    } else {
      $("#email-catering-services").removeClass("error");
    }

    // Validate phone field
    var phoneInput = $("#phone-catering-services").val();
    if (!phoneInput || phoneInput.trim() === "") {
      isValid = false;
      $("#phone-catering-services").addClass("error");
    } else {
      $("#phone-catering-services").removeClass("error");
    }

    // Validate country field
    var countryInput = $("#conutry-catering-services").val();
    if (!countryInput || countryInput.trim() === "") {
      isValid = false;
      $("#conutry-catering-services").addClass("error");
    } else {
      $("#conutry-catering-services").removeClass("error");
    }

    return isValid;
  }

  // Function to validate email format
  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});

// start ajax join-us-btn

$(document).ready(function() {
  $("#join-us-btn").click(function(event) {
    event.preventDefault();

    // Validate the form fields
    var isValid = validateForm();

    if (isValid) {
      var formData = new FormData($("#join-us-form")[0]);

      $.ajax({
        type: "POST",
        url: "url.php",
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
          console.log("AJAX request successful:", response);
        },
        error: function(xhr, status, error) {
          console.error("AJAX request error:", error);
        }
      });
    } else {
      console.error("Form validation failed.");
    }
  });

  function validateForm() {
    var isValid = true;

    // Validate name field
    var nameInput = $("#name").val();
    if (!nameInput || nameInput.trim() === "") {
      isValid = false;
      $("#name").addClass("error");
    } else {
      $("#name").removeClass("error");
    }

    // Validate email field
    var emailInput = $("#email").val();
    if (!isValidEmail(emailInput)) {
      isValid = false;
      $("#email").addClass("error");
    } else {
      $("#email").removeClass("error");
    }

    // Validate phone field
    var phoneInput = $("#phone").val();
    if (!phoneInput || phoneInput.trim() === "") {
      isValid = false;
      $("#phone").addClass("error");
    } else {
      $("#phone").removeClass("error");
    }

    // Validate country field
    var countryInput = $("#country").val();
    if (!countryInput || countryInput.trim() === "") {
      isValid = false;
      $("#country").addClass("error");
    } else {
      $("#country").removeClass("error");
    }
    
    // Validate address field
    var addressInput = $("#address").val();
    if (!addressInput || addressInput.trim() === "") {
      isValid = false;
      $("#address").addClass("error");
    } else {
      $("#address").removeClass("error");
    }

// Validate upload-files field
var uploadInput = $("#upload-files").val();
if (!uploadInput || uploadInput.trim() === "") {
  isValid = false;
  $("#upload-files").addClass("error");
} else {
  $("#upload-files").removeClass("error");
}
    return isValid;
  }

  // Function to validate email format
  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});


















































var txt2write = new Array(
    "Perfecting Your Way"
    );

// Variables
var speed = 150; 
var index = 0;
text_pos = 0;
var str_length = txt2write[0].length;
var contents, row;

function type_text() {
    // Init the content with blank
    contents = '';
    row = Math.max(0, index - 9);
    
    // + "<span class='after'>_</span>"
    $( "h2.writeit" ).html( contents + txt2write[index].substring(0, text_pos)  );

    if (text_pos++ == str_length) {
        text_pos = 0;
        index++;
        if (index != txt2write.length) {
            str_length = txt2write[index].length;
            setTimeout("type_text()", 900);
        }
    } else {
        setTimeout("type_text()", speed);
    }

}

setTimeout(type_text, 1000);



















$(document).ready(function () {
  var searchButton = $('.searchButton-nav');
  var searchInput = $('.searchInput-nav');
  var searchForm = $('#searchBox-nav');
  var searchResults = $('#searchResults');

  searchButton.click(function (e) {
      e.preventDefault();
      var searchTerm = searchInput.val();
      if (searchTerm) {
          // Perform AJAX validation here
          $.ajax({
              url: 'your_validation_script.php',
              method: 'POST',
              data: {search: searchTerm},
              success: function (response) {
                  // Display the validation results or update the searchResults div
                  searchResults.html(response);
              }
          });
      } else {
          alert("Please enter a search term");
      }
  });

  searchInput.on('input', function () {
      if (searchInput.val().trim() === '') {
          searchButton.prop('disabled', true);
      } else {
          searchButton.prop('disabled', false);
      }
  });
});












// popup search nav

$('.search-navbar').click(function() {
  $('.overlay').fadeIn();
});

$('.close-popup').click(function() {
  $('.overlay').fadeOut();
});

$('.searchButton-nav').click(function(e) {
  e.preventDefault(); // منع إرسال النموذج الافتراضي
  $('.overlay').fadeOut();
});

$(document).mouseup(function(e) {
  var popup = $('#searchBox-nav');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.overlay').fadeOut();
  }
});