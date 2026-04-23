import { createContext, useContext, useMemo, useState } from 'react'

const StudyDndContext = createContext(null)

export function StudyDndProvider({ children }) {
  const [simulatedDnd, setSimulatedDnd] = useState(false)
  const value = useMemo(() => ({ simulatedDnd, setSimulatedDnd }), [simulatedDnd])
  return <StudyDndContext.Provider value={value}>{children}</StudyDndContext.Provider>
}

export function useStudyDnd() {
  const ctx = useContext(StudyDndContext)
  if (!ctx) {
    return { simulatedDnd: false, setSimulatedDnd: () => {} }
  }
  return ctx
}
