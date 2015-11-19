import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';

/**
 * 分页组件
 * @class Paging
 * @constructor
 * @module ui
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo src/paging.js {js}
 * @demo paging.html {html}
 * @show true
 * @author min.xiao@dianping.com
 * */
@ClassNameMixin
export default class Paging extends Component{

    static propTypes = {
        /**
         * 总页数
         * @property currentPage
         * @type Integer
         * @default 1
         * */
        currentPage:PropTypes.number.isRequired,
        /**
         * 每页显示多少条数据
         * @property pageSize
         * @type Integer
         * @default 20
         * */
        pageSize:PropTypes.number.isRequired,
        /**
         * 数据总数
         * @property total
         * @type Integer
         * */
        total:PropTypes.number.isRequired,
        /**
         * 点击分页回调
         * @property pageCallback
         * @type Function
         * */
        pageCallback:PropTypes.func,
        /**
         *
         * @property activeClass
         * @type String
         * @default active
         * */
        activeClass:PropTypes.string,
        classPrefix:PropTypes.string,
        componentTag:PropTypes.string
    };

    static defaultProps = {
        activeClass:'active',
        currentPage:1,
        pageSize:20,
        classPrefix:'paging',
        componentTag:'div'
    };

    /**
     * @constructor
     * @param props {Object}
     * @param context {Object}
     * */
    constructor(props, context) {
        super(props, context);

        /**
         * @type Integer
         * @default
         * */
        this.pages=this.getPages();

        this.index = 0;

        this.number = 5;

        /**
         * @type Boolean
         * @default false
         * */
        this.init = false;
        //总数：this.total


        this.state = {
            /**
             * 当前页
             * @type Integer
             * */
            currentPage:this.props.currentPage
        };
    }

    /**
     * 上一页
     * @method prev
     * */
    prev(){
        this.gotoPage(this.props.currentPage-1 );
    }

    /**
     * 下一页
     * @method prev
     * */
    next(){
        this.gotoPage(this.props.currentPage+1);
    }

    /**
     * 获取页大小
     * @method getPages
     * @return {Integer}
     * */
    getPages(){
        return Math.ceil(this.props.total/this.props.pageSize);
    }

    /**
     * 跳转至N页
     * @method goto
     * @param page {Integer} 页码，从1开始
     * @private
     * @return {Array}
     * */
    goto(page = this.state.currentPage){

        this.pages=this.getPages();
        if(page <=1){
            page = 1;
        }
        if(page >= this.pages){
            page = this.pages;
        }

        /*if(this.init){
            this.setState({
                currentPage:page
            });
            this.init = false;
        }*/

        return this.generate();
    }

    /**
     * 跳转至N页
     * @method gotoPage
     * @param index {Integer} 页码，从1开始
     * @return {Array}
     * */
    gotoPage(index){
        this.init=true;
        this.props.pageCallback && this.props.pageCallback(index );
        return this.goto(index);
    }

    /**
     * 生成页码
     * @method generate
     * @return {Array}
     * */
    generate(){
        const {currentPage,activeClass} = this.props;
        let i=1,
            htmlList = [],
            distance = 4,
            len = currentPage+distance;


        i =currentPage<=6 ? i:currentPage-distance;
        i = i<=1?1:i;

        len = len>this.pages ? this.pages : len;

        if(currentPage>1){
            htmlList.push(<a href="javascript:void(0);" className="" onClick={::this.prev}>上一页</a>);
        }

        //9     ....4....|.
        if(currentPage>=7){
            htmlList.push(<a href="javascript:void(0);" onClick={::this.gotoPage.bind(this,1)}>{1}</a>);
            htmlList.push(<a href="javascript:void(0);">...</a>);
            //i+=1;
        }

        for(;i<=len;i++){
            htmlList.push(<a href="javascript:void(0);" onClick={this.gotoPage.bind(this,i)} className={classnames({
              [this.getClassName(activeClass) ]:  i==currentPage
            } ) } >{i}</a> );
        }
        //pages-currentPage =
        let bt = this.pages-currentPage;
        if(bt>=7 ){
            htmlList.push(<a href="javascript:void(0);">...</a>);
            htmlList.push(<a href="javascript:void(0);" onClick={::this.gotoPage.bind(this,this.pages)}>{this.pages}</a>);
        }

        if(this.pages>1 && currentPage!=this.pages){
            htmlList.push(<a href="javascript:void(0);" onClick={::this.next}>下一页</a>);

        }

        return htmlList;

    }

    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){

        const {componentTag:Component,activeClass} = this.props;

        return (

            <Component className={classnames(this.getClassName('container')) }>
                {this.goto() }
                <span className='info'>
                    <span className={classnames(this.getClassName(activeClass)) }>
                        {this.props.currentPage}
                    </span>/{this.getPages()}，共{this.props.total}条
                </span>
            </Component>
        );

    }
}