import Script from 'next/script'

export function KasadaClient() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            `document.addEventListener('kpsdk-load', () => {window.KPSDK.configure([
          {
            domain: location.host,
            path: '/',
            method: 'POST'
          },
          {
            domain: location.host,
            path: '/chat/*',
            method: 'POST'
          },
        ]);
    });`.replace(/[\n\r\s]/g, '')
        }}
      ></script>

    </>
  )
}
