import _ from 'lodash'

function GetRandonNumbers() {
    const element = document.createElement('div');
    const h1 = document.createElement('h1');

    const getRandomInteger = ()=> Math.round(Math.random() * 100)
    const res = _.times(5, getRandomInteger)

    h1.innerHTML = res

    element.appendChild(h1)

    return element
  }
  
export default GetRandonNumbers