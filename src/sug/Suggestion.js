import React, {PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import classnames from 'classnames';

import Component from '.././utils/Component';
import extend from 'extend';
import 'babel-polyfill';

export default class Suggestion extends Component {

    constructor(props, context) {
        super(props, context);

        //获取初始数据
        this.options = this.getOptions();

        //this.setState();
        //缓存
        this._cache={};

        this.suggestion = this.uniqueId();

        //selectItem 选中项
        this.selectItem = null;
    }

    setDefaultState(obj){
        super.setDefaultState(extend({},{
            _reload:false,
            _data:this.options,
            _selectedIndex:-1,
            _selectedValue:'',
            _key:this.props.defaultChecked||this.props.value ||'',
            value:this.props.defaultChecked||this.props.value ||'',
            _activeValue:'',
            delay:400
        },obj));
    }

    setCache(key,value){
        this._cache[key] = value;
    }

    getCache(key){
        return this._cache[key];
    }

    setDefaultData(){
        this.setState({
            _selectedIndex:-1,
            _data:this.options
        });
    }

    //搜索 数据查询方式 ajax或者直接查询或者缓存中获取
    async search(key){

        let data = this.getCache(key),_this = this;

        //缓存中没有数据
        try{
            if((!data ||data.length<=0 ) && key!=''){

                //拿取query异步数据
                data =await _this.execMethod('query',key);
                //没拿到数据则从原始数据中查询
                if(!data){
                    //options
                    let str = JSON.stringify(this.options);
                    ///([^}]+"key":"[^"]*北京[^"]*".+?\})/gi
                    //let reg = new RegExp('(\{[^}]+"key":"[^"]*'+key+'[^"]*".+?\})','gi');
                    let reg = new RegExp('([^[},]*\{+"key":"[^"]*'+key+'[^"]*".+?\})','gi');

                    str = str.match(reg);

                    data = str ?str :[];//this._cache[key];
                }

                this.setCache(key,data );
            }
            //重新绑定data渲染数据
            this.setState({
                _data:data && data.length>0 ? data : this.props.noResultTips?[
                    {
                        key:this.props.noResultTips,
                        value:'noResult'
                    }
                ]:[],
                _selectedIndex:-1
            });

            if(this.state._data.length > 0){
                this.show();
            }

        }catch(ex){
            throw new Error(ex);
        }
    }

    getOptions(){
        let optionsList = [];
        React.Children.map(this.props.children,(item,i)=>{

            let {value,children,subKey,...other}=item.props;

            optionsList.push({
                key:children,
                value:value,
                subKey:subKey||'',
                index:i
            });
        },this);

        return optionsList;
    }

    moveActive(type){

        let {_data} = this.state;
        let _selectedIndex = this.state._selectedIndex;
        _selectedIndex = type =='up' ? _selectedIndex-1 : _selectedIndex+1;

        if(_selectedIndex>=_data.length ){
            _selectedIndex = 0;
        }

        if(_selectedIndex < 0){
            _selectedIndex = _data.length-1;
        }
        let data = this.getData(_selectedIndex);
        this.setState({
            _selectedIndex:_selectedIndex,
            _activeValue:data ? data.key: ''
        });
        //checkedCallback
        this.execMethod('checked',this.refs[this.suggestion],_selectedIndex);
        /*clearTimeout(this.__clearTimeoutForValue);
        this.__clearTimeoutForValue = setTimeout(,this.props.delay*3);*/
    }

    //监听用户输入
    keyHandler(event){
        let _this = this;
        if (event.type != 'keydown') {
            var val = this.trim(event.target.value);
            if (val === '') {
                this.hide();
                this.entryCallback();
                return;
            }else{
                clearTimeout(this.__entryTimeout);
                this.__entryTimeout=setTimeout(()=>{
                    _this.entryCallback(val);
                },this.state.delay);
            }
            switch (event.keyCode) {
                case 27:
                    this.hide();
                    return;
                case 38: //up键
                    this.show();
                    this.moveActive('up');
                    return;
                case 40: //down键
                    this.show();
                    this.moveActive('down');
                    return;
                case 13: //回车
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.state._selectedIndex <= -1) {
                        //当用户没有选择任何sug项而直接按回车时
                        this.execMethod('success',val);
                    } else {
                        //当用户通过上下键选择了某一项sug项后按回车时
                        this._clickHandler(this.getData(this.state._selectedIndex),'enter');
                    }
                    return;
                default:
                    this.setState({
                        _activeValue:''
                    });
                    this.valChange(val);
            }
        }
    }

    entryCallback(){
        //可重写
        //this.hide();
    }

    valChange(key){
        clearTimeout(this.timeOutId);
        this.timeOutId = setTimeout(function() {
            this.search(key);
        }.bind(this), this.state.delay);
    }

    _mouseEnterHandler(i,item){

        if(this.isEmptyItems(item.key) ){
            return this;
        }
        this.setState({
            _selectedIndex:i
        });
    }

    setValue(value){
        this.setState({
            value:value
        });
    }

    getData(index){
        let data = this.state._data[index];
        return data ? typeof(data) =='string' ? JSON.parse(data):data :null;
    }

    isEmptyItems(key){

        return key!='' && key==this.props.noResultTips;
    }

    _clickHandler(item,type="click"){

        if(this.isEmptyItems(item.key) ){
            return this;
        }

        this.selectItem = item;

        this.setValue(item.key);
        this.setState({
            _activeValue:'',
            _selectedIndex:-1
        });

        this.execMethod('getValue',item.value,item.key,type);

        this.hide();
    }

    renderSubKey(subKey){

        let html = [];

        if(subKey){
            html.push(
                <div className="subkey" key={subKey}>
                    {subKey}
                </div>
            );
        }
        return html;
    }

    renderList(){
        let data = this.state._data,
            value = this.state.value,
            selectedValue = this.state._selectedValue,
            list = [];

        for(let i=0,len=data.length,item;i<len;i++){
            item =this.getData(i);
            if(value == item.key){
                this.selectItem = item;
            }

            list.push(
                <li
                    key={item.value}
                    data-value={item.value}
                    className={classnames(
                        {
                            'active':i==this.state._selectedIndex,
                            'noresult':this.isEmptyItems(item.key)
                        }
                    )}
                    onMouseEnter={this._mouseEnterHandler.bind(this,i,item)}
                    onMouseLeave={this._mouseEnterHandler.bind(this,-1,item)}
                    onMouseDown={this._clickHandler.bind(this,item,'click')}
                >{item.key}{this.renderSubKey(item.subKey)}</li>
            );
        }
        return list;
    }

    getValue(){
        return this.selectItem;
    }
    getTextValue(){
        let {value,_activeValue} = this.state;
        return _activeValue ? _activeValue:value;
    }

    removeActiveValue(){
        this.setState({
            _activeValue:''
        });
    }

    //渲染列表
    renderSuggestion() {
        return (
            <ul ref={this.suggestion} className={classnames(`${this.getClassNamespace()}-suggestion`,{
            },this.state._isShow?'':'hide')} style={{zIndex:this.props.zIndex||1}}>
                {this.renderList()}
            </ul>
        );
    }
}