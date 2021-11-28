let nestedArray = [
  ['deep'],
  [
    ['deeper'],['deeper']
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

console.log(nestedArray[2][1][0][0][0]);

nestedArray[2][1][0][0][0] = 'deeper Still';
console.log(nestedArray[2][1][0][0][0]);