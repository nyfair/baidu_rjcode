// ==UserScript==
// @name        HVDB DLSite Link
// @namespace   hvdb
// @description Add DLSite Link on HVDB
// @version     0.1
// @author      bdtrysb
// @match       *://hvdb.me/Dashboard/WorkDetails/*
// @grant       none
// ==/UserScript==

var titleNode = document.querySelector('h2')
var rj = titleNode.innerText.match(/\d{6}/)
var dlsite = 'http://www.dlsite.com/maniax/work/=/product_id/RJ' + rj + '.html'
titleNode.innerHTML = '<a href="' + dlsite + '" target="_blank">DLSite Links</a> RJ' + rj

var dlNode = document.querySelector('#Download')
if (dlNode.value) {
  var ele = document.createElement('input')
  ele.className = 'form-control'
  ele.value = dlNode.value
  dlNode.parentNode.replaceChild(ele, dlNode.previousElementSibling)
  
  var textarea = document.createElement("textarea")
  document.body.appendChild(textarea)
  textarea.value = dlNode.value
  textarea.select()
  textarea.focus()
  document.execCommand("copy")
  textarea.parentNode.removeChild(textarea)
}
