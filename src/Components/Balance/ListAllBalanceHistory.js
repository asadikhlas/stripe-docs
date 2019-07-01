import React from 'react'

const ListAllBalanceHistory = () => {
    return (
        <div className="book-columns flex flex-wrap">
          <div className="flex-even markdown-inner">
            <h4>LIST ALL BALANCE HISTORY
            </h4>
            <br />
            <p>
              Returns a list of transactions that have contributed to the Stripe account balance (e.g.,
              charges, transfers, and so forth). The transactions are returned in sorted order, with the
              most recent transactions appearing first.
            </p>
            <br />
            <h5 className="error-heading">ATTRIBUTES</h5>
            <hr />
            <span className="error-type-heading">available_on
            </span><span className="error-type-subheading">
              optional object</span>
            A filter on the list based on the object available_on field. The value can be a string with an
            integer Unix timestamp, or it can be a dictionary with the following options:
            <hr />
            <span className="error-type-heading">object
            </span><span className="error-type-subheading">string, value is "balance_transaction"
            </span>
            <p>
              A filter on the list based on the object created field. The value can be a string with an
              integer Unix timestamp, or it can be a dictionary with the following options:
            </p>
            <hr />
            <span className="error-type-heading">amount
            </span><span className="error-type-subheading">boolean</span>
            <p>
              A cursor for use in pagination. ending_before is an object ID that defines your place in the
              list. For instance, if you make a list request and receive 100 objects, starting with
              obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the
              previous page of the list.
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

export default ListAllBalanceHistory
