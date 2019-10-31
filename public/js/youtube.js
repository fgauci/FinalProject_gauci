$(document).ready(function () {
    $.getJSON("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=parkinsons&type=video&key=AIzaSyB_MgY4BDxxbQ8IluMkyBHj8ottmL--gNc", function (data) {
        var items = [];
        $.each(data.items, function (i, item) {
            items.push(`
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${item.snippet.thumbnails.medium.url}" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><a href="https://youtube.com/watch?v=${item.id.videoId}" target="_blank">${item.snippet.title}</a></h5>
                  <p class="card-text">${item.snippet.description}</p>
                  <p class="card-text"><small class="text-muted">Published in ${item.snippet.publishedAt.split('T')[0]}</small></p>
                </div>
              </div>
            </div>
          </div>
            `);
        });
        $("#youtubeData").html(items.join(""));
    });
});


