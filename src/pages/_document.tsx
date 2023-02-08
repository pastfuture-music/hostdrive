import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="The Official Site of Music Compositions and Arrangements by PastFuture." />
          <meta name="keywords" content="PastFuture, pastfuture, kyle, music, compositions, ykh"/>
          <meta name="copyright" content="Copyright © 2022 PastFuture Music & Seaweed Melodies. All rights reserved." />
          <meta name="author" content="Yu-Kai, Huang" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
