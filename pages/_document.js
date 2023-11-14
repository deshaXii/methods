import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/img/fav.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${"AIzaSyDB8v_JV0dwZbMbUBFSjU8nbtFTYkOccO8"}&libraries=places&callback=Function.prototype`}
            async
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
