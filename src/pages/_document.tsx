import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Listen and download sheets composed or arranged by PastFuture." />
          <meta name="keywords" content="PastFuture, pastfuture, kyle, music, compositions, ykh"/>
          <meta name="copyright" content="Copyright © 2022 PastFuture Music & Seaweed Melodies. All rights reserved." />
          <meta name="author" content="YKH" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.pastfuture.tk" />
          <meta property="og:title" content="PastFuture's Music Site" />
          <meta property="og:description" content="Listen and download sheets composed or arranged by PastFuture." />
          <meta property="og:image" content="https://musescore.com/static/musescore/userdata/cover/f/7/6/28704246.jpg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.pastfuture.tk" />
          <meta property="twitter:title" content="PastFuture's Music Site" />
          <meta property="twitter:description" content="Listen and download sheets composed or arranged by PastFuture." />
          <meta property="twitter:image" content="https://musescore.com/static/musescore/userdata/cover/f/7/6/28704246.jpg" />
          <link rel="icon" href="https://raw.githubusercontent.com/pastfuture777/music-sheets/main/public/favicon.ico" />
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
