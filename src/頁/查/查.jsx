
import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 翻譯結果 from '../../元素/翻譯/翻譯結果';

var debug = Debug('ing7:查');

export default class 查 extends React.Component {

  componentWillMount () { this.掠(this.props); }

  componentWillReceiveProps (nextProps) {
    if (nextProps.後端網址 === this.props.後端網址) return;
    this.掠(nextProps);
  }

  constructor (props) {
    super(props);
    this.state = {
      腔口: this.props.params.khiunn || '閩南語',
      語句: this.props.params.ku || '你好嗎？我很好！',
      翻譯支援腔口: ['載入中……'],
      合成支援腔口: ['載入中……'],
    };
  }

  跳到語句 (textarea) {
    let 語句 = textarea.target.value;
    this.setState({ 語句 });
    this.props.跳到腔口語句(語句);
  }

  render () {
    let { 腔口, 語句, 翻譯支援腔口, 合成支援腔口 } = this.state;
    let 全部腔口 = 翻譯支援腔口.map(
      (腔口)=>(<option key={腔口} value={腔口}>{腔口}</option>)
    );
    return (
      <div className='main container'>
        <textarea id='語句' defaultValue={語句} onKeyUp={this.跳到語句.bind(this)}></textarea>
        <br/>
        <翻譯結果 後端網址={this.props.後端網址}
            腔口={'閩南語'}
            語句={語句}
          />
      </div>
    );
  }
}
