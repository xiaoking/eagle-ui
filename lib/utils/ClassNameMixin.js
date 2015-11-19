/**
 * Created by mac on 15/9/7.
 */
import {classConstants} from './constants.js';
let consts = classConstants;


export default obj=>{
    /**
     * 给className添加前缀后返回className
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
        if(pre && this.props.classPrefix){
            str+='-'+this.props.classPrefix;
        }
        if(name !=this.props.classPrefix){
            str += '-'+name;
        }

        return str;
    };

    obj.prototype.hasClass = function(obj,cls){
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    };

    obj.prototype.addClass = function(obj,cls){
        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
    };
    obj.prototype.removeClass = function(obj,cls){
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    };
}
