/**
 * Created by mac on 16/1/3.
 */
'use strict';

exports.__esModule = true;

exports['default'] = function (obj) {

    var getVal = function getVal(vals, val) {
        return (vals.join(',') + ',').match(val.toLowerCase() + ',') != null ? val : '';
    };

    var properties = {
        //类型
        egType: function egType(val) {
            return getVal(['tacked', 'justify', 'success', 'error', 'warning', 'danger', 'default', 'normal', 'simple', 'form'], val);
        },
        egSize: function egSize(val) {
            return getVal(['lg', 'sm', 'xs', 'md'], val);
        },
        egColor: function egColor(val) {
            return { color: val };
        },
        egStyle: function egStyle(val) {
            return getVal(['success', 'error', 'warning', 'danger', 'default', 'link', 'white'], val);
        },
        status: function status(val) {
            getVal(['diabled', 'active', 'enable'], val);
        },
        disabled: true,
        active: true,
        radius: true,
        radiusSize: function radiusSize(val) {
            return {
                WebkitBorderRadius: val,
                borderRadius: val
            };
        },
        round: true,
        classPrefix: function classPrefix(val) {
            return {
                type: 'property',
                value: val
            };
        },
        componentTag: function componentTag(val) {
            return {
                type: 'property',
                value: val
            };
        },
        clearfix: true,
        clear: true,
        egHref: true,
        show: true,
        hide: true,
        block: true,
        column: function column(val) {
            return val;
        },
        zIndex: function zIndex(val) {
            if (typeof val == 'string') {
                return {
                    zIndex: val
                };
            }
            return 'zindex';
        },
        border: function border(val) {
            if (typeof val == 'string') {
                return {
                    border: val
                };
            }
            return 'border';
        },
        padding: function padding(val) {
            if (typeof val == 'string') {
                return {
                    padding: val
                };
            }
            return 'padding';
        },
        margin: function margin(val) {
            if (typeof val == 'string') {
                return {
                    margin: val
                };
            }
            return 'margin';
        },
        offset: (function (val) {
            return this.props.egSize + '-offset-' + val;
        }).bind(obj),
        align: function align(val) {
            return getVal(['center', 'left', 'middle', 'auto', 'top', 'right', 'bottom'], val);
        },
        mode: true,
        params: function params(val) {
            return {
                type: 'property',
                value: val
            };
        },
        icon: function icon(val) {
            return {
                type: 'property',
                value: val
            };
        }
    };

    obj.prototype.properties = properties;
};

module.exports = exports['default'];