import {useGlobalState} from '../context/GlobalState'

function Balance() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map(t => t.amount)
    const total = amounts.reduce((acc, item) => {
      console.log("Acc:",typeof(acc),acc,typeof(item),item)
      return acc += item}, 0)

  return (
    <div>
        <h1>Balance</h1>
        <div className='Balance Div'>
            {/* {JSON.stringify(transactions)} */
            JSON.stringify(amounts, null, 2)}
        </div>
        <h1>Total: ${total}</h1>
    </div>
  )
}

export default Balance