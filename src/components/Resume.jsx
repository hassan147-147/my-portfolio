import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Eye, X, FileText } from 'lucide-react'

const resumeData = {
  name: 'HASSAN NAVEED',
  title: 'COMPUTER SCIENCE STUDENT & WEB DEVELOPER',
  subtitle: 'Experience: Fresher',
  email: 'hassan16naveed@gmail.com',
  phone: '+92 319 2945394',
  location: 'Karachi, Pakistan',
  summary: 'Prefcated Computer Science stumant with strong technical capablitios in front-end web developen, sotppoting responsive beoiding erploiees, in brotseco with strome particisioan rejeeis. Passioe ontomering wrotterfaces using HTML5, CSS3, and ojaec and techoating in MERN, Node.js, Express.js MongoUtl. Fecheooring ibe purvieil the React.js, Node.js, Express.js, and MERN te sontadine gofivare enforoine padties eopetfice tto cprojote wble conrobjmes whie ruploght blslogt education Science.',
  education: [
    { qualification: 'Intermediate (Computer Science)', board: 'Aptech - ADSE', location: 'Karachi, Pakistan', status: 'Batch 2024-2027' },
    { qualification: 'Matriculation (Computer Science)', board: 'Board of Secondary Education', location: 'Karachi, Pakistan', status: '75% (Grade A)' },
  ],
  skills: ['HTML5 & CSS3', 'Responsive Web Design', 'Web Development', 'JavaScript (ES6+)', 'React.js (Learning)', 'UI/UX Principles', 'Git & Version Control', 'Microsoft Office', 'Technical Research'],
  projects: [
    {
      title: 'Personal Web Development Projects',
      tech: 'HTML5 | CSS3 | JavaScript',
      bullets: [
        'Engineered clean, responsive, and mobile-first web page layouts adhering to modern UI standards.',
        'Implemented cross-browser compatibility and optimized front-end layoutstructure for smooth performance.',
        'Applied web hosting concepts and modern deployment workflows to publish web projects online.',
      ],
    },
  ],
  softSkills: ['Problem Solving', 'Clear Communication', 'Team Collaboration', 'Time Management', 'Adaptability', 'Fast Learner'],
  languages: [
    { name: 'Urdu', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
  ],
  careerObjective: "To pursue a Bachelor's degree in Computer Science, continually enhance technical competencies in full-stack web engineering, and contribute to software innovation.",
  interests: ['Computer Science', 'Artificial Intelligence', 'Web Development', 'Software Engineering', 'Tech & Gaming'],
}

function ResumePreview() {
  return (
    <div className="bg-white text-gray-900 rounded-xl max-h-[85vh] overflow-y-auto shadow-2xl">
      {/* Header */}
      <div className="p-8 pb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-wide">{resumeData.name}</h1>
            <p className="text-sm font-semibold text-blue-600 mt-1 tracking-wider">{resumeData.title}</p>
            <p className="text-sm text-gray-600 mt-1">{resumeData.subtitle}</p>
          </div>
          <div className="text-right text-sm text-gray-700 space-y-1">
            <div className="flex items-center gap-2 justify-end">
              <span>&#x1F4CD;</span>
              <span>{resumeData.location}</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>&#x2709;</span>
              <span>{resumeData.email}</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>&#x260E;</span>
              <span>{resumeData.phone}</span>
            </div>
          </div>
        </div>
        <div className="border-b-4 border-blue-600" />
      </div>

      {/* Professional Summary */}
      <div className="px-8 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-6 bg-blue-600 rounded-sm" />
          <h2 className="text-lg font-bold text-gray-900 tracking-wide">PROFESSIONAL SUMMARY</h2>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
      </div>

      {/* Education */}
      <div className="px-8 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-6 bg-blue-600 rounded-sm" />
          <h2 className="text-lg font-bold text-gray-900 tracking-wide">EDUCATION</h2>
        </div>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="text-left p-2 border border-gray-300 font-semibold">QUALIFICATION</th>
              <th className="text-left p-2 border border-gray-300 font-semibold">BOARD / INSTITUTION</th>
              <th className="text-left p-2 border border-gray-300 font-semibold">LOCATION</th>
              <th className="text-left p-2 border border-gray-300 font-semibold">STATUS / MARKS</th>
            </tr>
          </thead>
          <tbody>
            {resumeData.education.map((e, i) => (
              <tr key={i}>
                <td className="p-2 border border-gray-300 font-semibold">{e.qualification}</td>
                <td className="p-2 border border-gray-300">{e.board}</td>
                <td className="p-2 border border-gray-300">{e.location}</td>
                <td className="p-2 border border-gray-300 font-semibold">{e.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Technical Skills */}
      <div className="px-8 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-6 bg-blue-600 rounded-sm" />
          <h2 className="text-lg font-bold text-gray-900 tracking-wide">TECHNICAL SKILLS</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((s, i) => (
            <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-blue-300 text-blue-600 bg-blue-50 font-medium">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="px-8 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-6 bg-blue-600 rounded-sm" />
          <h2 className="text-lg font-bold text-gray-900 tracking-wide">PROJECTS</h2>
        </div>
        {resumeData.projects.map((p, i) => (
          <div key={i} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-900">{p.title}</h3>
              <span className="text-xs text-blue-600 font-medium">{p.tech}</span>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {p.bullets.map((b, j) => (
                <li key={j} className="text-sm text-gray-700">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Soft Skills & Languages */}
      <div className="px-8 pb-4 grid grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-sm" />
            <h2 className="text-lg font-bold text-gray-900 tracking-wide">SOFT SKILLS</h2>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {resumeData.softSkills.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                {s}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-sm" />
            <h2 className="text-lg font-bold text-gray-900 tracking-wide">LANGUAGES</h2>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {resumeData.languages.map((l, i) => (
                <tr key={i}>
                  <td className="py-1">{l.name}</td>
                  <td className="py-1 text-right font-semibold">{l.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Career Objective */}
      <div className="px-8 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-6 bg-blue-600 rounded-sm" />
          <h2 className="text-lg font-bold text-gray-900 tracking-wide">CAREER OBJECTIVE</h2>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{resumeData.careerObjective}</p>
      </div>

      {/* Interests */}
      <div className="px-8 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-6 bg-blue-600 rounded-sm" />
          <h2 className="text-lg font-bold text-gray-900 tracking-wide">INTERESTS</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {resumeData.interests.map((inr, i) => (
            <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-blue-300 text-blue-600 bg-blue-50 font-medium">
              {inr}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
        <span>Hassan Naveed — Professional Curriculum Vitae</span>
        <span>Page 1 of 1</span>
      </div>
    </div>
  )
}

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false)

  function handleDownload() {
    const content = `
═══════════════════════════════════════════════════════════
                      HASSAN NAVEED
        COMPUTER SCIENCE STUDENT & WEB DEVELOPER
               Experience: Fresher
═══════════════════════════════════════════════════════════

Location: Karachi, Pakistan
Email: hassan16naveed@gmail.com
Phone: +92 319 2945394

───────────────────────────────────────────────────────────
                   PROFESSIONAL SUMMARY
───────────────────────────────────────────────────────────
Prefcated Computer Science stumant with strong technical
capablitios in front-end web developen, sotppoting responsive
beoiding erploiees, in brotseco with strome particisioan
rejeeis. Passioe ontomering wrotterfaces using HTML5, CSS3,
and ojaec and techoating in MERN, Node.js, Express.js
MongoUtl. Fecheooring ibe purvieil the React.js, Node.js,
Express.js, and MERN te sontadine gofivare enforoine padties
eopetfice tto cprojote wble conrobjmes whie ruploght blslogt
education Science.

───────────────────────────────────────────────────────────
                       EDUCATION
───────────────────────────────────────────────────────────
QUALIFICATION                  BOARD / INSTITUTION          LOCATION              STATUS
Intermediate (CS)              Aptech - ADSE                Karachi, Pakistan     Batch 2024-2027
Matriculation (CS)             Board of Secondary Ed.       Karachi, Pakistan     75% (Grade A)

───────────────────────────────────────────────────────────
                    TECHNICAL SKILLS
───────────────────────────────────────────────────────────
HTML5 & CSS3 | Responsive Web Design | Web Development
JavaScript (ES6+) | React.js (Learning) | UI/UX Principles
Git & Version Control | Microsoft Office | Technical Research

───────────────────────────────────────────────────────────
                       PROJECTS
───────────────────────────────────────────────────────────
Personal Web Development Projects
[HTML5 | CSS3 | JavaScript]

• Engineered clean, responsive, and mobile-first web page
  layouts adhering to modern UI standards.
• Implemented cross-browser compatibility and optimized
  front-end layoutstructure for smooth performance.
• Applied web hosting concepts and modern deployment
  workflows to publish web projects online.

───────────────────────────────────────────────────────────
                      SOFT SKILLS
───────────────────────────────────────────────────────────
Problem Solving          Clear Communication
Team Collaboration       Time Management
Adaptability             Fast Learner

───────────────────────────────────────────────────────────
                      LANGUAGES
───────────────────────────────────────────────────────────
Urdu .............. Native
English ........... Intermediate

───────────────────────────────────────────────────────────
                    CAREER OBJECTIVE
───────────────────────────────────────────────────────────
To pursue a Bachelor's degree in Computer Science,
continually enhance technical competencies in full-stack
web engineering, and contribute to software innovation.

───────────────────────────────────────────────────────────
                      INTERESTS
───────────────────────────────────────────────────────────
Computer Science | Artificial Intelligence | Web Development
Software Engineering | Tech & Gaming

═══════════════════════════════════════════════════════════
          Hassan Naveed — Professional Curriculum Vitae
═══════════════════════════════════════════════════════════
`.trim()

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Hassan_Naveed_Resume.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <section id="resume" className="max-w-6xl mx-auto px-6 sm:px-8 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-sm text-amber mb-4">My Resume</p>
          <h2 className="font-display text-3xl sm:text-[2.6rem] leading-tight text-balance mb-6">
            Want to know more about me?
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-10">
            Download my resume or view it online to see my full qualifications, skills, and project experience.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setShowPreview(true)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cobalt text-paper text-sm font-medium hover:bg-cobalt-soft transition-all hover:shadow-lg hover:shadow-cobalt/25"
            >
              <Eye size={18} />
              View Resume
            </button>
            <button
              onClick={handleDownload}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-sm font-medium text-paper hover:border-paper transition-all hover:shadow-lg hover:shadow-paper/10"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8 text-slate text-sm">
            <FileText size={16} />
            <span>Available as text file</span>
          </div>
        </motion.div>
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPreview(false)}
                className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-ink border border-line flex items-center justify-center text-paper hover:bg-cobalt transition-colors"
              >
                <X size={18} />
              </button>
              <ResumePreview />
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cobalt text-paper text-sm font-medium hover:bg-cobalt-soft transition-colors"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
