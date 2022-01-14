import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

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
/*
  <script src='//cdn.quilljs.com/1.3.6/quill.js'></script>
          <script src='https://cdn.jsdelivr.net/npm/quill-emoji@0.1.7/dist/quill-emoji.min.js'></script>
          <script src='//cdn.quilljs.com/1.3.6/quill.min.js'></script>
          {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script> */
/* <script src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js'></script> */
/* <script src='https://alexandrebuffet.fr/codepen/slider/slick-animation.min.js'></script> */

/*
 <link
            href='https://fonts.googleapis.com/css?family=Playball&amp;display=swap'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&amp;display=swap'
            rel='stylesheet'
          ></link>

          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
            integrity='sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z'
            crossOrigin='anonymous'
          />

          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
          ></link>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'
          ></link>

          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          />
           <link
            rel='stylesheet'
            href='https://unpkg.com/simplebar@latest/dist/simplebar.css'
          /> 
          <link rel='stylesheet' href='/static/css/styles.css' />
          <link rel='stylesheet' href='/static/css/fonts-icon.css' />
          <link rel='icon' type='image/png' href='/static/images/favicon.png' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
          />

          <link
            rel='stylesheet'
            id='handyman-fonts6-css'
            href='https://fonts.googleapis.com/css?family=Playfair+Display%3A400%2C400i%2C700%2C700i%2C900%2C900i&amp;ver=4.9.15'
            media='all'
          ></link>
          <script src='https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js'></script>

          <link
            rel='stylesheet'
            href='https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css'
          />

          <link
            rel='stylesheet'
            href='//cdn.quilljs.com/1.3.6/quill.snow.css'
          />
          <link
            href='//cdn.quilljs.com/1.3.6/quill.bubble.css'
            rel='stylesheet'
          />
           <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/quill-emoji@0.1.7/dist/quill-emoji.css'
          />
           <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/react-toastify@7.0.3/dist/ReactToastify.css'
          />
*/
