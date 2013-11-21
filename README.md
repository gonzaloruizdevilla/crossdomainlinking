# Set up cross-domain tracking for multiple domains

Set up cross-domain tracking for multiple domains for Google Analitycs.
At this time, it only set up tracking for links, but not for forms.
You can find more information about this at: https://support.google.com/analytics/answer/1034342?hl=en

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/gonzaloruizdevilla/jquery-crossdomainlinking/master/dist/jquery.crossdomainlinking.min.js
[max]: https://raw.github.com/gonzaloruizdevilla/jquery-crossdomainlinking/master/dist/jquery.crossdomainlinking.js

It assumes your web pages have the same tracking snippet, but only changing the _setDomainName value:

```html
<script type="text/javascript">

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXXX-1']);
_gaq.push(['_setDomainName', 'A.com']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript';
  ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
  'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

</script>
```
Since the same tracking number (UA-XXXXXXXX-N) appears on all pages, the data from the different domains is consolidated under that one number.

After you set up your tracking code, then you need to set up cross links in your web page:

```html
<script src="jquery.js"></script>
<script src="dist/crossdomainlinking.min.js"></script>
<script>
jQuery(function($) {
  $("someselector").crossdomainlinking(['A.com', 'B.com', 'C.com']);
});
</script>
```

If the DOM changes and new links appear in the web page, you need to reregister the cross linking behaviour.

You can set a list of domains on `crossdomainlinking` that will be used by default:

```html
<script>
jQuery(function($) {
  $.crossdomainlinking.domains = ['A.com', 'B.com', 'C.com'];
  $("someselector").crossdomainlinking();
});
</script>
```

## Release History
0.0.2 Added default option por domain list
0.0.1 First version
