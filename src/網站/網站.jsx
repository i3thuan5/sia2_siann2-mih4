import React from 'react';
import ToLam from '../元素/導覽/導覽';

import Debug from 'debug';
var debug = Debug('ing7:網站');

export default class 網站 extends React.Component {

  跳到腔口語句 (腔口, 語句) {
    //'%E8%AC%9B' == '講'
    this.props.history.replace('/%E8%AC%9B/' + 腔口 + '/' + 語句);
  }

  render () {
    return (
        <div className='app background'>
          <header className='app header'>
            <ToLam/>
          </header>
          {React.cloneElement(this.props.children,
            { 後端網址: 'http://140.109.16.144/',
            跳到腔口語句: this.跳到腔口語句.bind(this),
          }
          )}
          <footer className='app footer inverted'>
            <ul className='ui menu container inverted'>
              <li className='item'>
                <a href='https://g0v.hackpad.com/f4rSgcFTIzz'>我想幫忙</a>
              </li>
              <li className='item'>
                <a href='http://sih4sing5hong5.github.io/tai5-uan5_gian5-gi2_hok8-bu7/%E5%8C%AF%E5%85%A5%E8%B3%87%E6%96%99.html'>語料來源</a>
              </li>
              <li className='item'>
                <a href='http://docs.tai5uan5gian5gi2hok8bu7.apiary.io/'>服務API</a>
            </li>
            </ul>
          </footer>
        </div>
      );
  }
}

