import React from 'react';
import 頁頭 from '../元素/導覽/頁頭';
import 頁尾 from '../元素/導覽/頁尾';

import Debug from 'debug';
var debug = Debug('ing7:網站');

export default class 網站 extends React.Component {

  跳到腔口語句 (語句) {
    //'%E8%AC%9B' == '講'
    this.props.history.replace('/%E8%AC%9B/' +  語句);
  }

  render () {
    return (
        <div className='app background'>
          <頁頭/>
          {React.cloneElement(this.props.children,
            { 後端網址: 'http://140.109.16.144/',
            跳到腔口語句: this.跳到腔口語句.bind(this),
          }
          )}
          <頁尾/>
        </div>
      );
  }
}

