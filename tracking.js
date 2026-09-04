// ChatGPT Ads measurement: page views plus the two actions that start conversations.
(function () {
  if (!window.oaiq) {
    var queue = function () { queue.q.push(arguments); };
    queue.q = [];
    window.oaiq = queue;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  oaiq('init', {
    pixelId: 'BSnFVzsCogadV9kBi1hDGz',
    debug: true
  });

  var pageId = window.location.pathname === '/' ? 'home' : window.location.pathname
    .replace(/^\//, '')
    .replace(/\.html$/, '')
    .replace(/[^a-zA-Z0-9_-]+/g, '_');

  oaiq('measure', 'page_viewed', {
    type: 'contents',
    contents: [{
      id: pageId,
      name: document.title || pageId,
      content_type: 'page'
    }]
  });

  document.addEventListener('click', function (event) {
    var target = event.target;
    var link = target && target.closest ? target.closest('a[href]') : null;
    if (!link) return;

    var href = link.getAttribute('href') || '';
    var eventName = href.indexOf('tel:') === 0
      ? 'call_clicked'
      : href.indexOf('sms:') === 0
        ? 'text_clicked'
        : null;
    if (!eventName) return;

    oaiq(
      'measure',
      'custom',
      {
        type: 'custom',
        contents: [{
          id: pageId,
          name: document.title || pageId,
          content_type: 'contact_action'
        }]
      },
      { custom_event_name: eventName }
    );
  }, true);
})();

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18033973772');
(function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=AW-18033973772';document.head.appendChild(s);})();
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '341702038742463');
fbq('track', 'PageView');
