
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

  掠(props)
  {
    let { 後端網址 } = props;
    superagent.get(後端網址 + '正規化翻譯支援腔口')
        .then(({ body }) =>    this.setState({ 翻譯支援腔口: body.腔口 }))
        .catch((err) => (['發生錯誤']));
    superagent.get(後端網址 + '語音合成支援腔口')
        .then(({ body }) =>    this.setState({ 合成支援腔口: body.腔口 }))
        .catch((err) => (['發生錯誤']));
  }

  換腔口 (_select) {
    let 腔口 = _select.target.value;
    this.setState({ 腔口 });
    this.props.跳到腔口語句(腔口, this.state.語句);
  }

  跳到語句 (textarea) {
    let 語句 = textarea.target.value;
    this.setState({ 語句 });
    this.props.跳到腔口語句(this.state.腔口, 語句);
  }

  render () {
    let { 腔口, 語句, 翻譯支援腔口, 合成支援腔口 } = this.state;
    let 全部腔口 = 翻譯支援腔口.map(
      (腔口)=>(<option key={腔口} value={腔口}>{腔口}</option>)
    );
    return (
      <div className='main container'>
        <select onChange={this.換腔口.bind(this)} value={腔口}>
          {全部腔口}
        </select>
        <textarea id='語句' defaultValue={語句} onKeyUp={this.跳到語句.bind(this)}></textarea>
        <br/>
        <翻譯結果 後端網址={this.props.後端網址}
            腔口={腔口}
            語句={語句}
            合成支援腔口={合成支援腔口}
          />
      </div>
    );
  }
}
