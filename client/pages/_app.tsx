import type { AppProps } from 'next/app'
import * as React from 'react'
import { DefaultSeo } from 'next-seo'
import Layout from '../components/Layout'
import { ToggleThemeStateProvider } from '../utils/globalState'
import withData from '../utils/withData'
import { GlobalStyles } from 'styles/ThemeConfig'
import SEO from '../next-seo.config'
import 'antd/dist/antd.css'
import { ApolloProvider } from '@apollo/client'
// import "@/styles/antd.less";

const toggleIconStyle = {
  position: 'absolute',
  top: 20,
  right: 20,
  zIndex: 100,
}

interface ApolloProps {
  apollo: any
}
function MyApp({ Component, pageProps, apollo }: AppProps & ApolloProps) {
  const [isMounted, setIsMounted] = React.useState(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ApolloProvider client={apollo}>
      <ToggleThemeStateProvider>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToggleThemeStateProvider>
    </ApolloProvider>
  )
}

// Make Apollo  & Nextjs work together
MyApp.getInitialProps = async function ({
  Component,
  ctx,
}: {
  Component: any
  ctx: any
}) {
  let pageProps: any = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}
//@ts-ignore
export default withData(MyApp)

// export default MyApp;
