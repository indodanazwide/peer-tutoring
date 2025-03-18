import React from 'react'
import {
  AcademicCapIcon,
  UserGroupIcon,
  PencilSquareIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  UserIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/24/outline'

const Home = () => {
    return (
        <div className="home">
            <section className="min-h-screen flex items-center justify-center" id="hero">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center flex-column items-center justify-centerlg:py-16 lg:px-12" id="hero-content">
                    

                    <h1>
                    Empowering Students and Tutors Worldwide
                    </h1>

                    <p>
                    Join Tute Me to access personalized tutoring, study resources, and tools to help you succeed in your academic journey.
                    </p>

                    <div className="flex justify-center mb-0 gap-10">
                        <a href="#" className="btn-primary">
                            
                            <span>Find a Tutor</span>
                            <svg
                            className="arrow-icon"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                            >
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>

                        <a href="#" className="btn-primary">
                            
                            <span>Become a Tutor</span>
                            <svg
                            className="arrow-icon"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                            >
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="pd-inline pd-block" id="services">
                <article className="services-grid">
                    <div className="service-group card">
                        <div>
                            <AcademicCapIcon className="icon mb-2"/>
                            <h3>One-on-One Tutoring</h3>
                            <p>Get personalized support from expert tutors.</p>
                        </div>
                        <div>
                            <UserGroupIcon className="icon mb-2"/>
                            <h3>Group Study Sessions</h3>
                            <p>Learn together with peers in an interactive environment.</p>
                        </div>
                        <div>
                          <AcademicCapIcon className="icon mb-2"/>
                            <h3>Homework Help</h3>
                            <p>Stuck on an assignment? Our tutors are here to help!</p>
                        </div>
                    </div>
                    <div className="service-group card">
                        <div>
                          <PencilSquareIcon className="icon mb-2"/>
                            <h3>Exam Preparation</h3>
                            <p>Boost your confidence & performance with guided revision.</p>
                        </div>
                        <div>
                          <BookOpenIcon className="icon mb-2"/>
                            <h3>Study Materials & Resources</h3>
                            <p>Access high-quality learning materials anytime.</p>
                        </div>
                        <div>
                          <PresentationChartLineIcon className="icon mb-2"/>
                            <h3>Progress Tracking</h3>
                            <p>Stay on top of your learning with performance insights.</p>
                        </div>
                    </div>
                    
                    
                </article>
            </section>

            <section id="testimonials">
  <h2>What Students & Tutors Say</h2>
  <div className="testimonials-grid">
    <div className="testimonial-card">
      <p>
        ⭐️⭐️⭐️⭐️⭐️
        <br />
        "This platform has completely changed the way I study. My tutor explains concepts so clearly!"
      </p>
      <div className="author">– Sarah M. (Student)</div>
    </div>
    <div className="testimonial-card">
      <p>
        ⭐️⭐️⭐️⭐️⭐️
        <br />
        "Tutoring here is so rewarding! I love the flexibility and the tools provided."
      </p>
      <div className="author">– Jason T. (Tutor)</div>
    </div>
    <div className="testimonial-card">
      <p>
        ⭐️⭐️⭐️⭐️⭐️
        <br />
        "The exam prep sessions were a game-changer for me. Highly recommend!"
      </p>
      <div className="author">– Lerato K. (Student)</div>
    </div>
  </div>
</section>

<section id="cta">
  <h2>Join Us Today!</h2>
  <p>
    🚀 Ready to take your learning or teaching to the next level?
    <br />
    ✅ Students: Find the perfect tutor and start improving your grades today!
    <br />
    ✅ Tutors: Share your expertise and earn on your own schedule.
  </p>
  <a href="#" className="cta-button">
    Get Started Now! ➡️ Sign Up
  </a>
</section>
        </div>
    )
}

export default Home