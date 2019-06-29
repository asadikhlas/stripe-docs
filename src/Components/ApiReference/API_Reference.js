import React from 'react'

const ApiReference = () => {
  return (
    <div className="book-columns flex flex-wrap">
      <div className="flex-even markdown-inner">
        <h2 id="astris-ipse-furtiva">API Reference</h2>
        <p>
          The Stripe API is organized around <strong className="text-color">REST</strong> Our API has
          predictable resource-oriented URLs,
            accepts <strong className="text-color">form-encoded</strong> request bodies, returns <strong className="text-color">JSON-encoded</strong> responses, and uses standard HTTP
          response codes, authentication, and verbs
          </p>
        <p>
          You can use the Stripe API in test mode, which does not affect your live data or interact
            with the banking networks. The API key you use to <strong className="text-color">authenticate</strong> the request determines
          whether the request is live mode or test mode.
          </p>
        <p>
          The Stripe API differs for every account as we release new <strong className="text-color">versions</strong> and tailor
          functionality. Log in to see docs customized to your version of the API, with your test key
          and data
          </p>
        <p>Subscribe to Stripe's <strong className="text-color">API announce mailing list</strong> for
            updates.</p>
        <p>Was this section helpful? <strong className="text-color">Yes No</strong> </p>
      </div>
      <div className="flex-even markdown-inner">
        <br />
        <h5 className="green-text">NOT A DEVELOPER?</h5>
        <p>Use apps from <strong className="text-color">our partners</strong> to get started with Stripe and
            to do more with your Stripe account—no code required.</p>
        <div>
          <div className="black-header" colSpan={2} align="left">
            <p style={{ textAlign: 'justify' }} className="black-header-text">BASE URL</p>
            <pre className="black-back"><code>https://api.stripe.com{"\n"}{"                                    "}</code></pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiReference
