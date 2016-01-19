'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Dom = (function () {
    function Dom(obj) {
        _classCallCheck(this, Dom);

        this.obj = obj;
    }

    Dom.prototype.offset = function offset() {

        var element = this.obj;
        var w = element.offsetLeft;
        var t = element.offsetTop;
        var node = element.offsetParent;

        while (node && node.nodeName.toLowerCase() != document.body) {
            t += node.offsetTop;
            w += node.offsetLeft;
            node = node.offsetParent;
        }

        return {
            top: t,
            left: w,
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };

    Dom.prototype.parents = function parents(str) {
        try {
            var tempNode = this.obj.parentNode;
            while (tempNode && tempNode.tagName != arguments[0].toUpperCase()) {
                tempNode = tempNode.parentNode;
            }
            return [tempNode];
        } catch (err) {
            return [];
        }
    };

    Dom.prototype.matchNode = function matchNode(element, direction, start) {
        for (var node = element[start]; node; node = node[direction]) {
            if (node.nodeType == 1) return node;
        }
        return null;
    };

    Dom.prototype.next = function next() {
        return this.matchNode(this.obj, 'nextSibling', 'nextSibling');
    };

    Dom.prototype.prev = function prev() {
        return this.matchNode(this.obj, 'previousSibling', 'previousSibling');
    };

    Dom.prototype.first = function first() {
        return this.matchNode(this.obj, 'nextSibling', 'firstChild');
    };

    Dom.prototype.last = function last() {
        return this.matchNode(this.obj, 'previousSibling', 'lastChild');
    };

    Dom.prototype.parent = function parent() {
        return this.matchNode(this.obj, 'parentNode', 'parentNode');
    };

    Dom.prototype.children = function children() {
        var element = this.obj;
        for (var children = [], tmpEl = element.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
            if (tmpEl.nodeType == 1) children.push(tmpEl);
        }
        return children;
    };

    return Dom;
})();

module.exports = function (obj) {
    return new Dom(obj);
};