/**
 * Created by panqianjin on 15/11/12.
 */
import React, {Component, PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Input from './Input.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';
/**
 * 下拉选择框组件。
 * 因原先考虑不周，导致代码写得很乱，有待重构
 * @Class Select
 * @Module form
 * @extends Coponent
 * @since 0.1.0
 * @demo src/select.js{js}
 * @demo select.html{html}
 * @show true
 * */
@ClassNameMixin
export default
class Select extends Component {
    static defaultProps = {
        /**
         * 回调方法，主要作用将value传给父级元素。默认为null
         * @property callback
         * @type func
         * @default null
         * */
        callback: null,
        /**
         * 样式类名前缀
         * @property classPrefix
         * @type string
         *
         * */
        classPrefix: 'select',
        componentTag: 'div',
        value: '',
        /**
         * option对应的value
         * @property key
         * &type String
         * */
        key:'',
        show: false,
        target: '0',
        /**
         * 输入值，用来匹配显示对应列表的内容
         * @property autoVal
         * &type String
         * */
        autoVal: ''
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show,
            value:this.props.value,
            autoVal: this.props.autoVal,
            key:this.props.key
        };
    }
    /**
     * 第一次渲染完成后执行,为document添加点击监听事件，判断是否关闭ul
     * 生命周期方法
     * @method componentDidMount
     * */
    componentDidMount() {
        let _this = this;
        let selectContair = ReactDOM.findDOMNode(this.refs.selectContair);
        document.addEventListener('click', function (e) {
            if (_this.isParent(e.target, selectContair)) {
                //console.dir('不要动');
            } else {
                if(_this.state.show){
                    _this.hideUl();
                }
            }
        }, false);
    }
    /**
     * 判断obj是否为parentObj的子元素
     * @method isParent
     * @param obj {Object}
     * @param parentObj {Object}
     * @return {Boolean}
     * */
    isParent(obj, parentObj) {
        while (obj != undefined && obj != null) {
            if (obj == parentObj) {
                return true;
            }
            obj = obj.parentNode;
        }
        return false;
    }
    /**
     * 显示选项列表,当ul关闭时才changestate
     * @method showUl
     * @return null
     * */
    showUl() {
        if(!this.state.show){
            this.setState({
                show: true
            })
        }
    }
    /**
     * 显示auto自动补充选项列表
     * @method showAutoUl
     * @param event {Object}
     * @return null
     * */
    showAutoUl(event){
        this.setState({
            value: event.target.value
        })
        if(!this.state.show){
            this.setState({
                show: true
            })
        }
        this.changeValue();
    }
    /**
     * 点击icon时，控制ul的显示与否
     * @method toogleUl
     * @return null
     * */
    toogleUl() {
        this.setState({
            show: !this.state.show
        })
    }
    /**
     * 取得符合要求的值，父级回调存在的话调用
     * @method callBacks
     * @return null
     * */
    callBacks() {
        this.getTrueVal();
        let val = this.state.value;
        if(this.state.show){
            this.setState({
                show: false
            })
        }
        console.log(ReactDOM.findDOMNode(this.refs.test).value);
        this.props.callback && this.props.callback(val);
    }
    /**
     * 验证输入值是否为select内容，return true 否则return false
     * @method isInSelect
     * @return flags {Boolean}
     * */
    isInSelect(){
        let val = '^'+this.state.value+'$';
        let reg = new RegExp(val,"g");
        let flags = false;
        let li = React.Children.map(this.props.children,(item)=>{
                if(reg.test(item.props.children)){
                   flags = true;
                }
                return item;
        },this);
        return flags;

    }
    /**
     * 改变input的value
     * @method handlerValue
     * @param event {Object}
     * @return null
     * */
    handlerValue(event){
        //console.log(event.target.value);
        let val = event.target.value;
        this.setState({
            value: val,
            autoVal: val
        })
        this.changeValue();
    }
    /**
     * 判断是否输入值为select范围内,否则改为第一个值。延时2s后点用callBacks方法
     * @method changeValue
     * @return null
     * */
    changeValue() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(::this.callBacks, 2000);
    }
    /**
     * 根据当前值是否为select内的值，判断是否改变state的值
     * @method getTrueVal
     * @return null
     * */
    getTrueVal(){
        if(!(::this.isInSelect())){
            this.setState({
                value:this.props.children[0].props.children,
                key: this.props.children[0].props.value
            });
        }
    }
    /**
     * 点击或者enter键时，选择当前li的值，并关闭ul
     * @method chooseItem
     * @param event {Object}
     * @return null
     * */
    chooseItem(event) {
        let ulChildren = ReactDOM.findDOMNode(this.refs.selectUl).children;
        let inputObj = ReactDOM.findDOMNode(this.refs.select);
        this.removeAllActive(ulChildren);
        event.target.classList.add('active');
        this.setState({
            show: !this.state.show,
            value: event.target.textContent,
            key: event.target.value
        })
        inputObj.focus();
        this.changeValue();
    }
    /**
     * 关闭ul，当前ul显示时起作用
     * @method hideUl
     * @return null
     * */
    hideUl() {
        if(this.state.show){
            this.setState({
                show: false
            })

        }
    }
    /**
     * target为flase移除li的active状态，否则将obj子元素的值付给state.value
     * @method removeAllActive
     * @param obj {Object}
     * @param target {Boolean}
     * @return null
     * */
    //@target: is changState
    removeAllActive(obj,target){
        Array.prototype.slice.call(obj).map((item,index)=>{
            if(item.className.indexOf('active')>-1){
            if(target){
                this.setState({
                    value: item.textContent
                });
            }else{
                item.classList.remove('active');
            }

            }
        });
    }
    /**
    * keydown时触发，不通方向键分别对应不同方法
    * @method keyIn
    * @param event {Object}
    * @return null
    * */
    keyIn(event){
        let selectUl = ReactDOM.findDOMNode(this.refs.selectUl);
        let ulChildren = ReactDOM.findDOMNode(this.refs.selectUl).children;
        let ulArrey = Array.prototype.slice.call(ulChildren);
        let i = -1;
        let obj = ulChildren[0];
        if(event.keyCode == 40 || event.keyCode == 38){
            /**
             * 当ul显示时，方向键移动起作用
             * 遍历寻找当前active元素的位置，并移除active
             * */
            if(this.state.show){
                ulArrey.map((item,index)=>{
                    if(item.className.indexOf('active')>-1){
                    i = index;
                    item.classList.remove('active');
                }
                });
                if(event.keyCode == 40){
                    /**
                     * 下方向键，判断active元素是否为最后一个，是则不再向下否则i+1
                     * */
                    obj = (i == ulChildren.length - 1)? ulChildren[i]:ulChildren[i+1];
                }else{
                    /**
                     * 上方向键，判断active元素是否为第一个，是则不再向上否则i－1
                     * */
                    obj = (i == 0)? ulChildren[i]:ulChildren[i-1];
                }
                obj.classList.add('active');
                /**
                 * 如果active为第五个元素之前的元素，则scrollTop不变，否则每向下一个，scrollTop加30
                 * */
                selectUl.scrollTop = i < 4 ? 0 : (i-3)*30;
            }
        }else if(event.keyCode == 13){
            /**
             * enter键，取得当前元素值
             * */
            this.setState({
                show: false
            })
            this.removeAllActive(ulChildren,true);
            this.changeValue();
        }
    }
    /**
     * 为选中li元素增加active class
     * @method addActive
     * @param event {Object}
     * @return null
     * */
    addActive(event){
        let obj = event.target;
        let ulChildren = ReactDOM.findDOMNode(this.refs.selectUl).children;
        this.removeAllActive(ulChildren,false);
        obj.classList.add('active');
    }
    /**
     * 为li元素移除active class
     * @method removeActive
     * @param event {Object}
     * @return null
     * */
    removeActive(event){
        let obj = event.target;
        if(this.state.show){
            obj.classList.remove('active');
        }

    }
    /**
     * 渲染li元素，并根据autoVal来匹配获得符合元素
     * this.state.autoVal 为input输入值，初始为.*匹配任意
     * @method renderLi
     * @return li {ReactElement}
     * */
    renderLi(){
        let autoVal = this.state.autoVal == ''? '.*': this.state.autoVal;
        let reg = new RegExp(autoVal,"g");
        let li =React.Children.map(this.props.children,(item)=>{
            if(reg.test(item.props.children)){
               return <li value={item.props.value}  onMouseOver={::this.addActive} onMouseOut={::this.removeActive} onClick={::this.chooseItem}>{item.props.children}</li>
            }

        },this);

        return li;
    }
    renderOption(){
        let option = React.Children.map(this.props.children,(item)=>{
            return <option value={item.props.value}>{item.props.children}</option>
        },this);
        return option;
    }
    /**
     * 渲染select
     * @method renderSelect
     * @return {ReactElement}
     * */
    renderSelect() {
        return (
            <Grid ref='selectContair' className={
                    classnames(
                        this.getClassNamesForArguments('container')
                    )
                } value={this.state.value}>
                <select ref='test' value={this.state.key} style={{display:'none'}}>
                    {this.renderOption()}
                </select>
                <Input ref='select' value={this.state.value}  onClick={::this.showUl} onChange={::this.handlerValue} onKeyDown={::this.keyIn}/>
                <i className={
                    classnames(
                        this.getClassName('arrow-up')
                    )
                } onClick={::this.toogleUl}></i>
                <i className={
                    classnames(
                        this.getClassName('arrow-down')
                    )
                } onClick={::this.toogleUl}></i>
                <ul ref='selectUl' className={classnames(
                    this.getClassNamesForArguments('ul'),
                    {
                        [this.getClassName('show')]: this.state.show
                    })
                }>
                    {this.renderLi()}
                </ul>
            </Grid>
        )
    }
    /**
     * 渲染自动补全的输入框
     * @method renderAuto
     * @return {ReactElement}
     * */
    renderAuto() {
        return (
            <Grid ref='selectContair' className={
                    classnames(
                        this.getClassNamesForArguments('container')
                    )
                }>
                <Input ref='select' value={this.state.value}  onChange={::this.showAutoUl} onKeyDown={::this.keyIn}/>
                <ul ref='selectUl' className={classnames(
                    this.getClassNamesForArguments('ul'),
                    {
                        [this.getClassName('show')]: this.state.show
                    })
                }>
                    {this.renderLi()}
                </ul>
            </Grid>
        )
    }
    /**
     * 根据auto存在与否渲染不同类型的元素
     * @method render
     * @return {ReactElement}
     * */
    render() {
        return (
            this.props.auto ? this.renderAuto() : this.renderSelect()
        );
    }
}