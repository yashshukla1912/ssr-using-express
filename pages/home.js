import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <h1>Welcome to our e-commerce website!</h1>
      <Link href="/product">
        View our products
      </Link>
    </div>
  )
}

export default HomePage