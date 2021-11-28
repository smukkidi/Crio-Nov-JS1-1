let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
}

nestedObject.data.onlineStatus.busy = 10;

console.log(nestedObject);

// let selectedFood = getCurrentFood(scannedItem);
// let inventory = foods[selectedFood];


// console.log(selectedFood);
// console.log(inventory);

