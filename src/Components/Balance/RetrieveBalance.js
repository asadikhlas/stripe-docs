import React from 'react'

const RetrieveBalance = () => {
    return (
        <div className="book-columns flex flex-wrap">
        <div className="flex-even markdown-inner">
          <h4>RETRIEVE BALANCE
          </h4>
          <br />
          <h5 className="error-heading">ATTRIBUTES</h5>
          <hr />
          <span className="error-type-heading">id</span><span className="error-type-subheading">string</span>
          Retrieves the current account balance, based on the authentication that was used to make the
          request. For a sample request, see Accounting for negative balances.
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
        </div>
        <div className="flex-even markdown-inner">
          <div>
            <div>
              <div className="black-header" colSpan={2} align="left">
                <p className="black-header-text">HTTP STATUS CODE SUMMARY</p>
                <pre className="black-back"><code>1{"  "}stripe.charges.retrieve("ch_1Eq4Oy2eZvKYlo2Czs4jqw3t", {"{"}{"   "}{"\n"}{"    "}2{"  "}api_key: "sk_test_4eC39HqLyjWDarjtT1zdp7dc"{"\n"}{"    "}3{"  "}{"}"});{"\n"}{"                                                                "}</code></pre>
              </div>
            </div>
            <div className="grey-header" colSpan={2} align="left">
              <p style={{textAlign: 'justify'}} className="grey-header-text">THE BALANCE OBJECT</p>
              <pre className="grey-back"><code style={{color: 'black'}}> {"{"}{"\n"}{"        "}"object": "balance",{"\n"}{"        "}"available": [{"\n"}{"        "}{"{"}{"\n"}{"            "}"amount": 57781731001,{"\n"}{"            "}"currency": "usd",{"\n"}{"            "}"source_types": {"{"}{"\n"}{"            "}"bank_account": 123441153,{"\n"}{"            "}"bitcoin_receiver": 1552126,{"\n"}{"            "}"card": 57656737722{"\n"}{"            "}{"}"}{"\n"}{"             "}{"}"},{"\n"}{"            "}{"{"}{"\n"}{"            "}"amount": -71293,{"\n"}{"            "}"currency": "eur",{"\n"}{"            "}"source_types": {"{"}{"\n"}{"                 "}"bank_account": 0,{"\n"}{"                "}"bitcoin_receiver": 0,{"\n"}{"                "}"card": -71293{"\n"}{"            "}{"}"}{"\n"}{"            "}{"}"},{"\n"}{"                                        "}</code></pre>
            </div>
          </div>
        </div>
      </div>
    )
}

export default RetrieveBalance
