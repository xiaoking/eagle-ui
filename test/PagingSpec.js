'use strict';

// To know the usage of `assert`, see: http://nodejs.org/api/assert.html
//var assert = require('assert');
import assert from 'assert';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils.js';
import Paging from '../lib/Paging.js';

describe("description", function(){
  it("创建分页组件", function(){
    let instance = TestUtils.renderIntoDocument(
        <Paging currentPage={1} pageCallback={()=>{}} total={1024} />
    );
    //assert.ok(React.findDOMNode(instance).className.match('radius') );
  });

  it('选中第一页',function(){
    let instance = TestUtils.renderIntoDocument(
        <Paging currentPage={1} total={1024} />
    );

    let dom = React.findDOMNode(instance);

    //let a = TestUtils.scryRenderedDOMComponentsWithTag(dom,'a');
    //TestUtils.findAllInRenderedTree(TestUtils.scryRenderedDOMComponentsWithTag(dom,'a'),(component)=>{
    //  console.dir(component.nodeName);
    //});
    //assert.equal(a.innerHTML,'1');
    let a = dom.querySelectorAll('a');
    assert.equal(a[0].innerHTML,'1');
    assert.ok(a[0].className.match('active'));
  });

  it('选中最后一项',function(){
    let pageSize = 20,
        total = 1024,
        currentPage = Math.ceil(total/pageSize);
    let instance = TestUtils.renderIntoDocument(
        <Paging currentPage={currentPage} total={total} pageSize={pageSize} />
    );

    let dom = React.findDOMNode(instance);
    let a = dom.querySelectorAll('a');
    assert.equal(a[a.length-1].innerHTML,String(currentPage) );
    assert.ok(a[a.length-1].className.match('active') );
  });

  it('点击分页触发回调函数',function(done){

    let pageCallback = function(){
      done();
    };

    let instance = TestUtils.renderIntoDocument(
        <Paging currentPage={1} pageCallback={pageCallback} total={1024} />
    );
    let dom = React.findDOMNode(instance);
    let a = dom.querySelectorAll('a')[1];
    TestUtils.Simulate.click(a);
  });

});

