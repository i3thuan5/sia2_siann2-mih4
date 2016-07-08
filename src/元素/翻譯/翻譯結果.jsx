
import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 合成結果 from '../合成/合成結果';
import 無合成模型 from '../合成/無合成模型';

var debug = Debug('ing7:翻譯結果');

export default class 翻譯結果 extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      頂一句腔口: undefined,
      頂一句語句: undefined,
    };
  }

  componentWillMount () {
    this.掠仔 = setInterval(this. 掠.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.掠仔);
  }

  掠()
  {
    let { 後端網址, 腔口, 語句 } = this.props;
    let { 頂一句腔口, 頂一句語句 } = this.state;
    if (腔口 != 頂一句腔口 || 語句 != 頂一句語句)
           superagent.get(後端網址 + '%E6%AD%A3%E8%A6%8F%E5%8C%96%E7%BF%BB%E8%AD%AF')
                .query({
                  '查詢腔口': 腔口,
                  '查詢語句': 語句,
                })
              .then(({ body }) => (this.setState({
              查詢結果:  {
                '查詢腔口': 腔口,
                '查詢語句': 語句,
                '翻譯正規化結果': body.翻譯正規化結果,
                '綜合標音': body.綜合標音,
              },
              頂一句腔口: 腔口,
              頂一句語句: 語句,
            })))
              .catch((err) => (this.setState({
              查詢結果:  {
                '查詢腔口': 腔口,
                '查詢語句': 語句,
                '翻譯正規化結果': '發生錯誤',
                '綜合標音': [],
                '內容': err,
              },
              頂一句腔口: 腔口,
              頂一句語句: 語句,
            })));
  }

  顯示合成結果(查詢結果)
  {
    debug(this.props);
    let { 腔口, 合成支援腔口 } = this.props;
    if (合成支援腔口.indexOf(腔口) != -1)
    {
      return (
        <合成結果 後端網址={this.props.後端網址}
          腔口={this.props.腔口}
          語句={查詢結果.翻譯正規化結果}/>
          );
    }

    return (
      <無合成模型/>
      );
  }

  render () {
    let { 查詢結果 } = this.state;
    if (!查詢結果)
    {
      return (
        <div className='main container'>
          <h3>載入中……</h3>
        </div>
        );
    }

    debug(查詢結果.綜合標音);
    let 綜合標音 = 查詢結果.綜合標音.map(
      (綜音, i)=>(
        <div key={i}>{Object.keys(綜音).map(
          (b, j)=>(<div key={j}>{b}:{綜音[b]}<br/></div>)
        )}</div>
      )
    );
    return (
        <div className='main container'>
          <h3>結果：</h3>
          <div id='輸出'>
            {查詢結果.翻譯正規化結果}
            {this.顯示合成結果(查詢結果)}
            <br/>
            {綜合標音}
          </div>
        </div>
      );
  }
}

