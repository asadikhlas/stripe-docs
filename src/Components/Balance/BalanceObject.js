import React from 'react'

const BalanceObject = () => {
  return (
    <div className="book-columns flex flex-wrap">
      <div className="flex-even markdown-inner">
        <h4>THE BALANCE OBJECT</h4>
        <br />
        <h5 className="error-heading">ATTRIBUTES</h5>
        <hr />
        <span className="error-type-heading">object</span><span className="error-type-subheading">string,
              value is "balance"</span>
        <p>
          String representing the object’s type. Objects of the same type share the same value.
            </p>
        <hr />
        <span className="error-type-heading">available
            </span><span className="error-type-subheading">array of hashes
            </span>
        <p>
          Funds that are available to be transferred or paid out, whether automatically by Stripe
          or explicitly via the Transfers API or Payouts API. The available balance for each
          currency and payment type can be found in the source_types property.
            </p>
        <hr />
        <span className="error-type-heading">livemode
            </span><span className="error-type-subheading">boolean</span>
        <p>
          Has the value true if the object exists in live mode or the value false if the object
          exists in test mode.
            </p>
        <hr />
        <span className="error-type-heading">pending
            </span><span className="error-type-subheading">array of hashes</span>
        <p>
          Funds that are not yet available in the balance, due to the 7-day rolling pay cycle. The
          pending balance for each currency, and for each payment type, can be found in the
          source_types property.
            </p>
      </div>
      <div className="flex-even markdown-inner">
        <div>
          <div className="grey-header" colSpan={2} align="left">
            <p style={{ textAlign: 'justify' }} className="grey-header-text">THE BALANCE OBJECT</p>
            <pre className="grey-back"><code style={{ color: 'black' }}> {"{"}{"\n"}{"        "}"object": "balance",{"\n"}{"        "}"available": [{"\n"}{"        "}{"{"}{"\n"}{"            "}"amount": 57781731001,{"\n"}{"            "}"currency": "usd",{"\n"}{"            "}"source_types": {"{"}{"\n"}{"            "}"bank_account": 123441153,{"\n"}{"            "}"bitcoin_receiver": 1552126,{"\n"}{"            "}"card": 57656737722{"\n"}{"            "}{"}"}{"\n"}{"             "}{"}"},{"\n"}{"            "}{"{"}{"\n"}{"            "}"amount": -71293,{"\n"}{"            "}"currency": "eur",{"\n"}{"            "}"source_types": {"{"}{"\n"}{"                 "}"bank_account": 0,{"\n"}{"                "}"bitcoin_receiver": 0,{"\n"}{"                "}"card": -71293{"\n"}{"            "}{"}"}{"\n"}{"            "}{"}"},{"\n"}{"                                        "}</code></pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceObject
