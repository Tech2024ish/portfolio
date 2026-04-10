import React, { useEffect, useState } from 'react'
import { getSkills } from '../api'

const fallbackSkills = [
  { id: 1, name: 'Python', category: 'Language', level: 90 },
  { id: 2, name: 'FastAPI', category: 'Framework', level: 88 },
  { id: 3, name: 'Supabase', category: 'Database', level: 82 },
  { id: 4, name: 'PostgreSQL', category: 'Database', level: 78 },
  { id: 5, name: 'Docker', category: 'DevOps', level: 72 },
  { id: 6, name: 'REST APIs', category: 'Architecture', level: 92 },
  { id: 7, name: 'Git', category: 'Tools', level: 85 },
  { id: 8, name: 'Linux', category: 'Tools', level: 76 },
]

const categoryColors = {
  Language: 'bg-purple-100 text-purple-700',
  Framework: 'bg-blue-100 text-blue-700',
  Database: 'bg-emerald-100 text-emerald-700',
  DevOps: 'bg-orange-100 text-orange-700',
  Architecture: 'bg-pink-100 text-pink-700',
  Tools: 'bg-gray-100 text-gray-600',
}

export default function Skills() {
  const [skills, setSkills] = useState(fallbackSkills)

  useEffect(() => {
    getSkills()
      .then((res) => {
        if (res.data && res.data.length > 0) setSkills(res.data)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold uppercase tracking-widest text-sm mb-2">
            What I Know
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">Skills &amp; Technologies</h2>
          <div className="mt-4 w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      categoryColors[skill.category] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {skill.category}
                  </span>
                </div>
                <span className="text-sm font-semibold text-indigo-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-indigo-500 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
