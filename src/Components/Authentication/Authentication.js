{/* eslint-disable */ }
import React from 'react'

const Authentication = () => {
  return (
    <div className="book-columns flex flex-wrap">
      <div className="flex-even markdown-inner">
        <h2 id="astris-ipse-furtiva">Authentication</h2>
        <p>
          The Stripe API uses <strong className="text-color">API keys</strong> to authenticate requests.
          You can view and manage your API keys
            in <strong className="text-color"> the Stripe Dashboard.</strong>
        </p>
        <p>
          Test mode secret keys have the prefix sk_test_ and live mode secret keys have the prefix
            sk_live_. Alternatively, you can use <strong className="text-color"> restricted API keys
            </strong> for granular permissions.
          </p>
        <p>
          Your API keys carry many privileges, so be sure to keep them secure! Do not share your
          secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth
          </p>
        <p>To use your API key, assign it to stripe. The Node.js library will then automatically send
            this key in each request.</p>
        <p>You can also set a per-request key with an option. This is often useful for Connect
          applications that use multiple API keys during the lifetime of a process. Methods on the
          returned object reuse the same API key
          </p>
        <p>
          All API requests must be made over <strong className="text-color">HTTPS.</strong> Calls made
          over plain HTTP will fail. API requests
          without authentication will also fail.
          </p>
        <p>Was this section helpful? <strong className="text-color">Yes No</strong> </p>
      </div>
      <div className="flex-even markdown-inner">
        <br />
        <div>
          <div className="black-header" colSpan={2} align="left">
            <p style={{ textAlign: 'justify', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="black-header-text">GLOBAL API KEY</p>
            <pre className="black-back"><code>1{"  "}const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");{"\n"}{"                                        "}</code></pre>
          </div>
        </div>
        <br />
        <div>
          <div className="black-header" colSpan={2} align="left">
            <p style={{ textAlign: 'justify', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="black-header-text">HTTP STATUS CODE SUMMARY</p>
            <pre className="black-back"><code>1{"  "}stripe.charges.retrieve("ch_1Eq4Oy2eZvKYlo2Czs4jqw3t", {"{"}{"   "}{"\n"}2{"  "}api_key: "sk_test_4eC39HqLyjWDarjtT1zdp7dc"{"\n"}3{"  "}{"}"});{"\n"}{"                                                "}</code></pre>
          </div>
        </div>
        <div>
          <pre className="grey-back"><p>A sample test API key is included in all the example{"\n"}here, so you can test any example right away.</p><p>To test requests using your account, replace the sample{"\n"}API key with your actual API key or <strong className="text-color">Sign in</strong></p></pre>
        </div>
      </div>
    </div>
  )
}

export default Authentication
