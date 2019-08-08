// ==UserScript==
// @name        MexaShare Link Copy
// @namespace   mx-sh
// @description Copy MexaShare Download Link
// @version     0.1
// @author      bdtrysb
// @match       *://mx-sh.net/*
// @grant       GM_setClipboard
// ==/UserScript==

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 67 && e.ctrlKey) {
    GM_setClipboard(document.documentElement.innerHTML.match(/document.location = '(.+?)'/)[1])
  }
})
