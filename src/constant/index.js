export const IndexesArr = [{
    title: 'A',
    key: 'A',
    items: []
  },
  {
    title: 'B',
    key: 'B',
    items: []
  },
  {
    title: 'C',
    key: 'C',
    items: []
  },
  {
    title: 'D',
    key: 'D',
    items: []
  },
  {
    title: 'E',
    key: 'E',
    items: []
  },
  {
    title: 'F',
    key: 'F',
    items: []
  },
  {
    title: 'G',
    key: 'G',
    items: []
  },
  {
    title: 'H',
    key: 'H',
    items: []
  },
  {
    title: 'I',
    key: 'I',
    items: []
  },
  {
    title: 'J',
    key: 'J',
    items: []
  },
  {
    title: 'K',
    key: 'K',
    items: []
  },
  {
    title: 'L',
    key: 'L',
    items: []
  },
  {
    title: 'M',
    key: 'M',
    items: []
  },
  {
    title: 'N',
    key: 'N',
    items: []
  },
  {
    title: 'O',
    key: 'O',
    items: []
  },
  {
    title: 'P',
    key: 'P',
    items: []
  },
  {
    title: 'Q',
    key: 'Q',
    items: []
  },
  {
    title: 'R',
    key: 'R',
    items: []
  },
  {
    title: 'S',
    key: 'S',
    items: []
  },
  {
    title: 'T',
    key: 'T',
    items: []
  },
  {
    title: 'U',
    key: 'U',
    items: []
  },
  {
    title: 'V',
    key: 'V',
    items: []
  },
  {
    title: 'W',
    key: 'W',
    items: []
  },
  {
    title: 'X',
    key: 'X',
    items: []
  },
  {
    title: 'Y',
    key: 'Y',
    items: []
  },
  {
    title: 'Z',
    key: 'Z',
    items: []
  },
  {
    title: '#',
    key: 'other',
    items: []
  },
]
// ่กจๆ
export const Emojis = [
  '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐คฃ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐',
  '๐', '๐', '๐', '๐', '๐', '๐', '๐ค', '๐ค', '๐ค', '๐', '๐คก', '๐ค ', '๐', '๐', '๐', '๐', '๐', '๐',
  '๐', '๐', 'โน๏ธ', '๐ฃ', '๐', '๐ซ', '๐ฉ', '๐ค', '๐ ', '๐ก', '๐ถ', '๐', '๐', '๐ฏ', '๐ฆ', '๐ง', '๐ฎ', '๐ฒ',
  '๐ต', '๐ณ', '๐ฑ', '๐จ', '๐ฐ', '๐ข', '๐ฅ', '๐คค', '๐ญ', '๐', '๐ช', '๐ด', '๐', '๐ค', '๐คฅ', '๐ฌ', '๐ค', '๐คข',
  '๐คง', '๐ท', '๐ค', '๐ค', '๐', '๐ฟ', '๐น', '๐บ', '๐ฉ', '๐ป', '๐', 'โ ๏ธ', '๐ฝ', '๐พ', '๐ค', '๐', '๐บ', '๐ธ',
  '๐น', '๐ป', '๐ผ', '๐ฝ', '๐', '๐ฟ', '๐พ', '๐', '๐', '๐', '๐', '๐ค', '๐', '๐', '๐', 'โ', '๐ค', '๐ค',
  '๐ค', 'โ', '๐ค', '๐', '๐', '๐', '๐', '๐', 'โ', 'โ', '๐ค', '๐', '๐', '๐', '๐ค', '๐ช', '๐', 'โ', '๐คณ',
  '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฃ', '๐', '๐', '๐ฃ', '๐ค', '๐ฅ'
]
// ่ฟๆฌพ็ถๆ
export const cashOutStatus = [{
    value: 0,
    label: 'ๅทฒ่ฟๆฌพ'
  },
  {
    value: 1,
    label: 'ๆช่ฟๆฌพ'
  },
  {
    value: 2,
    label: 'ๅทฒ่ฟ้จๅ'
  },
  {
    value: 3,
    label: 'ไปๆฌพๅคฑ่ดฅ'
  }
]
export const cashOuts = ['ๅทฒ่ฟๆฌพ', 'ๆช่ฟๆฌพ', 'ๅทฒ่ฟ้จๅ', 'ไปๆฌพๅคฑ่ดฅ']

// ่ฎขๅ่กจๅ
export const orderForm = [{
    title: 'ๅๅไฟกๆฏ',
    fitems: [{
        key: 'keyword',
        label: 'ๅๅID๏ผ',
        type: 'input',
        otherType: 'text',
        ph:'่ฏท่พๅฅIDๆๅ็งฐๆ็ดข',
        disable:false,
        require:true,
        range:[],
        show:true
      },
      {
        key: 'storeName',
        label: 'ๅบ้บๅ็งฐ๏ผ',
        type: 'input',
        otherType: 'text',
        ph:'ๅบ้บๅ็งฐ',
        disable:true,
        require:true,
        range:[],
        show:true
      },
      {
        key: 'asin',
        label: 'ASIN๏ผ',
        type: 'input',
        otherType: 'text',
        ph:'asin',
        disable:true,
        require:true,
        range:[],
        show:true
      },
      {
        key: 'scalpingProductPrice',
        label: 'ๅๅไปทๆ ผ๏ผ',
        type: 'input',
        otherType: 'digit',
        ph:'่ฏท่พๅฅ',
        disable:false,
        require:true,
        range:[],
        show:true
      }
    ]
  },
  {
    title: '่ฎขๅไฟกๆฏ',
    fitems: [
      {
        key: 'orderNumber',
        label: '่ฎขๅ็ผๅท๏ผ',
        type: 'input',
        otherType: 'text',
        ph:'่ฏท่พๅฅ',
        disable:false,
        require:false,
        range:[],
        show:true
      },
      {
        key: 'orderImageDate',
        label: '่ฎขๅๆฅๆ๏ผ',
        type: 'date',
        disable:false,
        require:false,
        range:[],
        show:true,
      },
      {
        key: 'orderPrice',
        label: '่ฎขๅ้้ข๏ผ',
        type: 'input',
        otherType: 'digit',
        ph:'่ฏท่พๅฅ',
        disable:false,
        require:false,
        range:[],
        show:true
      },
      {
        key: 'orderCommission',
        label: '้ขๅค่ดน็จ๏ผ',
        type: 'input',
        otherType: 'digit',
        ph:'่ฏท่พๅฅ',
        disable:false,
        require:false,
        range:[],
        show:true
      },
      {
        key: 'cashOutPrice',
        label: '่ฟๆฌพ้้ข๏ผ',
        type: 'input',
        otherType: 'digit',
        ph:'่ฎขๅ้้ข + ไฝฃ้',
        disable:true,
        require:false,
        range:[],
        show:true
      },
      {
        key: 'includedTax',
        label: 'Paypalๆ็ปญ่ดน๏ผ',
        type: 'radio',
        range:[
          {label:'ๅๅซ',value:1},
          {label:'ไธๅๅซ',value:0}
        ],
        require:false,
        show:true,
        disable:false
      },
      {
        key: 'orderImgType',
        label: 'ๆชๅพ็ฑปๅ๏ผ',
        type: 'radio',
        range:[
          {label:'ๆๆบ',value:1},
          {label:'็ต่',value:2}
        ],
        require:false,
        show:true,
        disable:false
      },
      {
        key: 'categoryId',
        label: '่ฎขๅๅ็ป๏ผ',
        type: 'selector',
        require:false,
        disable:false,
        range:[],
        show:true,
      },
      {
        key: 'orderNote',
        label: '่ฎขๅๅคๆณจ๏ผ',
        type: 'input',
        otherType: 'text',
        ph:'่ฏท่พๅฅ',
        disable:false,
        require:false,
        range:[],
        show:true
      },
      {
        key: 'orderImage',
        label: '่ฎขๅๆชๅพ๏ผ',
        type: 'img',
        disable:false,
        require:false,
        range:[],
        show:true,
      },
    ]
  },
  {
    title: 'ๆต่ฏไฟกๆฏ',
    fitems: [
      {
        key: 'commentWay',
        label: '่ฏ่ฎบๆนๅผ๏ผ',
        type: 'selector',
        require:true,
        disable:false,
        range: [{
            value: 0,
            label: 'ๆๅญ็่ฏ'
          },
          {
            value: 1,
            label: 'ๅ่ฏ'
          },
          {
            value: 2,
            label: 'ๅพ็็่ฏ'
          },
          {
            value: 3,
            label: '่ง้ข็่ฏ'
          },
          {
            value: 4,
            label: 'ๆ็บง่ฏไปท'
          },
          {
            value: 5,
            label: 'feedback'
          }
        ],
        show:true,
      },
      {
        key: 'cashOutType',
        label: '่ฟๆฌพๆนๅผ๏ผ',
        type: 'selector',
        disable:false,
        require:true,
        range:[
        { value: 12, label: 'ไบบๅทฅ่ฟๆฌพ' },
        { value: 10, label: '่ฏๅ่ฟ' },
        { value: 11, label: '่ฏๅๅ่ฟ' },
        { value: 9, label: '่ฏๅๅจ่ฟ' },
        { value: 13, label: 'ๅ่ดงๅๅจ่ฟ' },
        { value: 6, label: 'ๅ่ดง่ฟไธๅ๏ผ่ฏๅ่ฟไธๅ' },
        { value: 8, label: 'ๆถ่ดง่ฟไธๅ๏ผ่ฏๅ่ฟไธๅ' },
        { value: 4, label: 'ไธๅ่ฟไธๅ๏ผ่ฏๅ่ฟไธๅ' }],
        show:true,
      },
      {
        key: 'isCashout',
        label: '่ฟๆฌพ็ถๆ๏ผ',
        type: 'selector',
        disable:true,
        require:false,
        range:cashOutStatus,
        show:true,
      },
      {
        key: 'orderChannelId',
        label: '่ฎขๅๆฅๆบ๏ผ',
        type: 'selector',
        require:true,
        range:[
        { value: 0, label: 'FB' },
        { value: 1, label: '้FB' }],
        show:true,
        disable:false
      },
      {
        key: 'amazonOrderStatus',
        label: 'ไบ้ฉฌ้่ฎขๅ็ถๆ๏ผ',
        type: 'selector',
        require:false,
        disable:false,
        range:[
        { value: 0, label: 'ๆ ่ฎฐๅฝ' },
        { value: 1, label: 'ๆชๅฎๆ' },
        { value: 2, label: '้่ดง' },
        { value: 3, label: 'ๅทฒๅ่ดง' },
        { value: 4, label: 'ๅถไป' },
        { value: 5, label: 'ๅทฒๅๆถ' }],
        show:true,
      },
      {
        key: 'commentUrl',
        label: '่ฏ่ฎบ้พๆฅ๏ผ',
        type: 'input',
        otherType: 'text',
        ph:'่ฏท่พๅฅ',
        disable:false,
        require:false,
        range:[],
        show:true
      },
      {
        key: 'commentImage',
        label: '่ฏ่ฎบๆชๅพ๏ผ',
        type: 'img',
        disable:false,
        require:false,
        range:[],
        show:true,
      }
    ]
  },
  {
    title:'ไนฐๅฎถไฟกๆฏ',  
    fitems:[
      {
        key: 'payWay',
        label: 'ๆถๆฌพๆนๅผ๏ผ',
        type: 'selector',
        require:true,
        disable:false,
        range:[
          { value: 1, label: 'PayPal' },
          { value: 3, label: 'Alipay(ๆฏไปๅฎ)' },
          { value: 4, label: 'WeChat(ๅพฎไฟก)' },
          { value: 5, label: '็คผๅๅก' }],
        show:true,
      },
      {
        key: 'giftCard',
        label: '็คผๅ็ ๏ผ',
        type: 'input',
        otherType: 'text',
        ph:'่ฏท่พๅฅ',
        disable:false,
        require:false,
        range:[],
        show:false
      },
      {
        key: 'paypalAccount',
        label: 'ๆถๆฌพ่ดฆๅท๏ผ',
        type: 'input',
        otherType: 'text',
        ph:'่ฏท่พๅฅ',
        disable:false,
        require:true,
        range:[],
        show:true
      },
    ]
  }

]
