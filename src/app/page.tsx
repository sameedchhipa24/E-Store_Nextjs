
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Newest from '@/components/Newest'

const Page = () => {
    return (
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
            <Hero />
            <Newest />
        </div>
    )
}

export default Page
