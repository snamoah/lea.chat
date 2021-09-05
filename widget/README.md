# Lea Widget

## Installation

Add this script in your html

```html
<script type="text/javascript">
  ;(function (w, d, s, k, j, f) {
    w[k] = w[k] || {
      init: function (code) {
        w[k].clientId = code
      },
    }
    if (d.getElementById('lea-widget')) {
      return
    }
    j = d.createElement(s)
    j.type = 'text/javascript'
    j.async = 1
    j.src = 'https://embed.leachat.com/v1/main.js'
    f = d.getElementsByTagName(s)[0]
    f.parentNode.insertBefore(j, f)
  })(window, document, 'script', 'Lea')
  Lea.init('USER_ACCOUNT_CODE_HERE')
</script>
```


## Demo
View WIP Demo [here](https://leachat-widget.netlify.app/)
