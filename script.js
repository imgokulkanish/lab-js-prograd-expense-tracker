window.onload = () => {
    displayItems()
  }
  let parentlist = document.getElementById('list')
  let income = 0
  let expense = 0
  function displayItems() {
    for (let i = 0; i < localStorage.length; i++) {
      let list = document.createElement('li')
      let amount = localStorage.getItem(localStorage.key(i))
      let input = localStorage.key(i)
      if (amount > 0) {
        income = income + parseInt(amount)
        list.setAttribute('class', 'plus')
        list.textContent = input + '       ' + amount
        // list.appendChild(document.createTextNode(input + '    ' + amount))
        parentlist.appendChild(list)
      } else {
        expense -= amount
        list.setAttribute('class', 'minus')
        list.textContent = input + '       ' + amount
        parentlist.appendChild(list)
      }
    }
    document.getElementById('money-plus').textContent = '$' + income
    document.getElementById('money-minus').textContent = '$' + expense
    document.getElementById('balance').textContent = '$' + (income - expense)
  }
  let button = document.getElementById('btn')
  button.addEventListener('click', addItems)
  
  function addItems() {
    var input = document.getElementById('text').value
    let amount = document.getElementById('amount').value
    window.localStorage.setItem(input, amount)
  }
