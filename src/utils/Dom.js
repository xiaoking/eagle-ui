
class Dom {

    constructor(obj){
        this.obj = obj;
    }

    offset(){

        let element = this.obj;
        let w = element.offsetLeft;
        let t = element.offsetTop;
        let node = element.offsetParent;

        while(node && node.nodeName.toLowerCase()!=document.body) {
            t+=node.offsetTop;
            w+=node.offsetLeft;
            node = node.offsetParent;

        }

        return {
            top:t,
            left:w,
            width:element.offsetWidth,
            height:element.offsetHeight
        };
    }

    parents (str) {
        try {
            var tempNode = this.obj.parentNode;
            while (tempNode && tempNode.tagName != arguments[0].toUpperCase()) {
                tempNode = tempNode.parentNode;
            }
            return [tempNode];
        } catch (err) {
            return [];
        }
    }

    matchNode(element, direction, start) {
        for (var node = element[start]; node; node = node[direction]) {
            if (node.nodeType == 1) return node;
        }
        return null;
    }

    next () {
        return this.matchNode(this.obj, 'nextSibling', 'nextSibling');
    }
    prev () {
        return this.matchNode(this.obj, 'previousSibling', 'previousSibling');
    }
    first () {
        return this.matchNode(this.obj, 'nextSibling', 'firstChild');
    }
    last () {
        return this.matchNode(this.obj, 'previousSibling', 'lastChild');
    }
    parent(){
        return this.matchNode(this.obj,'parentNode','parentNode');
    }
    children () {
        let element = this.obj;
        for (var children = [], tmpEl = element.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
            if (tmpEl.nodeType == 1) children.push(tmpEl);
        }
        return children;
    }

}

module.exports=(obj)=>{
    return new Dom(obj);
};