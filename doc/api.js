YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Button",
        "ButtonGroup",
        "Calendar",
        "CalendarPanel",
        "CheckboxGroup",
        "Col",
        "Crumb",
        "Dialog",
        "Grid",
        "Input",
        "Item",
        "Label",
        "LabelGroup",
        "List",
        "Paging",
        "Panel",
        "PanelContent",
        "PanelFooter",
        "PanelHeader",
        "RadioGroup",
        "Row",
        "Search",
        "Select",
        "Slider",
        "Star",
        "Suggestion",
        "Tab",
        "Table",
        "Tabset",
        "Td",
        "Th",
        "Toast",
        "Tooltip",
        "TooltipPanel",
        "Tr",
        "ValidatorPanel"
    ],
    "modules": [
        "form",
        "grid",
        "panel",
        "table",
        "ui"
    ],
    "allModules": [
        {
            "displayName": "form",
            "name": "form",
            "description": "表单验证组件<br />\n在需要验证的表单元素上添加data-validate属性，<!--表单元素初始化值请绑定上data-field=“fieldName”,fieldName对应数据字段名称--> <br />\n默认规则有<br/>\n<pre>\n    required：是否必填\n    date：日期格式验证\n    number：是否是有效的号码\n    url：url规则验证\n    dateISO：日期ISO验证\n    digits：是否是数字\n    equalTo：值对比\n    minlength：最少输入\n    maxlength：最大输入\n    email：邮箱验证\n    rangelength：字符大小需在某个区间之内\n    min：输入的值需要大于等于此规则定义的值\n    max：输入的值需要小于等于此规则定义的值\n    range：一个区间取值范围\n\n</pre>",
            "classes": [
                {
                    "name": "CheckboxGroup"
                },
                {
                    "name": "Input"
                },
                {
                    "name": "RadioGroup"
                },
                {
                    "name": "Select"
                },
                {
                    "name": "ValidatorPanel"
                },
                {
                    "name": "Button"
                },
                {
                    "name": "ButtonGroup"
                }
            ]
        },
        {
            "displayName": "grid",
            "name": "grid",
            "description": "行",
            "classes": [
                {
                    "name": "Grid"
                },
                {
                    "name": "Row"
                },
                {
                    "name": "Col"
                }
            ]
        },
        {
            "displayName": "panel",
            "name": "panel",
            "description": "Panel组件",
            "classes": [
                {
                    "name": "Panel"
                },
                {
                    "name": "PanelContent"
                },
                {
                    "name": "PanelFooter"
                },
                {
                    "name": "PanelHeader"
                }
            ]
        },
        {
            "displayName": "table",
            "name": "table",
            "description": "表格组件",
            "classes": [
                {
                    "name": "Th"
                },
                {
                    "name": "Table"
                },
                {
                    "name": "Td"
                },
                {
                    "name": "Tr"
                }
            ]
        },
        {
            "displayName": "ui",
            "name": "ui",
            "description": "星级评价",
            "classes": [
                {
                    "name": "Crumb"
                },
                {
                    "name": "Slider"
                },
                {
                    "name": "Item"
                },
                {
                    "name": "Search"
                },
                {
                    "name": "Star"
                },
                {
                    "name": "Calendar"
                },
                {
                    "name": "CalendarPanel"
                },
                {
                    "name": "Dialog"
                },
                {
                    "name": "Label"
                },
                {
                    "name": "LabelGroup"
                },
                {
                    "name": "List"
                },
                {
                    "name": "Paging"
                },
                {
                    "name": "Tooltip"
                },
                {
                    "name": "Suggestion"
                },
                {
                    "name": "Tab"
                },
                {
                    "name": "Tabset"
                },
                {
                    "name": "Toast"
                },
                {
                    "name": "TooltipPanel"
                }
            ]
        }
    ]
} };
});