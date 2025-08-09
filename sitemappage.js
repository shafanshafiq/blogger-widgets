function loadSitemap() {
    var feedUrl = '/feeds/posts/default?alt=json-in-script&max-results=500&callback=showSitemap';
    var script = document.createElement('script');
    script.src = feedUrl;
    document.body.appendChild(script);
}

function showSitemap(json) {
    var container = document.getElementById('sitemap-container');
    var entries = json.feed.entry;
    var html = '<ul>';
    for (var i = 0; i < entries.length; i++) {
        var title = entries[i].title.$t;
        var link = entries[i].link.find(l => l.rel === 'alternate').href;
        html += '<li><a href="' + link + '">' + title + '</a></li>';
    }
    html += '</ul>';
    container.innerHTML = html;
}

window.onload = loadSitemap;
