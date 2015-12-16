import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from './utils/ClassNameMixin.js';

/**
 * 日历组件<br />
 * 需要和CalendarPanel组合使用
 * @class Calendar
 * @module ui
 * @extends Component
 * @constructor
 * @since 0.1.0
 * @demo calendar.js {js}
 * @show true
 * */
@ClassNameMixin
export default class Calendar extends Component{

    static propTypes = {
        /**
         * 样式类名前缀
         * @property classPrefix
         * @type String
         * @default calendar
         * */
        classPrefix:PropTypes.string,
        /**
         * 起始日期
         * @property startDate
         * @type String
         * @default empty
         * */
        startDate:PropTypes.string,
        /**
         * 终止日期
         * @property endDate
         * @type String
         * @default empty
         * */
        endDate:PropTypes.string,
        /**
         * 默认选中日期
         * @property defaultDate
         * @type String
         * @default 当天
         * */
        defaultDate:PropTypes.string,
        /**
         * 日期格式
         * @property format
         * @type string
         * @default 'yyyy-MM-dd'
         * */
        format:PropTypes.string,
        /**
         * 选择某个具体日期后执行的回调函数
         * @property selectCallback
         * @type Function
         * @default empty
         * */
        selectCallback:PropTypes.func
    };

    static defaultProps = {
        format:'yyyy-MM-dd',
        classPrefix:'calendar'
    };

    constructor(props, context) {
        super(props, context);

        this.today = new Date();

        this.month = [1,2,3,4,5,6,7,8,9,10,11,12];

        this.windowType = ['getCalendar','getMonths','getYears'];

        let defaultDate = this.props.defaultDate || new Date();
        this.state = {
            currentDate:defaultDate,
            selectedDate:defaultDate,
            show:false,
            year:typeof(defaultDate)!='string'?defaultDate.getFullYear():new Date(defaultDate).getFullYear(),
            windowType:this.windowType[!isNaN(this.props.windowType) ?this.props.windowType :0]
        };
    }

    getCurrentDate(){
        let {currentDate} = this.state;
        return typeof(currentDate)!='string' ? currentDate : new Date(currentDate);
    }

    getSelectedDate(){
        let {selectedDate} = this.state;
        return typeof(selectedDate)!='string' ? selectedDate : new Date(selectedDate);
    }

    dateClick(date){
        let d= date.split('/'),
            {selectCallback} = this.props;
        //console.dir(this.getDate(d[0],d[1],d[2]));
        selectCallback && selectCallback(this.getDate(d[0],d[1],d[2]),d );
        this.setState({
            currentDate:new Date(date)
        });
        this.props.closeCallback &&(this.props.closeCallback() );
    }

    getDates(arr,selectedDate,defaultDate){
        let d,dom = [],
            _this = this,
            month = selectedDate.getMonth(),
            year = selectedDate.getFullYear();

        let {startDate,endDate} = this.props;
        //startDate='2015/11/16';
        //endDate='2015/11/20';
        for(let j=1;j<=7;j++){

            if(arr.length > 0){
                d = arr.shift();
                let disabled = ((startDate && new Date(year, month, d).getTime() <= new Date(startDate).getTime() ) || (endDate && new Date(year, month, d).getTime() >= new Date(endDate).getTime() ) );
                //"eg-active" eg-calendar-selected
                dom.push(<td><span className={
                    classnames(this.getClassName('item'),{
                        [this.getClassName('active',false)]:this.isToday(year,month+1,d ),
                        [this.getClassName('disabled')]:disabled,
                        'no-hover':d==' ',
                        [this.getClassName('selected')]:(this.isOptionSelect(selectedDate,defaultDate) && defaultDate.getDate()==d &&!disabled )
                    })
                } onMouseDown={disabled ||d==' '? '':_this.dateClick.bind(_this,`${year}/${month+1}/${d}`)} >{d}</span></td> );
            }
        }
        return dom;
    }

    isOptionSelect(current,selectDate){
        return current.getFullYear() == selectDate.getFullYear() && current.getMonth() == selectDate.getMonth();
    }
    /**废弃*/
    onChange(e){
        let target = e.target;
        this.setState({
            selectedDate:target.value
        });
    }
    /**废弃*/
    drawSelect(){
        let select = [],
            monthList = this.month,
            //date = this.state.selectedDate,
            selectedDate = this.getSelectedDate(),
            date = selectedDate,
            years = [],
            _this = this,
            year = date.getFullYear();

        years = [new Date(year-1,1,1).getFullYear(),year,new Date(year+1,1,1).getFullYear() ];

        let option = function(){
            return (
                years.map((year)=>{
                    return monthList.map((month)=>{
                        return <option value={`${year}/${month}/1`}>{year}年{_this.getDay(month)}月</option>
                    })
                })
            )

        };
        select.push(
            <select
                className="options"
                onChange={::this.onChange}
                defaultValue={this.defaultSelectDate=selectedDate.getFullYear()+'/'+(selectedDate.getMonth()+1)+'/'+'1'}>
                {option()}
            </select>
        );
        return select;
    }

    draw(){
        let
            selectedDate = this.getSelectedDate(),
            defaultDate = this.getCurrentDate(),
            month = selectedDate.getMonth(),
            year = selectedDate.getFullYear(),
            arr = [];

        for(let i =1,firstDay = new Date(year,month,1).getDay();i<= firstDay;i++){
            arr.push(' ');
        }
        for(let i=1,monthDay = new Date(year,month+1,0).getDate();i<=monthDay;i++ ){
            arr.push(i);
        }

        let d,dom = [];
        while(arr.length > 0){
            dom.push(<tr className="body">
                {
                    this.getDates(arr,selectedDate,defaultDate )
                }
            </tr>);


        }

        return dom;
    }

    isToday(year, month, date){
        var d = this.today;
        return d.getFullYear() == year && (d.getMonth() + 1) == month && d.getDate() == date;
    }

    getDate(year, month, date){
        let {format} = this.props;

        return format.replace(/y{4}/,year).replace(/M{1,2}/, month).replace(/d{1,2}/, date);
    }

    getDay(day){
        day*=1;
        return day<=9 ? `0${day}` : day;
    }

    todayHandler(){
        this.setState({
            selectedDate:this.today,
            currentDate:this.today
        });
        this.switchWindow(0);
       // this.dateClick(`${this.today.getFullYear()}/${this.getMonth(this.today.getMonth() )}/${this.today.getDate()}`);
    }

    isParent (obj,parentObj){
        while (obj != undefined && obj != null ){
            //&& obj.nodeType==1&& obj.tagName.toUpperCase() != 'BODY'
            if (obj == parentObj){
                return true;
            }
            obj = obj.parentNode;
        }
        return false;
    }

    componentDidMount(){
        let _this = this;
        //let calendarContainer = ReactDOM.findDOMNode(this);
        /*document.addEventListener('click',function(e){
            if(_this.isParent(e.target,calendarContainer) ){
                console.dir('parent');
            }else{
                console.dir('siquba');
            }
        },false);*/
    }

    getMonth(month){
        return month+1;
    }

    getYears(){
        let year=this.switchYearForInterval(this.state.year),
            sYear = this.getSelectedDateSplit().year,
            _this=this;

        let years = (year)=>{
            let y = year-1,
                list = [];
            for (let i = -1; i < 11; i++) {
                list.push(
                    <span><i className={classnames({
                                    [_this.getClassName('selected',false)]:sYear == y,
                                    old:i == -1 || i == 10
                                })} onMouseDown={_this.switchYear.bind(this,y)}>{y}</i></span>
                );
                y += 1;
            }
            return list;
        };

        return (

            <table className="calendar">
                <thead className="eg-calendar-header">
                <th>
                    <div className={this.getClassName('icon-prev',false)} onMouseDown={this.switchYearForInterval.bind(this,year-1,true)}></div>
                </th>
                <th colSpan="5">
                    <div className="title">{`${year}年-${year + 9}年`}</div>
                </th>
                <th>
                    <div className={this.getClassName('icon-next',false)} onMouseDown={this.switchYearForInterval.bind(this,year+10,true)}></div>
                </th>
                </thead>
                <tbody>
                <tr className="month-list">
                    <td colSpan="7">
                        {years(year)}
                    </td>

                </tr>
                </tbody>
            </table>

        );
    }

    getMonths(){
        let selectDate = this.getSelectedDateSplit(),_this = this;

        return (

            <table className="calendar">
                <thead className="eg-calendar-header">
                <th>
                    <div className={this.getClassName('icon-prev',false)} onMouseDown={this.switchYear.bind(this,'-1')}></div>
                </th>
                <th colSpan="5">
                    <div className="title" onMouseDown={::this.switchWindow.bind(this,2)}>{`${selectDate.year}年`}</div>
                </th>
                <th>
                    <div className={this.getClassName('icon-next',false)} onMouseDown={this.switchYear.bind(this,'+1')}></div>
                </th>
                </thead>
                <tbody>
                    <tr className="month-list">
                        <td colSpan="7">
                        {
                            this.month.map(function(item){
                                return <span><i className={classnames({
                                    [_this.getClassName('selected',false)]:selectDate.month == item
                                })} onMouseDown={_this.switchMonth.bind(_this,item*1-1)}>{item+'月'}</i></span>;
                            })
                        }
                        </td>

                    </tr>
                </tbody>
            </table>

        );
    }

    getCalendar(){

        let selectDate = this.getSelectedDateSplit(),
            weeks=['日','一','二','三','四','五','六'];

        return (

            <table className="calendar">
                <thead className="eg-calendar-header">
                <th>
                    <div className={this.getClassName('icon-prev',false)} onMouseDown={this.switchMonth.bind(this,'-1')}></div>
                </th>
                <th colSpan="5">
                    <div className="title" onMouseDown={::this.switchWindow.bind(this,1)}>{`${selectDate.year}年${selectDate.month}月`}</div>
                </th>
                <th>
                    <div className={this.getClassName('icon-next',false)}  onMouseDown={this.switchMonth.bind(this,'+1')}></div>
                </th>
                </thead>
                <tbody>
                <tr className="head">
                    {
                        weeks.map(function(week){
                            return <td>{week}</td>
                        })
                    }
                </tr>

                {this.draw()}
                </tbody>
            </table>

        );
    }

    switchWindow(type){
        //this.setState({
        //    windowType:type
        //});
        this.props.setWindowType(type);
    }

    switchYearForInterval(ye=this.getSelectedDateSplit().year,t=false){
        let _this = this;

        //debugger;
        //let year = parseInt(ye / 10, 10) * 10;
        if(t){
            this.setState({
                year:ye
            });
        }else{
            return parseInt(ye / 10, 10) * 10;
        }

       // return year;
    }

    switchYear(type){
        let selected = this.getSelectedDate(),
            year = selected.getFullYear();

        this.setState({
            selectedDate:new Date(typeof(type)=='string'?year + eval("(" + type + ")"):type,selected.getMonth(),1 )
        });
        typeof(type)!='string' &&(this.switchWindow(1) );
    }

    switchMonth(type){
        let selected = this.getSelectedDate(),
            year = selected.getFullYear(),
            month = selected.getMonth();

        this.setState({
            selectedDate:new Date(year,typeof(type)=='string'?month + eval("(" + type + ")"):type,1 )
        });
        typeof(type)!='string' &&(this.switchWindow(0) );
    }

    getSelectedDateSplit(){
        let selectedDate = this.getSelectedDate();

        let year = selectedDate.getFullYear(),
            month = this.getMonth(selectedDate.getMonth() ),
            date = selectedDate.getDate();

        return {year,month,date};
    }


    render(){
        let {windowType}= this.props;

        windowType = this.windowType[windowType];
        //!isNaN(windowType) &&this.state.windowType==this.windowType[0] ?this.windowType[windowType] :this.state.windowType;
        return (
            <div className={
                classnames(this.getClassName('container'),this.getClassName(this.props.show?'show':'hide',false) )
            } >
                <div className="eg-calendar-box">
                    <div className="box">

                        <div className="eg-calendar-body">
                            {this[windowType]()}
                            <div style={{
                                textAlign:'right'
                            }}>
                                <span style={{
                                    cursor:'pointer'
                                }} onClick={::this.todayHandler}>今天</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}