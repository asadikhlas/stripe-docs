import React from 'react'

const Errors = () => {
  return (
    <div className="book-columns flex flex-wrap">
      <div className="flex-even markdown-inner">
        <h2 id="astris-ipse-furtiva">Errors</h2>
        <p>
          Stripe uses conventional HTTP response codes to indicate the success or failure of an API
          request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range
          indicate an error that failed given the information provided (e.g., a required parameter was
          omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Stripe's
          servers (these are rare)
          </p>
        <p>
          Some 4xx errors that could be handled programmatically (e.g., a card is <strong className="text-color">declined</strong>) include an
            <strong className="text-color">error code </strong>that briefly explains the error reported.
          </p>
        <p>Was this section helpful? <strong className="text-color">Yes No</strong> </p>
        <div>
          <h5 className="error-heading">ATTRIBUTES</h5>
          <hr />
          <span className="error-type-heading">type</span><span className="error-type-subheading">string</span>
          <p>
            The type of error returned. One of api_connection_error, api_error,
            authentication_error, card_error, idempotency_error, invalid_request_error, or
            rate_limit_error
            </p>
          <hr />
          <span className="error-type-heading">charge</span><span className="error-type-subheading">string</span>
          <p>
            For card errors, the ID of the failed charge.
            </p>
          <hr />
          <span className="error-type-heading">code</span><span className="error-type-subheading">string</span>
          <p>
            For some errors that could be handled programmatically, a short string indicating the
            error code reported.
            </p>
          <hr />
          <span className="error-type-heading">decline_code
            </span><span className="error-type-subheading">string</span>
          <p>
            For card errors resulting from a card issuer decline, a short string indicating the card
            issuer’s reason for the decline if they provide one
            </p>
          <hr />
          <span className="error-type-heading">decline_code
            </span><span className="error-type-subheading">string</span>
          <p>
            For card errors resulting from a card issuer decline, a short string indicating the card
            issuer’s reason for the decline if they provide one
            </p>
          <hr />
          <span className="error-type-heading">doc_url
            </span><span className="error-type-subheading">string</span>
          <p>
            A URL to more information about the error code reported
            </p>
          <hr />
          <span className="error-type-heading">message
            </span><span className="error-type-subheading">string</span>
          <p>
            A human-readable message providing more details about the error. For card errors, these
            messages can be shown to your users.
            </p>
          <hr />
          <span className="error-type-heading">param
            </span><span className="error-type-subheading">string</span>
          <p>
            If the error is parameter-specific, the parameter related to the error. For example, you
            can use this to display a message near the correct form field.
            </p>
        </div>
      </div>
      <div className="flex-even markdown-inner">
        <table>
          <tbody><tr><th className="table-header" colSpan={2} align="left">HTTP STATUS CODE SUMMARY</th>
          </tr><tr>
              <td align="right">
                <span className="text-bold"> 200 - OK </span>
              </td>
              <td>
                <span>Everything worked as expected.</span>
              </td>
            </tr>
            <tr>
              <td align="right">
                <span className="text-bold"> 400 - Bad Request </span>
              </td>
              <td>
                <span>The request was unacceptable, often due to missing a required
                    parameter</span>
              </td>
            </tr>
            <tr>
              <td align="right">
                <span className="text-bold"> 401 - Unauthorized</span>
              </td>
              <td>
                <span>TNo valid API key provided.</span>
              </td>
            </tr>
            <tr>
              <td align="right">
                <span className="text-bold">402 - Request Failed </span>
              </td>
              <td>
                <span>The parameters were valid but the request failed.</span>
              </td>
            </tr>
            <tr>
              <td align="right">
                <span className="text-bold">404 - Not Found</span>
              </td>
              <td>
                <span>The requested resource doesn't exist</span>
              </td>
            </tr>
            <tr>
              <td align="right">
                <span className="text-bold">409 - Conflict</span>
              </td>
              <td>
                <span>The request conflicts with another request (perhaps due to using the same
                    idempotent key).</span>
              </td>
            </tr>
            <tr>
              <td align="right">
                <span className="text-bold">429 - Too Many Requests</span>
              </td>
              <td>
                <span>Too many requests hit the API too quickly. We recommend an exponential
                    backoff of your requests.</span>
              </td>
            </tr>
            <tr>
              <td align="right">
                <span className="text-bold"> 500, 502, 503, 504 - Server Errors</span>
              </td>
              <td>
                <span>Something went wrong on Stripe's end. (These are rare.)<span>
                </span></span></td>
            </tr>
          </tbody></table>
        <table>
          <tbody><tr><th className="table-header" colSpan={2} align="left">ERROR TYPE</th>
          </tr><tr>
              <td>
                <span className="text-bold">api_connection_error</span>
              </td>
              <td>
                <span>Failure to connect to Stripe's API.</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-bold">api_error</span>
              </td>
              <td>
                <span>API errors cover any other type of problem (e.g., a temporary problem with
                    Stripe's servers), and are extremely uncommon.</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-bold">authentication_error</span>
              </td>
              <td>
                <span>Failure to properly authenticate yourself in the request.</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-bold">card_error</span>
              </td>
              <td>
                <span>Card errors are the most common type of error you should expect to handle.
                  They result when the user enters a card that can't be charged for some
                    reason.</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-bold">idempotency_error</span>
              </td>
              <td>
                <span>Idempotency errors occur when an Idempotency-Key is re-used on a request that
                    does not match the first request's API endpoint and parameters.</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-bold">invalid_request_error</span>
              </td>
              <td>
                <span>Invalid request errors arise when your request has invalid parameters</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-bold">rate_limit_error</span>
              </td>
              <td>
                <span>Too many requests hit the API too quickly.</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-bold">validation_error</span>
              </td>
              <td>
                <span> Errors triggered by our client-side libraries when failing to validate fields
                    (e.g., when a card number or expiration date is invalid or incomplete).<span>
                  </span></span></td>
            </tr>
          </tbody></table>
      </div>
    </div>
  )
}

export default Errors
