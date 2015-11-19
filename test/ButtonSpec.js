'use strict';

// To know the usage of `assert`, see: http://nodejs.org/api/assert.html
//var assert = require('assert');
import assert from 'assert';
import React from 'react';
import Button from '../lib/Button.js';
import ButtonGroup from '../lib/ButtonGroup.js';
import TestUtils from 'react/lib/ReactTestUtils.js';

describe("description", function(){
  it("创建单个按钮", function(){
    let instance = TestUtils.renderIntoDocument(
        <Button radius egSize="sm">我是按钮</Button>
    );
    assert.ok(React.findDOMNode(instance).className.match('radius') );
  });

  it('创建按钮组，由多个按钮组成，圆角',function(){
    let instance = TestUtils.renderIntoDocument(
        <ButtonGroup justify>
          <Button radius egSize="sm" egStyle="warning">按钮组</Button>
          <Button radius egSize="sm" egStyle="warning">按钮组</Button>
          <Button radius egSize="sm" egStyle="warning">按钮组</Button>
        </ButtonGroup>
    );

    assert.ok(React.findDOMNode(instance).className.match('justify') );

  });

});

