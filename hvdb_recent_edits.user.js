// ==UserScript==
// @name        HVDB Recent Edits
// @namespace   hvdb
// @description Open All Links on HVDB Recent Edits
// @version     0.1
// @author      bdtrysb
// @match       *://hvdb.me/Dashboard/RecentEdits/*
// @grant       none
// ==/UserScript==

for (var wnode of document.querySelectorAll('.col-md-12')) {
  var txt = wnode.innerText
  var offset = txt.indexOf('Download Link')
  if ((offset > -1) && txt.substring(offset+21, offset+45) != '[Initial Creation] to []') {
    window.open(wnode.querySelector('a').href)
  }
}
