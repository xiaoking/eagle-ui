/**
 * Created by mac on 15/9/7.
 */
//classname前缀

'use strict';

exports.__esModule = true;
function setNamespace(className) {
  return '' + className;
}
var CLASS_NAME_NAMESPACE = 'eg';

var classConstants = {
  /**
   * 状态
   * */
  //标签新增命名空间
  //标签启用
  positive: setNamespace('positive'),
  //标签灰色
  negative: setNamespace('negative'),
  //标签无背景色
  neutral: setNamespace('neutral'),
  //标签灰白
  modest: setNamespace('modest'),
  //提示框暖色(黄色)
  warm: setNamespace('warm'),

  //禁用
  disabled: setNamespace('disabled'),
  //启用
  enable: setNamespace('enable'),
  block: setNamespace('block'),
  //垂直
  tacked: setNamespace('tacked'),
  //宽度自适应
  justify: setNamespace('justify'),
  //选中
  active: setNamespace('active'),
  //大小
  size: setNamespace('size'),
  //圆形样式
  radius: setNamespace('radius'),
  //隨圆
  round: setNamespace('round'),
  //向上箭头
  'arrow-up': setNamespace('arrow-up'),
  //向下箭头
  'arrow-down': setNamespace('arrow-down'),
  //下边线
  'bottom': setNamespace('bottom'),

  /**
   * 颜色
   * */
  //成功样式
  success: setNamespace('success'),
  //错误红色
  error: setNamespace('error'),
  //警告warning
  warning: setNamespace('warning'),
  //危险danger
  danger: setNamespace('danger'),
  //展示
  show: setNamespace('show'),
  white: setNamespace('white'),
  classNameNamespace: CLASS_NAME_NAMESPACE
};
exports.classConstants = classConstants;