// id(pin): "-MkJshiuG7Fomc7asrd9"
// title(pin): "BIll1"
// dueDate(pin): "Wed Sep 29 2021"
// amount(pin): 100
// frequency(pin): "weekly"
// reminderFrequency(pin): "weekly"
// category(pin): "Subscriptions"
// paid(pin): "no"
// notes(pin): ""
// createdAt(pin): "2021-09-23"

//amount: ['amount', 'increasing']
//paid: ['paid', None]
//categpry: ['category', 'rent']
//dueDate: ['due date', 'increasing']

const orderAmount = (inputArray, filterBy) => {
    inputArray.sort((a,b) => { //Least to Greatest
      return a.amount-b.amount
    })
    
    if (filterBy === 'decreasing') {
        return inputArray
    } else {
        return inputArray.reverse()
    }
}

const orderDueDate = (inputArray, filterBy) => {
    inputArray.sort((a,b) => {
        return new Date(b.dueDate) - new Date(a.dueDate)
    })

    if (filterBy === 'decreasing') {
        return inputArray
    } else {
        return inputArray.reverse()
    }
}

export default filterBills = (filterBy, bills) => {
    filteredArray = []
    filter1 = filterBy[0]
    filter2 = filterBy[1]

    bills.map((bill) => {
        if (filter1 === 'paid') {
            if (bill.paid === 'yes') {
                filteredArray.push(bill)
            }
        } else if (filter1 === 'not paid') {
            if (bill.paid === 'no') {
                filteredArray.push(bill)
            }
        } else if (filter1 === 'category') {
            if (filter2 === 'rent' && bill.category === 'rent') {
                filteredArray.push(bill)
            } else if (filter2 === 'utilities' && bill.category === 'utilities') {
                filteredArray.push(bill)
            } else if (filter2 === 'subscriptions' && bill.category === 'subscriptions') {
                filteredArray.push(bill)
            } else if (filter2 === 'phone' && bill.category === 'phone') {
                filteredArray.push(bill)
            }  else if (filter2 === 'other' && bill.category === 'other') {
                filteredArray.push(bill)
            }
        }
    })

    if (filter1 === 'due date'){
        return orderDueDate(bills, filter2)
    } else if (filter1 === 'amount') {
        return orderAmount(bills, filter2)
    } else {
        return filteredArray
    }
}