
import React from 'react';
import { Link } from 'react-router';

export default class ToLam extends React.Component {
  render () {
    return (
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
      );
  }
}
