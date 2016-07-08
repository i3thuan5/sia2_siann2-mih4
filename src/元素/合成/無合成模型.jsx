
import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';

var debug = Debug('ing7:無合成模型');

export default class 無合成模型 extends React.Component {

  render () {
    return (
        <div className='main container'>
          目前沒有族語的語音模型，歡迎一起來
          <a href='https://g0v.hackpad.com/f4rSgcFTIzz'>hackpad</a>
          討論如何製作喲！！
        </div>
      );
  }
}
