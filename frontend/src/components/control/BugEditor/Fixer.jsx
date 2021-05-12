import React, { useState } from 'react'
import { fixBug } from '../../../adapters'
import {
  ComponentDiv, ComponentTitle,
  EditorForm, EditorLabel,
  EditorInput, Container,
  EditorTextarea,
  EditorBttn
} from '../../style/BugEditor/BugEditorStyles'

export default function Fixer ({ displayLog, selectedBug }) {
  const [bugFix, setBugFix] = useState({
    fixed_code: '',
    explanation: ''
  })

  const handleFixedCode = (e) => {
    setBugFix({ ...bugFix, fixed_code: e.target.value })
  }

  const handleExplanation = (e) => {
    setBugFix({ ...bugFix, explanation: e.target.value })
  }

  const handleApplyFix = async (e) => {
    const id = selectedBug._id
    e.preventDefault()
    console.log(bugFix)
    const result = await fixBug(id, bugFix)
    console.log(result)
    setBugFix({ fixed_code: '', explanation: '' })
    displayLog()
  }

  return (
    <ComponentDiv>
      <ComponentTitle>Fix Bug</ComponentTitle>
      <EditorForm>
        <Container start={0} end={2}>
          <EditorLabel>Fixed Code</EditorLabel>
          <EditorTextarea rows='10' onChange={handleFixedCode} />
        </Container>
        <Container start={0} end={2}>
          <EditorLabel rows={2}>Explanation</EditorLabel>
          <EditorInput onChange={handleExplanation} />
        </Container>
        <Container start={0} end={2}>
          <EditorBttn type='submit' onClick={handleApplyFix}>Apply Fix</EditorBttn>
        </Container>
      </EditorForm>
    </ComponentDiv>
  )
}
