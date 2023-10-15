import {useGlobalState} from '../../context/GlobalState'

export default function TransactionList() {

    const {transactions, deleteTransaction} = useGlobalState()
    console.log("Transaction List:", transactions)
  return (
    <div className='List'>
        {
            transactions.map(transaction => ( //no use {}
                <div className='Transaction' key={transaction.id}>
                    <p>{transaction.description}</p>
                    <span>{transaction.amount}</span>
                    <button onClick={()=>deleteTransaction(transaction.id)
                    }>
                        x
                    </button>
                </div>
            )
                
            )
        }
    </div>
  )
}
