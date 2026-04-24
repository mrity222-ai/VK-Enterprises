import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
      <p className="text-gradient font-headline text-6xl font-bold">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page Not Found</h1>
      <p className="mt-6 text-base leading-7 text-muted-foreground">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/contact">Contact support</Link>
        </Button>
      </div>
    </div>
  )
}
