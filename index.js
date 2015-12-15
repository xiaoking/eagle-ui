
// Opt in to strict mode of JavaScript, [ref](http://is.gd/3Bg9QR)
// Use this statement, you can stay away from several frequent mistakes 
'use strict';

// How to use a foreign module ?
// Take 'jquery' for example:
//
// 1. to install a dependency, exec the command in your terminal
// ```bash
// cortex install jquery --save
// ```

// 2. use `require(id)`:

// var $ = require('jquery');


// 3. define exports:
// `exports` is the API of the current module,
// If another module `require('eagle-ui')`, it returns `exports`

// exports.my_method = function() {
// };

// or you could code like this:

// module.exports = {
// 	 my_method: function() {
// 	 }
// };

// But, NEVER do this: (Why?)
// exports = {my_method: ...}
import include from './lib/_include.less';

//import Mask from './lib/mask/mask';

export Grid from './lib/Grid';
export Col from './lib/Col';
export Row from './lib/Row';
export Button from './lib/Button';
export ButtonGroup from './lib/ButtonGroup';
export CheckboxGroup from './lib/CheckboxGroup.js';
export Input from './lib/Input.js';
export RadioGroup from './lib/RadioGroup.js';
export Label from './lib/Label.js';
export Crumb from './lib/Crumb.js';
export Search from './lib/Search.js';
export Select from './lib/Select.js';
export LabelGroup from './lib/LabelGroup.js';
export Toast from './lib/Toast.js';
export Paging from './lib/Paging.js';
export Calendar from './lib/Calendar';
export Tab from './lib/Tab.js';
export Tabset from './lib/Tabset.js';

export Dialog from './lib/Dialog.js';
export Tooltip from './lib/Tooltip.js';
export Panel from './lib/Panel/Panel.js'
export PanelContent from './lib/Panel/PanelContent.js'
export PanelFooter from './lib/Panel/PanelFooter.js'
export PanelHeader from './lib/Panel/PanelHeader.js'

export List from './lib/List.js';
export Item from './lib/Item.js';
export ValidatorPanel from './lib/ValidatorPanel';


export Table from './lib/Table/Table.js';
export Tr from './lib/Table/Tr.js';
export Td from './lib/Table/Td.js';
export Th from './lib/Table/Th.js';
window['Eagleui'] = {};

[
    'Grid','Col','Row',
    'Button','ButtonGroup','CheckboxGroup','Input','RadioGroup','Label','ValidatorPanel',
    'Crumb','Search','Select','LabelGroup','Toast','Paging','Calendar','Tab','Tabset','Dialog','Tooltip',
    'Panel','PanelContent','PanelFooter','PanelHeader','List','Item',
    'Table','Tr','Td','Th'
].forEach(function(clazzName){
    Eagleui[clazzName] =exports[clazzName];
});