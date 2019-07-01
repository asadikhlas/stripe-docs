import React from 'react'

const Balance = () => {
  return (
    <div className="book-columns flex flex-wrap">
      <div className="flex-even markdown-inner">
        <h2 id="astris-ipse-furtiva">Balance</h2>
        <p>
          This is an object representing your Stripe balance. You can retrieve it to see the balance
          currently on your Stripe account.
          </p>
        <p>
          You can also retrieve the balance history, which contains a list of transactions that
          contributed to the balance (charges, payouts, and so forth)
          </p>
        <p>
          The available and pending amounts for each currency are broken down further by payment
          source types.
          </p>
        <p>Was this section helpful? <strong className="text-color">Yes No</strong> </p>
      </div>
      <div className="flex-even markdown-inner">
        <div>
          <div className="grey-header" colSpan={2} align="left">
            <p style={{ textAlign: 'justify' }} className="grey-header-text">BASE URL</p>
            <pre className="grey-back"><p>{"          "}GET /v1/balance{"\n"}{"             "}GET /v1/balance/history/:id{"\n"}{"             "}GET /v1/balance/history</p></pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Balance
