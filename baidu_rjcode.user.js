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
        var rj = node.title.match(/RJ\d{6}/)
        var isAdded = node.parentNode.childNodes.length > 1
        if (rj && !isAdded) {
            var djvoice = 'http://www.doujinvoice.moe/maniax/work/=/product_id/' + rj + '.html'
            var dlsite = 'http://www.dlsite.com/maniax/work/=/product_id/' + rj + '.html'
            var hvdb = 'http://hvdb.me/Dashboard/WorkDetails/' + Number(rj.toString().substr(2))
            var newNode = document.createElement('span')
            newNode.innerHTML = '<span>详情：</span><a href="' + djvoice + '" target="_blank"> Doujinvoice </a><a href="' + dlsite + '" target="_blank"> DLSite </a><a href="' + hvdb + '" target="_blank"> HVDB </a><span> | </span>'
            node.parentNode.insertBefore(newNode, node.parentNode.childNodes[0])
        }    
    }
}

function init() {
    rjcatch()
    window.onhashchange = function() {
        var list = document.querySelector('.list-view')
        list.addEventListener('DOMSubtreeModified', function() {
            rjcatch()
            list.removeEventListener('DOMSubtreeModified')
        })
    }
}

document.addEventListener('DOMContentLoaded', init)
