YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Button",
        "ButtonGroup",
        "Calendar",
        "CalendarPanel",
        "Col",
        "Grid",
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
        "Select",
        "Tab",
        "Table",
        "ValidatorPanel",
        "crumb",
        "dialog",
        "toast"
    ],
    "modules": [
        "form",
        "grid",
        "ui"
    ],
    "allModules": [
        {
            "displayName": "form",
            "name": "form",
            "description": "表单验证组件<br />\n默认规则有<br/>\n<pre>\n    required：是否必填\n    date：日期格式验证\n    number：是否是有效的号码\n    url：url规则验证\n    dateISO：日期ISO验证\n    digits：是否是数字\n    equalTo：值对比\n    minlength：最少输入\n    maxlength：最大输入\n    email：邮箱验证\n    rangelength：字符大小需在某个区间之内\n    min：输入的值需要大于等于此规则定义的值\n    max：输入的值需要小于等于此规则定义的值\n    range：一个区间取值范围\n\n</pre>",
            "classes": [
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
                },
                {
                    "name": "Tab"
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
            "displayName": "ui",
            "name": "ui",
            "description": "提示组件",
            "classes": [
                {
                    "name": "Calendar"
                },
                {
                    "name": "crumb"
                },
                {
                    "name": "Item"
                },
                {
                    "name": "toast"
                },
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
                },
                {
                    "name": "Table"
                },
                {
                    "name": "Paging"
                },
                {
                    "name": "CalendarPanel"
                },
                {
                    "name": "dialog"
                },
                {
                    "name": "Label"
                },
                {
                    "name": "LabelGroup"
                },
                {
                    "name": "List"
                }
            ]
        }
    ]
} };
});