(function($) {

  $.fn.columnize = function(options) {
    
    var settings = $.extend({},$.fn.columnize.defaults, options );
    var data = settings.data;
    var colh = settings.columnheight;
    var len = settings.data.length;
    var tableContainer = $(this).append("<table><tr>");
    var totalcol = Math.ceil(len / colh);
    $.each(data, function(index, value) {
       if(index === 0){
         tableContainer.find("tr").append("<td><div>"+value+"</div></td>")
       }else if(index % colh === 0){//alert(index);
         tableContainer.find("td:last-child").after("<td><div>"+value+"</td></div>");
       }else{
      tableContainer.find("td:last-child").append("<div>" + value + "</div>");
    }
    });
  }
  $.fn.columnize.defaults = {
    columnheight: 3,
    data : []
  };
}(jQuery));

