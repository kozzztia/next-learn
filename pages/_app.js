import '@/styles/globals.css'
import HeadLayout from "@/Layout/HeadLayout";

export default function App({ Component, pageProps }) {
  return (
      <HeadLayout>
        <Component {...pageProps} />
      </HeadLayout>

  )
}
