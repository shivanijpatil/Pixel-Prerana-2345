document.addEventListener('DOMContentLoaded', function() {
    var footerCols = document.querySelectorAll('.footer-col h4');
  
    footerCols.forEach(function(footerCol) {
      footerCol.addEventListener('click', function() {
     
        var ul = this.nextElementSibling; // Assuming <ul> follows <h4> directly
        var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    
        if (screenWidth <= 767) {
          if (ul.style.display === 'none') {
            ul.style.display = 'block';
          } else {
            ul.style.display = 'none';
          }
        }
      });
    });
  });
 
  
  
  