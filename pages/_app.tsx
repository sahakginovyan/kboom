import {AppPropsWithLayout} from 'helpers/types';
import 'styles/globals.css'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // Render the layout and pass the pageProps to the Component and pass to layout with second argument
  return getLayout(<Component {...pageProps} />, pageProps);
};
