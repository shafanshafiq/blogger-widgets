(function() {
  function loadTOC(json) {
    var entries = json.feed.entry || [];
    var sitemap = '<h2>Website Sitemap</h2><ul>';
    entries.forEach(function(post) {
      var title = post.title.$t;
      var link = post.link.find(function(l) { return l.rel === 'alternate'; });
      if (link) {
        sitemap += '<li><a href="' + link.href + '">' + title + '</a></li>';
      }
    });
    sitemap += '</ul>';
    document.getElementById('toc').innerHTML = sitemap;
  }

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '/feeds/posts/default?max-results=9999&orderby=published&alt=json-in-script&callback=loadTOC';
  document.getElementsByTagName('head')[0].appendChild(script);
})();
