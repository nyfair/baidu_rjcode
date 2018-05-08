// ==UserScript==
// @name        HVDB DLSite Link
// @namespace   hvdb
// @description Add DLSite Link on HVDB
// @version     0.2
// @author      bdtrysb
// @match       *://hvdb.me/Dashboard/WorkDetails/*
// @grant       GM_setClipboard
// ==/UserScript==

var titleNode = document.querySelector('h2')
var rj = titleNode.innerText.match(/\d{6}/)
var dlsite = 'http://www.dlsite.com/maniax/work/=/product_id/RJ' + rj + '.html'
titleNode.innerHTML = '<a href="' + dlsite + '" target="_blank">DLSite Links</a> RJ' + rj

var paste = 'RJ' + rj
var dlNode = document.querySelector('#Download')
if (dlNode.value) {
  var ele = document.createElement('input')
  ele.className = 'form-control'
  ele.value = dlNode.value
  dlNode.parentNode.replaceChild(ele, dlNode.previousElementSibling)
  paste += '|' + dlNode.value
}
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 67 && e.ctrlKey) {
    GM_setClipboard(paste)
  }
})
