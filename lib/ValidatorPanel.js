import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';

@ClassNameMixin
export default class ValidatorPanel extends Component {
    static propTypes = {
        //触发点，change blur  manual（手动）
        trigger:PropTypes.string,
        submitCallback:PropTypes.func
    };

    static defaultProps = {
        componentTag: 'form',
        trigger:'blur keyup focus click',
        message:{
            required: '不能为空',
            date: '请正确填写日期',
            number: '请输入一个有效的号码',
            url: '请输入一个有效的URL',
            email: '请输入一个有效的电子邮件地址',
            dateISO: '请输入一个有效的日期(ISO)',
            digits: '请输入数字',
            equalTo:'请再次输入相同的值。',
            minlength: '请输入至少{0}字符',
            maxlength: '请输入不超过{0}字符',
            rangelength: '请输入一个值{0}和{1}字符之间',
            min: '请输入一个值大于或等于{0}',
            max: '请输入一个值小于或等于{0}',
            range: '请输入一个值{0} - {1}'
        }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {

        };
    }

    optional(element) {
        var val = this.getValue(element );
        return !this.options.defaultRules.required.call( this, val, element );
    }

    required( value, element ) {

        if ( element.nodeName.toLowerCase() === "select" ) {
            var val = $( element ).val();
            return val && val.length > 0;
        }
        if ( this.checkable( element ) ) {
            return this.getLength( value, element ) > 0;
        }
        return $.trim( value ).length > 0;
    }

    date( value, element ) {
        return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
    }

    number( value, element ) {
        return this.optional( element ) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
    }

    url( value, element ) {
        return this.optional( element ) ||
            /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
    }
    email( value, element ) {

        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
    }
    dateISO( value, element ) {
        return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
    }
    digits( value, element ) {
        return this.optional( element ) || /^\d+$/.test( value );
    }
    equalTo( value, element, param ) {
        var target = $( param );
        if ( this.onfocus ) {
            target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
                this.show();
            });
        }
        return this.optional( element ) || value === target.val();
    }
    minlength( value, element, param ) {
        var length = $.isArray( value ) ? value.length : this.getLength( value, element );
        return this.optional( element ) || length >= param;
    }
    maxlength( value, element, param ) {
        var length = $.isArray( value ) ? value.length : this.getLength( value, element );
        return this.optional( element ) || length <= param;
    }
    rangelength( value, element, param ) {
        var length = $.isArray( value ) ? value.length : this.getLength( value, element );
        return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
    }
    min( value, element, param ) {
        return this.optional( element ) || value >= param;
    }
    max( value, element, param ) {
        return this.optional( element ) || value <= param;
    }
    range( value, element, param ) {
        return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
    }

    bindValidate(){

        let options = React.Children.map(this.props.children,(option)=>{
            //将validate保存起来，在适当的时候调用
            return React.cloneElement(option,{

            });
        },this);
        return options;
    }

    render() {

        let {componentTag:Component} = this.props;

        return (
            <Component {...this.props}>
                {this.bindValidate()}
            </Component>
        );
    }

}