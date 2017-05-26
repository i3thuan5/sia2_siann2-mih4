import React from 'react';
import {Layout} from 'demo-ui';
import 頁頭 from './頁頭';
import 頁尾 from './頁尾';
import Debug from 'debug';
var debug = Debug('sia2:網站');

export default class 網站 extends React.Component {

  跳到語句 (語句) {
    //'%E8%AC%9B' == '講'
    this.props.history.replace('/%E8%AC%9B/' +  encodeURI(語句));
  }

  render () {
    return (
        <Layout>
          <頁頭/>
          {
            React.cloneElement(
              this.props.children,
              {
                後端網址: 'https://xn--lhrz38b.xn--v0qr21b.xn--kpry57d/',
                跳到語句: this.跳到語句.bind(this),
              }
            )
          }
          <頁尾/>
        </Layout>
      );
  }
}

