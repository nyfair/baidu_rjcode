// ==UserScript==
// @name        百度云DLSite/DMM同人音声编号分析
// @namespace   RJCode
// @version     0.3
// @description 分析RJ编号，提供DLSite/Doujinvoice/DMM/HVDB链接
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
	for (var pnode of document.querySelectorAll('.file-name')) {
		var node = pnode.childNodes[0]
		var flag = node.childNodes.length == 1
		if (flag) {
			var rj = node.innerText.match(/RJ\d{6}/)
			if (rj) {
				var dlsite = 'http://www.dlsite.com/maniax/work/=/product_id/' + rj + '.html'
				var hvdb = 'http://hvdb.me/Dashboard/WorkDetails/' + Number(rj.toString().substr(2))
				var ele = document.createElement('div')
				ele.innerHTML = '详情： <a href="' + hvdb + '" target="_blank"> HVDB </a><a href="' + dlsite + '" target="_blank"> DLSite </a> | ' + node.innerHTML
				ele.className = 'text'
				pnode.replaceChild(ele, node)
				continue
			}
			var dmm = node.innerText.match(/d_\d{6}|d_[a-z]{3,5}\d{4}/)
			if (dmm) {
				var zero = node.innerText.indexOf('zero')
				if (zero > -1 && zero - node.innerText.indexOf(dmm) == dmm[0].length) {
					dmm += 'zero'
				}
				var dlink = 'http://www.dmm.co.jp/dc/doujin/-/detail/=/cid=' + dmm
				var ele = document.createElement('div')
				ele.innerHTML = '详情： <a href="' + dlink + '" target="_blank"> DMM </a> | ' + node.innerHTML
				ele.className = 'text'
				pnode.replaceChild(ele, node)
			}
		}
	}
}

function trigger() {
	window.setTimeout(rjcatch, 500)
}

function init() {
	trigger()
	var list = document.querySelector('li:not([class])').parentNode.parentNode.querySelector('span').nextSibling
	list.addEventListener('DOMSubtreeModified', trigger)
}

document.addEventListener('DOMContentLoaded', init)
