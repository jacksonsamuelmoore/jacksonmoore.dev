function Error({ statusCode }) {
    var message = function (s) {
        if (s == 404) {
            return 'Page Not Found'
        }
        else return 'An Error has occured'
    }
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Page Not Found</title>
            <style
                media="screen"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    body {\n      background: #ECEFF1;\n      color: rgba(0, 0, 0, 0.87);\n      font-family: Roboto, Helvetica, Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n    }\n\n    #message {\n      background: white;\n      max-width: 360px;\n      margin: 100px auto 16px;\n      padding: 32px 24px 16px;\n      border-radius: 3px;\n    }\n\n    #message h3 {\n      color: #888;\n      font-weight: normal;\n      font-size: 16px;\n      margin: 16px 0 12px;\n    }\n\n    #message h2 {\n      color: #03a9f4;\n      font-weight: bold;\n      font-size: 16px;\n      margin: 0 0 8px;\n    }\n\n    #message h1 {\n      font-size: 22px;\n      font-weight: 300;\n      color: rgba(0, 0, 0, 0.6);\n      margin: 0 0 16px;\n    }\n\n    #message p {\n      line-height: 140%;\n      margin: 16px 0 24px;\n      font-size: 14px;\n    }\n\n    #message a {\n      display: block;\n      text-align: center;\n      background: #039be5;\n      text-transform: uppercase;\n      text-decoration: none;\n      color: white;\n      padding: 16px;\n      border-radius: 4px;\n    }\n\n    #message,\n    #message a {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    }\n\n    #load {\n      color: rgba(0, 0, 0, 0.4);\n      text-align: center;\n      font-size: 13px;\n    }\n\n    @media (max-width: 600px) {\n      body,\n      #message {\n        margin-top: 0;\n        background: white;\n        box-shadow: none;\n      }\n      body {\n        border-top: 16px solid #03a9f4;\n      }\n    }\n  "
                }}
            />
            <div id="message">
                <h2>{statusCode}</h2>
                <h1>{message(statusCode)}</h1>
                <p>
                    The specified file was not found on this website. Please check the URL for
                    mistakes and try again.
                </p>
            </div>
        </div>


    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error