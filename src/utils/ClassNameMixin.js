/**
 * Created by mac on 15/9/7.
 */
import {classConstants} from './constants.js';
let consts = classConstants;


export default obj=>{
    obj.prototype.getClassNamespace=function(){
        return consts.classNameNamespace;
    };
    /**
     * 给className添加前缀后返回className
     * @method getClassName
     * @param name {String} 从该字符串中去查找
     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
     * @return {String}
     * */
    obj.prototype.getClassName=function(name,pre=true){
        if(name){
            name = name.split(' ');
            let list = [],
                _this = this;
            name.forEach(function(item){
                list.push(_this.setPrefix(item,pre) );
            });

            return list.join(' ');
        }
        return '';
    };
    /**
     * 验证props中的样式是否符合规则
     * @method getClassNames
     * @param props {Object} 从该对象中去查找
     * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
     * @return {String}
     * */
    obj.prototype.getClassNames=function(props,pre=true){
        let clazz = {};
        for(var item in props){
            if(props[item] && item === consts[item]){
                clazz[this.getClassName(item,pre)] = true;
            }
        }
        return clazz;
    };
    /**
     * 给多个className添加前缀后返回
     * @method getClassNamesForArguments
     * @param arguments {Arguments String} 多个class参数
     * @return {String}
     * */
    obj.prototype.getClassNamesForArguments=function(){
        let arg = arguments;
        let arr = [];
        let _this = this;

        if(arg && arg.length>0 ){
            for(let i=0,len=arg.length;i<len;i++){
                if(arg[i]){
                    arr.push(_this.getClassName(arg[i]) );
                }
            }

        }

        return arr.join(' ');
    };
    /**
     * 设置css类名前缀
     * @method setPrefix
     * @param name{String} class名字
     * @param pre{Boolean} 是否添加前缀
     * @return {String}
     * */
    obj.prototype.setPrefix= function(name,pre=true){
        let str = consts.classNameNamespace;
        const {classPrefix} = this.props;
        if(pre && classPrefix){
            str+='-'+classPrefix;
        }
        if(name !=classPrefix){
            str += '-'+name;
        }

        return str;
    };

    /**
     * 检查元素是否存在样式名
     * @method hasClass
     * @param obj {Object} 元素
     * @param cls {String} 需要检查的样式名
     * @return {Boolean}
     * */
    obj.prototype.hasClass = function(){
        return arguments[0].className.match(new RegExp('(\\s|^)' + arguments[1] + '(\\s|$)'));
    };

    /**
     * 给元素增加一个样式名
     * @method addClass
     * @param obj {Object} 元素
     * @param cls {String} 样式名
     * */
    obj.prototype.addClass = function(obj,cls){
        if (!this.hasClass(obj, cls)) {
            obj.className = (obj.className + " " + cls).replace(/\s{2,}/g, " ");
        }
    };
    /**
     * 给元素删除一个样式名
     * @method removeClass
     * @param obj {Object} 元素
     * @param cls {String} 样式名
     * */
    obj.prototype.removeClass = function(){
        if (this.hasClass(arguments[0], arguments[1])) {
            let reg = new RegExp('(\\s|^)' + arguments[1] + '(\\s|$)');
            arguments[0].className = arguments[0].className.replace(reg, ' ').split(" ").join(" ");
        }
    };
}
