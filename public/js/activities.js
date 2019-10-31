/* eslint-env jquery, browser */
$(document).ready(() => {

    var tabulate = function (data, columns, where) {
      var table = d3.select(where).append('table')
      var thead = table.append('thead')
      var tbody = table.append('tbody')
  
      thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function (d) { return d })
  
      var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
  
      var cells = rows.selectAll('td')
        .data(function (row) {
          return columns.map(function (column) {
            return { column: column, value: row[column] }
          })
        })
        .enter()
        .append('td')
        .text(function (d) { return d.value })
  
      return table;
    }
  
    $(".dataURLs").each(function (index) {
      var url = $(this).attr('href');
      d3.csv(url).then(function (data) {
        var columns = ['X', 'Y', 'time'];
        console.log(index + 1);
        tabulate(data, columns, "#dataURL" + (index + 1))
      });
    });
  
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
  });