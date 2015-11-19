'use strict';

// To know the usage of `assert`, see: http://nodejs.org/api/assert.html
//var assert = require('assert');
import assert from 'assert';
import React from 'react';
import Dialog from '../lib/Dialog.js';
import TestUtils from 'react/lib/ReactTestUtils.js';

describe("Dialog", function(){
  it("创建弹层", function(){
    let instance = TestUtils.renderIntoDocument(
        <Dialog type='dialog' title='重要提示' show successCallback={function(){alert('a');}}>
          <div style={{color:'#333'}}>
            确认删除小肥羊华东自账户吗？
            删除后将无法恢复
            确认删除小肥羊华东自账户吗？
            删除后将无法恢复
          </div>
        </Dialog>
    );
    assert.ok(React.findDOMNode(instance).className.match('dialog') );
  });


});

