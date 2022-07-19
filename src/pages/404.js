import { h } from "preact"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  const isBrowser = () => typeof window !== 'undefined'

  let pathname, search, hash
  if (isBrowser()) {
    pathname = window.location.pathname
    search = window.location.search
    hash = window.location.hash
    if (pathname !== '/' && pathname.endsWith('/')) {
      console.log(`redirecting from: ${pathname} to ${pathname.slice(0,-1) + search + hash}`)
      window.location.href = pathname.slice(0,-1) + search + hash
    }
  }

  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
      </p>
      <p style={paragraphStyles}>
        Try going back or go to the <a href="/">home page</a>.
      </p>
    </main>
  )
}

export default NotFoundPage
