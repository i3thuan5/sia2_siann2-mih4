
import React from 'react';
import Debug from 'debug';

var debug = Debug('sia2:合成結果');

export default class 合成結果 extends React.Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.後端網址 === this.props.後端網址 &&
      nextProps.腔口 === this.props.腔口 &&
      nextProps.語句 === this.props.語句) return;
    let 音檔 = this.refs.合成音檔;
    音檔.load();
  }

  play() {
    let 音檔 = this.refs.合成音檔;
    音檔.play();
  }

  render () {
    let 色 = '';
    if (this.props.色)
      色 = this.props.色;
    let 字 = '';
    if (this.props.字) {
      色 += ' labeled';
      字 = this.props.字;
    }

    return (
        <span className='HuatIm'>
          <audio ref="合成音檔">
            <source type="audio/wav"
               src={this.props.後端網址
                 + '語音合成?查詢腔口=' + this.props.腔口
                 + '&查詢語句=' + this.props.語句}/>
          </audio>
          <button onClick={this.play.bind(this)}
            className={'ui compact icon massive button ' + 色}>
            <i className='icon play'></i>
            {字}
          </button>
        </span>
      );
  }
}
