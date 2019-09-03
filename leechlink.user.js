// ==UserScript==
// @name        File Hosting Link Copy
// @namespace   link-copy
// @description Copy Download Link From File Hosting Site
// @version     0.1
// @author      bdtrysb
// @match       *://mexa.sh/*
// @match       *://rapidgator.net/*
// @grant       GM_setClipboard
// ==/UserScript==

rule = {
  "mexa.sh": /document.location = '(.+?)'/,
  "rapidgator.net": /return '(.+?)'/
}
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 67 && e.ctrlKey) {
    GM_setClipboard(document.documentElement.innerHTML.match(rule[document.location.host])[1])
  }
})
