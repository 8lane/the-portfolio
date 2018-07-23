import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="profile" href="http://gmpg.org/xfn/11" />

          <title>Tom Christian &ndash; Freelance Javascript &amp; React Developer from London, UK</title>
          
          <meta name="description" content="Contract Javascript Developer focusing on Universal React applications in an accessible, test driven and user centric approach."/>
          <meta name="robots" content="noindex,follow" />

          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Tom Christian – Freelance Javascript &amp; React Developer from London, UK" />
          <meta property="og:description" content="Contract Javascript Developer focusing on Universal React applications in an accessible, test driven and user centric approach." />
          <meta property="og:url" content="https://tomchristian.co.uk/" />
          <meta property="og:site_name" content="Tom Christian" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="Contract Javascript Developer focusing on Universal React applications in an accessible, test driven and user centric approach." />
          <meta name="twitter:title" content="Tom Christian – Freelance Javascript &amp; React Developer from London, UK" />
          <meta name="twitter:site" content="@tomchristian91" />
          <meta name="twitter:creator" content="@tomchristian91" />

          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/static/favicons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicons/manifest.json" />

          <meta name="msapplication-TileColor" content="#1f4295" />
          <meta name="msapplication-TileImage" content="/static/favicons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#1f4295" />

          <link rel="canonical" href="https://tomchristian.co.uk/" />
          <link rel="stylesheet" href="/_next/static/style.css" />

          <script src="https://use.typekit.net/iuh0oey.js"></script>
          <script dangerouslySetInnerHTML={{
            __html: 'try{Typekit.load({ async: true })}catch(e){}'
          }} />

          <script defer dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                ga('create', 'UA-5286206-2', 'auto');
                ga('send', 'pageview');
            `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
