 jQuery(document).ready(function(){	 
	 if(localStorage.getItem('userInfo') == null){	  
			   jQuery('.after_login').hide();
				jQuery('.account_login').show();
				jQuery('.account_sign').show();
				jQuery('.account_signout').hide();			
				jQuery(".quote_form a").attr("href", "login.html");		
				var uid = 0;
			}else{			
				jQuery('.after_login').show();
				jQuery('.account_login').hide();		
				jQuery('.account_sign').hide();
				jQuery('.account_signout').show();		
				jQuery(".quote_form a").attr("href", "quote-form.html");	
				var uid = localStorage.getItem('userInfo');		
			}
			
	 	jQuery.getJSON("http://jsonip.com/?callback=?", function (data) {
       
        var uiid = unescape(data.ip);
		var encodedString = btoa(uiid);				
		var device_id = encodedString; 		
			
		jQuery('input[name="search_keyword"]').live('keydown', function(){
				jQuery('.searchbox-submit').addClass('search_items');					
		});
	 
            var submitIcon = jQuery('.searchbox-submit');
            var inputBox = jQuery('.searchbox-input');
            var searchBox = jQuery('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');					
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');					
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            jQuery(document).mouseup(function(){
                    if(isOpen == true){
                        jQuery('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
        });
		
	jQuery(".search_items").live("click", function(){		
		
			var search_key = jQuery('input[name=\'search_keyword\']').val();	
			
					
			if(search_key != "")
			{	
				
				window.location='search-products.html?siteurl='+siteurl+'&search_key='+search_key+'&uid='+uid+'&device_id='+device_id;
			}
		});
				
		jQuery('input[name=\'search_keyword\']').on('keydown', function(e) {			
		  if (e.keyCode == 13) {
			jQuery(".search_items").trigger("click");			 
		   }		    
		   
	    });	
 	});
});
		
	function buttonUp(){
		var inputVal = jQuery('.searchbox-input').val();
		inputVal = jQuery.trim(inputVal).length;
		if( inputVal !== 0){
			jQuery('.searchbox-icon').css('display','none');
		} else {
			jQuery('.searchbox-input').val('');
			jQuery('.searchbox-icon').css('display','block');
		}
	}
	
function slideonlyone(thechosenone) {

        var e = document.getElementById(thechosenone);
              if (e.style.display == 'none') {                  
				  e.style.display = 'block';
              }else {
					e.style.display = 'none';             

              }
    }
function gup( name, url ) {
  if (!url) url = location.href;
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results == null ? null : results[1];
}
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
		{
            return sParameterName[1];
        }
    }
}