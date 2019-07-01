import React from 'react'

const BalanceTransactionObject = () => {
    return (
        <div className="book-columns flex flex-wrap">
          <div className="flex-even markdown-inner">
            <h4>THE BALANCE TRANSACTION OBJECT
            </h4>
            <br />
            <h5 className="error-heading">ATTRIBUTES</h5>
            <hr />
            <span className="error-type-heading">id</span><span className="error-type-subheading">string</span>
            <p>
              Unique identifier for the object
            </p>
            <hr />
            <span className="error-type-heading">object
            </span><span className="error-type-subheading">string, value is "balance_transaction"
            </span>
            <p>
              String representing the object’s type. Objects of the same type share the same value.
            </p>
            <hr />
            <span className="error-type-heading">amount
            </span><span className="error-type-subheading">boolean</span>
            <p>
              Gross amount of the transaction, in cents.
            </p>
            <hr />
            <span className="error-type-heading">currency
            </span><span className="error-type-subheading">array of hashes</span>
            <p>
              The date the transaction’s net funds will become available in the Stripe balance.
            </p>
            <hr />
            <span className="error-type-heading">available_on
            </span><span className="error-type-subheading">array of hashes</span>
            <p>
              Time at which the object was created. Measured in seconds since the Unix epoch.
            </p>
            <hr />
            <span className="error-type-heading">created
            </span><span className="error-type-subheading">array of hashes</span>
            <p>
              Three-letter ISO currency code, in lowercase. Must be a supported currency.
            </p>
            <hr />
            <span className="error-type-heading">description
            </span><span className="error-type-subheading">array of hashes</span>
            <p>
              An arbitrary string attached to the object. Often useful for displaying to users.
            </p>
          </div>
          <div className="flex-even markdown-inner">
            <div>
              <div className="grey-header" colSpan={2} align="left">
                <p style={{textAlign: 'justify'}} className="grey-header-text">THE BALANCE OBJECT</p>
                <pre className="grey-back"><code style={{color: 'black'}}> {"{"}{"\n"}{"        "}"object": "balance",{"\n"}{"        "}"available": [{"\n"}{"        "}{"{"}{"\n"}{"            "}"amount": 57781731001,{"\n"}{"            "}"currency": "usd",{"\n"}{"            "}"source_types": {"{"}{"\n"}{"            "}"bank_account": 123441153,{"\n"}{"            "}"bitcoin_receiver": 1552126,{"\n"}{"            "}"card": 57656737722{"\n"}{"            "}{"}"}{"\n"}{"             "}{"}"},{"\n"}{"            "}{"{"}{"\n"}{"            "}"amount": -71293,{"\n"}{"            "}"currency": "eur",{"\n"}{"            "}"source_types": {"{"}{"\n"}{"                 "}"bank_account": 0,{"\n"}{"                "}"bitcoin_receiver": 0,{"\n"}{"                "}"card": -71293{"\n"}{"            "}{"}"}{"\n"}{"            "}{"}"},{"\n"}{"                                        "}</code></pre>
              </div>
            </div>
          </div>
        </div>
    )
}

export default BalanceTransactionObject
