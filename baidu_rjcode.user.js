// ==UserScript==
// @name        百度云DLSite编号分析
// @namespace   RJCode
// @version     0.1
// @description 分析RJ编号，提供DLSite/Doujinvoice/HVDB链接
// @author      bdtrysb
// @match       *://pan.baidu.com/disk/home*
// @match       *://yun.baidu.com/disk/home*
// @match       *://pan.baidu.com/s/*
// @match       *://yun.baidu.com/s/*
// @match       *://pan.baidu.com/share/link*
// @match       *://yun.baidu.com/share/link*
// @run-at      document-start
// @grant       none
// ==/UserScript==

function rjcatch() {
	for (var node of document.querySelectorAll('.filename')) {
		var code = (node.title.split('.')[0].length == 6) ? 'RJ' + node.title.match(/\d{6}/) : node.title.match(/RJ\d{6}/)
		if (code) {
			var rj = Number(code.toString().substr(2))
			var isAdded = node.parentNode.childNodes.length > 1
			if (rj && !isAdded) {
				var dlsite = 'http://www.dlsite.com/maniax/work/=/product_id/RJ' + rj + '.html'
				var hvdb = 'http://hvdb.me/Dashboard/WorkDetails/' + rj
				var ele = document.createElement('span')
				ele.innerHTML = ' | 详情： <a href="' + hvdb + '" target="_blank"> HVDB </a><a href="' + dlsite + '" target="_blank"> DLSite </a>'
				node.parentNode.insertBefore(ele, node.nextSibling)
			}
		}
	}
}

function trigger() {
	window.setTimeout(rjcatch, 500)
}

function init() {
	rjcatch()
	var list = document.querySelector('.history-list-tips')
	list.addEventListener('DOMSubtreeModified', trigger)
}

document.addEventListener('DOMContentLoaded', init)
