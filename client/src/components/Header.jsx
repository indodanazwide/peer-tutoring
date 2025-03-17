import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'

import {
    AcademicCapIcon,
    CreditCardIcon,
    ClockIcon,
    BookOpenIcon,
    PresentationChartLineIcon,
    UserIcon,
    BookmarkSquareIcon,
} from '@heroicons/react/24/outline'

import { 
    ChevronDownIcon, 
} from '@heroicons/react/20/solid'

const tutor = [
    { name: 'Become a Tutor', description: 'Join our platform and start teaching', href: '#', icon: AcademicCapIcon },
    { name: 'Tutor Dashboard', description: 'Manage your sessions and students', href: '#', icon: PresentationChartLineIcon },
    { name: 'Teaching Resources', description: 'Access helpful materials for tutoring', href: '#', icon: BookOpenIcon },
    { name: 'Session Management', description: 'Schedule and oversee your sessions', href: '#', icon: ClockIcon },
    { name: 'Earnings', description: 'Track and withdraw your earnings', href: '#', icon: CreditCardIcon },
];

const student = [
    { name: 'Find a Tutor', description: 'Browse and choose the best tutor for you', href: '#', icon: AcademicCapIcon },
    { name: 'Book a Session', description: 'Schedule a tutoring session easily', href: '#', icon: BookmarkSquareIcon },
    { name: 'My Sessions', description: 'View and manage your upcoming sessions', href: '#', icon: ClockIcon },
    { name: 'Study Resources', description: 'Access notes, guides, and more', href: '#', icon: BookOpenIcon },
    { name: 'Student Dashboard', description: 'Monitor your learning progress', href: '#', icon: PresentationChartLineIcon },
];


const Header = () => {

    return (
        <header className="bg-white fixed w-full z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <section className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Tute Me</span>
                        <img src="/tute.png" alt="Tute Me" className="h-8 w-auto" width="auto" height="32" />
                    </a>
                </section>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                    <a href="/" className="text-sm/6 font-semibold text-gray-900">
                        Home
                    </a>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                            Tutor
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel transition className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                            <div className="p-4">
                                {tutor.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                >
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                    </div>
                                    <div className="flex-auto">
                                    <a href={item.href} className="block font-semibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                            Student
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel transition className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                            <div className="p-4">
                                {student.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                >
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                    </div>
                                    <div className="flex-auto">
                                    <a href={item.href} className="block font-semibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        About
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Contact
                    </a>
                </PopoverGroup>
                <button className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </button>
            </nav>
        </header>
    )
}

export default Header