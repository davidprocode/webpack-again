import _ from 'lodash'

function GetRandonNumbers() {
    const element = document.createElement('div');
    const p = document.createElement('p');

    const getRandomInteger = ()=> Math.round(Math.random() * 100)
    const res = _.times(5, getRandomInteger)

    p.innerHTML = res
    p.className = 'text-sm font-medium text-gray-900'

    element.classList = 'divide-y divide-gray-200'

    element.appendChild(p)

    return element
  }
  
export default GetRandonNumbers