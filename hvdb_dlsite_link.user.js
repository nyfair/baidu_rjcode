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
titleNode.innerHTML = '<a href="' + dlsite + '" target="_blank">' + titleNode.innerText + '</a>' + ' RJ' + rj

var dlNode = document.querySelector('#Download')
if (dlNode.value) {
	dlNode.disabled = false
	dlNode.className = "form-control"
}