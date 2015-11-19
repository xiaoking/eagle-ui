/**
 * Created by mac on 15/9/7.
 */
//classname前缀

function setNamespace(className){
    return `${className}`;
}
const CLASS_NAME_NAMESPACE = 'eg';

export const classConstants = {
    /**
     * 状态
     * */
    //禁用
    disabled : setNamespace('disabled'),
    //启用
    enable : setNamespace('enable'),
    block:setNamespace('block'),
    //垂直
    tacked:setNamespace('tacked'),
    //宽度自适应
    justify:setNamespace('justify'),
    //选中
    active : setNamespace('active'),
    //大小
    size : setNamespace('size'),
    //圆形样式
    radius : setNamespace('radius'),
    //隨圆
    round : setNamespace('round'),
    //向上箭头
    'arrow-up': setNamespace('arrow-up'),
    //向下箭头
    'arrow-down': setNamespace('arrow-down'),

    /**
     * 颜色
     * */
    //成功样式
    success : setNamespace('success'),
    //错误红色
    error : setNamespace('error'),
    //警告warning
    warning : setNamespace('warning'),
    //危险danger
    danger : setNamespace('danger'),
    //展示
    show: setNamespace('show'),
    white :setNamespace('white'),
    classNameNamespace:CLASS_NAME_NAMESPACE
};