import { Link } from '@/src/components/Link';
import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Niklas Kors | Curriculum Vitae",
};

interface CertBlockProps {
  imageLink: string;
  title: string;
  organization: string;
  issuedAt: string;
  link: string;
}

const CertBlock = ({ imageLink, title, organization, issuedAt, link }: CertBlockProps) => {
  return (
    <div className=''>
      <div className='grid grid-cols-[30px_1fr] gap-4'>
        <div>
          <Image src={imageLink} width={30} height={30} alt={title} className='drag-none select-none'></Image>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold leading-3'>{title}</span>
          <span className='text-sm leading-7'>{organization}</span>

          <span className='text-sm text-neutral-500'>{issuedAt}</span>
          <div className='text-xs '>
            <Link href={link}>View certificate</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

interface EducationBlockProps {
  title: string;
  duration: string;
  description: string
}

const EducationBlock = ({ title, duration, description }: EducationBlockProps) => {
  return (
    <div className='flex flex-col'>
      <span className='font-bold leading-5 mb-2'>{title}</span>
      <span className='text-sm leading-4 italic text-neutral-500'>{duration}</span>
      <span className='text-sm pt-2'>{description}</span>
    </div>
  )
}


interface WorkExperienceBlockProps {
  title: string;
  description: string;
  duration: string;
  imageLink: string;
}

const WorkExperienceBlock = ({ title, description, duration, imageLink }: WorkExperienceBlockProps) => {
  return (
    <div className='flex flex-row gap-8'>
      <div className='flex items-center max-h-20'>
        <Image src={imageLink} width={40} height={30} alt={title} className='max-h-20 drag-none select-none' style={{ objectFit: 'contain', maxHeight: '40px' }}></Image>
      </div>
      <div className='flex flex-col'>
        <span className='font-bold leading-5 mb-2'>{title}</span>
        <span className='text-sm leading-4 italic text-neutral-500'>{duration}</span>
        <span className='text-sm pt-2'>{description}</span>
      </div>
    </div>
  )
}

export default async function Page() {
  return (
    <div className={`leading-9`}>
      <div className={`container mx-auto max-w-5xl px-6`}>
        <section className={`
        grid
        md:grid-cols-[1fr_300px]
        py-8 
        gap-8
        sm:gap-12
      `}>
          <div>
            <h1 className='text-4xl font-bold'>Curriculum Vitae</h1>
            <span className={`text-neutral-400 text-xs`}>
              Last updated at | <span className='font-bold'>April 2nd 2025</span>
            </span>
            <p className='pt-4'>My name is Niklas Kors. I am a full-stack software engineer with many years of experience working with AWS, Node.js, React & TypeScript related projects.
              I have worked for a number of different companies and enjoyed working on several solo projects as well. At this time I am full-time available for freelance projects and I would be glad to be a part in solving new technical challenges.</p>
          </div>

          <div className='pr-8'>
            <div className='relative flex justify-center'>
              <div className='top-0 left-0 md:max-w-full max-w-[200px]  md:absolute'>
                <Image
                  src="/images/portrait.jpeg"
                  width={427}
                  height={640}
                  alt="Portrait"
                  className='select-none drag-none'
                />
              </div>
            </div>
          </div>
        </section >

        <section className={`bg-neutral-50 border-1 border-neutral-100`}>
          <div className='border-neutral-100 border-b-20'>
            <pre className={`whitespace-pre-line block p-2 px-6 text-[12px] md:text-[13px] leading-6 md:leading-9`}>
              # TL;DR CV <br />
              - <span className='text-xl'>🗓️</span> <span className='text-[#06accc]'>10+</span> years of full-Stack software experience<br />
              - <span className='text-xl'>⭐️</span> Worked with <span className='text-[#06accc]'>60+</span> clients<br />
              - <span className='text-xl'>👨‍💻</span> Enjoy working for startups<br />
              - <span className='text-xl'>🧙</span> Cloud infrastructure wizard. Terraform + AWS<br />
              - <span className='text-xl'>💻 </span> Go-to programming language = JavaScript/TypeScript + Node.js<br />
              - <span className='text-xl'>💡</span> Certified AWS Solutions Architect<br />
              - <span className='text-xl'>🇳🇱</span> Based in Amsterdam
            </pre>
          </div>
        </section>

        <section className='py-8'>
          <div>
            <p>My passion for programming ignited at a young age. I began with Visual Basic and simple web development. By the time I was sixteen,
              I had progressed to programming in PHP and C#. When I started working on bigger projects,
              it turned out that using JavaScript across the entire stack proved itself to be very powerful, particularly when complemented by TypeScript's robust type system.
              As a result, JavaScript has become my primary programming language of choice, enabling me to easily switch through the different ‘stacks’ of software development.</p>
          </div>
          <div></div>
        </section>

        <section className={`grid md:grid-cols-2 md:gap-12`}>
          <div>
            <p>
              I have worked with a wide variety of technologies, and I am most comfortable with those highlighted with an underscore below.
            </p>
            <div className='grid sm:grid-cols-2 py-8'>
              <div>
                <span className='font-bold'>Infrastructure</span>
                <ul className={`[&>li]:before:content-['-_']`}>
                  <li><u>AWS</u></li>
                  <li><u>Terraform</u></li>
                  <li>Kubernetes</li>
                  <li>Google Cloud Platform</li>
                  <li>Debian GNU/linux servers</li>
                </ul>
              </div>
              <div>
                <span className='font-bold'>Applications</span>
                <ul className={`[&>li]:before:content-['-_']`}>
                  <li><u>Node.js</u></li>
                  <li><u>React SPA/Native apps</u></li>
                  <li>Angular 2.x+</li>
                  <li>PHP</li>
                  <li>C#</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src="/images/tech-icons.png"
              width={590}
              height={448}
              alt="Tech icons"
              className='select-none drag-none'
            />
          </div>
        </section>
      </div >

      <div className="bg-neutral-50">
        <div className='container mx-auto max-w-5xl py-8 px-6'>
          <section>
            <h2 className='text-2xl font-bold'>Work experience</h2>
            <span className='text-xl'>From startups to enterprise</span>

            <p className='pt-2'>
              I’ve worked for a variety of different companies as well as for my own marketing agency called Web First.
              At Web First, we specialized in providing websites, webshops, and single-page applications (SPAs) to small and medium-sized businesses, in addition to implementing SEO optimizations.
              At our peak, we worked on these projects with a team of 10 young professionals. At that time, we hosted all our websites and email accounts on our in-house dedicated servers.
              During my time at Web First, I was concurrently pursuing my degree which required a six-month internship.
              This internship which I completed at <Link href="https://www.lightspeedhq.com/">Lightspeed</Link>  showed me the beauty of working on larger applications.
              Subsequently, I decided to broaden my skill set by joining <Link href='https://www.roamler.com/nl/datlinq-a-www-roamler-company/'>Datlinq</Link>, where I gained further expertise
              in application development.
            </p>
            <p>
              Taking my journey a step further, I became a part of <Link href='https://www.relive.com/'>Relive</Link>, a rapidly growing startup that empowers users to create videos of their outdoor adventures using their IOS/Android app.
              This startup lets its users create videos of their outdoor activities through its own IOS/Android app. When I joined, Relive already had over 2 million users and was creating ~250K videos a week.
              Currently Relive has +9 million users and they now produce over 200K videos in a single day! I mainly worked on scaling the infrastructure to this level as well as adding new features on the backend.
              After my ~3 years at Relive, I decided to take some time off to travel. While on the go I contributed to an open-source project called <Link href='https://www.typecell.org/'>Typecell</Link>, an online interactive TypeScript coding environment.
              I returned to Amsterdam in August 2022 and began my part-time freelance work.
              Over the past year, I took on a significant project with <Link href="https://www.unframed.nl/">Unframed</Link>, where I had the opportunity to build a React application from the ground up.
              Shortly thereafter, I joined <Link href='https://tibu.nu/'>Tibu</Link> and became an integral part of their team, dedicating two days a week to solidifying their application by migrating from JavaScript to TypeScript and improving
              their infrastructure in GCP.
            </p>

            <div className='pt-8 flex flex-col gap-8 pb-2'>
              <WorkExperienceBlock
                title="Technical Lead - Biomod AI | Leiden"
                description="Setup the Node.js backend, React frontend and infrastructure on AWS."
                duration="Nov 2023 - Feb 2025"
                imageLink="/images/logos/biomodai.svg"
              />

              <WorkExperienceBlock
                title="Full-stack developer, freelance - Tibu | Haarlem"
                description="Worked with Node.js, React, GraphQL, GCP, Terraform."
                duration="Sep 2022 - Nov 2023"
                imageLink="/images/logos/tibu.svg"
              />

              <WorkExperienceBlock
                title="Contributor - TypeCell"
                description="An open-source project built with React and TypeScript."
                duration="Dec 2021 - Aug 2022"
                imageLink="/images/logos/typecell.svg"
              />

              <WorkExperienceBlock
                title="Full-stack developer - Relive | Rotterdam"
                description="Worked with React Native, Node.js, TypeScript and AWS."
                duration="Jun 2018 - Jan 2021"
                imageLink="/images/logos/relive.svg"
              />

              <WorkExperienceBlock
                title="Full-stack developer - Datlinq | Rotterdam"
                description="Worked with Angular 2+, Node.js, TypeScript and Google Cloud Platform."
                duration="Sep 2017 - Jun 2018"
                imageLink="/images/logos/datlinq.svg"
              />

              <WorkExperienceBlock
                title="Managing partner - Web First | Heerhugowaard"
                description="Worked with PHP, Angular 2+, Node.js, AWS, TypeScript and cPanel."
                duration="Jan 2013 - Dec 2017"
                imageLink="/images/logos/webfirst.svg"
              />

              <WorkExperienceBlock
                title="Front-end developer intern - Lightspeed | Gent"
                description="Worked with Angular 2+ and TypeScript."
                duration="Jan 2017 - Jun 2017"
                imageLink="/images/logos/lightspeed.svg"
              />
            </div>
          </section>
        </div>
      </div>

      <div className='container mx-auto max-w-5xl'>
        <section className='py-8 px-6'>
          <h2 className='text-2xl font-bold'>Education</h2>

          <div className='flex flex-col gap-8 py-8'>
            <EducationBlock
              title='Bachelor - Psychology - University of Amsterdam | Amsterdam'
              duration='Started in Sep 2022, expect to finish in 2025'
              description='Clinical Specialization'
            />

            <EducationBlock
              title='HBO Bachelor - Business IT & Management - INholland | Alkmaar'
              duration='2013 - 2017'
              description='Subjects: Web Markup, Web Design, Networking, Process Modeling, ICT Management, Internet Technology, Computer Architecture, Data Modeling, BIV, C#.NET, Marketing, Databases, ASP, AO, UML, XML, SQL Server, Data warehousing.'
            />

            <EducationBlock
              title='Highschool - Senior General Secondary Education - Han Fortmann College | Heerhugowaard'
              duration='2011 - 2013'
              description='Subjects: Computer Science, Mathematics, Physics, Chemistry, Music, English, Dutch, German, Social Studies, Philosophy, ICT.'
            />

            <EducationBlock
              title='Highschool - Senior General Secondary Education - Elzendaalcollege | Boxmeer'
              duration='2010 - 2011'
              description='Subjects: Computer Science, Mathematics, Physics, Chemistry, Music, English, French, Dutch, German, Social Studies, Philosophy, ICT.'
            />

            <EducationBlock
              title='Highschool - Senior General Secondary Education - Realschule | Kleve'
              duration='2008 - 2010'
              description=''
            />
          </div>
        </section>


        <section className='px-6'>
          <h2 className='text-2xl font-bold'>Certifications</h2>

          <div className='grid gap-8 md:gap-0 md:grid-cols-3 py-8'>
            <CertBlock
              title='VWO Wiskunde B'
              organization='University of Amsterdam'
              issuedAt='Issued at April 2022'
              imageLink='/images/logos/uva.svg'
              link='/certificates/wiskundeb_vwo6.pdf' />
            <CertBlock
              title='Solutions Architect Associate'
              organization='Amazon Web Services (AWS)'
              issuedAt='Issued at November 2018'
              imageLink='/images/logos/aws.svg'
              link='/certificates/aws_certified_solutions_architect.pdf' />
            <CertBlock
              title='Software Maintainability'
              organization='PeopleCert'
              issuedAt='Issued at December 2015'
              imageLink='/images/logos/peoplecert.svg'
              link="/certificates/quality_software_developer_foundation.pdf" />
          </div>
        </section>

        <section className='md:py-16 px-6'>
          <div className='grid md:grid-cols-[1fr_1px_1fr]'>
            <div className='py-8'>

              <div>
                <div className='grid grid-cols-[100px_1fr]'>
                  <div>
                    <span>Email</span>
                  </div>
                  <div><Link href='mailto:me@niklaskors.com'>me@niklaskors.com</Link></div>
                </div>
                <div className='grid grid-cols-[100px_1fr]'>
                  <div>
                    <span>LinkedIn</span>
                  </div>
                  <div><Link href='https://linkedin.com/in/niklaskors'>linkedin.com/in/niklaskors</Link></div>
                </div>
                <div className='grid grid-cols-[100px_1fr]'>
                  <div>
                    <span>GitHub</span>
                  </div>
                  <div><Link href="https://github.com/niklaskors">github.com/niklaskors</Link></div>
                </div>
              </div>

            </div>
            <div className='bg-gray-200 w-[1px] h-full'></div>
            <div className='justify-center items-center hidden md:flex'>
              <span>Thank you for your time 👋</span>
            </div>
          </div>
        </section>
      </div>
    </div >
  )
}