import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import {
  Block,
  ButtonStack,
  CopyButton,
  DownloadButton,
  PlayButton,
  HanLoTsua,
  意傳服務
} from 'demo-ui';
import 合成結果 from '../合成/合成結果';
import { 計算複製內容 } from './複製內容';

var debug = Debug('sia2:翻譯結果');

export default class 翻譯結果 extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
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
    let { 頂一句語句 } = this.state;
    if (語句 != 頂一句語句)
    {
      superagent.get(後端網址 + '%E6%AD%A3%E8%A6%8F%E5%8C%96%E7%BF%BB%E8%AD%AF')
        .query({
            '查詢腔口': 腔口,
            '查詢語句': 語句,
          })
        .then(({ body }) => (this.setState({
          查詢結果:  {
            '查詢語句': 語句,
            '分詞': body.分詞,
            '綜合標音': body.綜合標音,
          },
          頂一句語句: 語句,
        })))
        .catch((err) => (this.setState({
          查詢結果:  {
            '查詢語句': 語句,
            '分詞': '發生錯誤',
            '綜合標音': [],
            '內容': err,
          },
          頂一句語句: 語句,
        })));
    }
  }

  顯示合成結果(分詞)
  {
    return (
      <合成結果 後端網址={this.props.後端網址}
        腔口={this.props.腔口}
        語句={分詞}/>
    );
  }

  綜合標音() {
    const { 腔口 } = this.props;
    const { 查詢結果 } = this.state;
    const 綜合標音 = 查詢結果.綜合標音 || [];
    let src = '';
    return 綜合標音.map((綜音, i) => {
        src = 意傳服務.語音合成({
          腔口,
          分詞: 綜音.分詞,
        });
        return (
        <HanLoTsua
          key={i}
          src={src}
          漢字={綜音.漢字}
          臺羅閏號調={綜音.臺羅閏號調}/>
        );
      });
  }

  取得複製鈕群() {
    let { 查詢結果 } = this.state;
    let 複製內容 = {};
    複製內容 = 計算複製內容(查詢結果.綜合標音);
    複製內容.分詞 = 查詢結果.分詞;

    const 複製鈕群 = [];
    Object.keys(複製內容).forEach((key) => {
      複製鈕群.push(
        <CopyButton key={key} 複製內容={複製內容[key]} 按鈕名={key}/>,
      );
    });
    return 複製鈕群;
  }

  取得整段鈕() {
    const { 腔口 } = this.props;
    const { 查詢結果 } = this.state;
    const 分詞 = 查詢結果.分詞;
    const src = 意傳服務.語音合成({ 腔口, 分詞 });
    return (
      <Block>
        <DownloadButton src={src}>
          整段下載
        </DownloadButton>
         <PlayButton src={src}>
          整段播放
        </PlayButton>
      </Block>
    );
  }

  render () {
    const { 查詢結果 } = this.state;
    if (!查詢結果)
    {
      return (
        <div className='main'>
          <h3>載入中……</h3>
        </div>
      );
    }

    const 複製鈕群 = this.取得複製鈕群();
    const 整段區 = this.取得整段鈕();
    const 綜合標音 = this.綜合標音();
    return (
        <div>
          <ButtonStack>
            {複製鈕群}
          </ButtonStack>
          {整段區}
          {綜合標音}
        </div>
      );
  }
}

