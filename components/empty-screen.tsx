import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          Chat Gemini
        </h1>
        <p className="leading-normal text-zinc-900">
          Đây là chat bot dựa trên mã nguồn mở{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, {' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Vercel AI SDK
          </ExternalLink>
          , và{' '}
          <ExternalLink href="https://ai.google.dev">
            Google Gemini
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-zinc-900">
          Phát triển bởi{' '}
          <ExternalLink href="https://www.tiktok.com/@dm.haui">
            ĐM HaUI
          </ExternalLink>{' '}
          Với chức năng chả khác mấy so với Chat GPT.
        </p>
      </div>
    </div>
  )
}
