import { useState } from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import { useToast } from '../context/toast-context'
import PageHeader from '../components/layout/PageHeader'

export default function SettingsPage() {
  const { notify } = useToast()
  const [workspace, setWorkspace] = useState('Acme Admin')
  const [timezone, setTimezone] = useState('America/Los_Angeles')
  const [invitePolicy, setInvitePolicy] = useState('managers')

  function handleSave() {
    notify({
      tone: 'success',
      title: 'Settings saved',
      description: 'Workspace preferences were updated locally.',
    })
  }

  return (
    <section className="page">
      <PageHeader title="Settings" description="Workspace defaults for the user directory." />
      <div className="panel settings-panel">
        <Input label="Workspace name" name="workspace" value={workspace} onChange={(event) => setWorkspace(event.target.value)} />
        <Input label="Default timezone" name="timezone" value={timezone} onChange={(event) => setTimezone(event.target.value)} />
        <Select
          label="Who can invite users"
          name="invitePolicy"
          value={invitePolicy}
          onChange={(event) => setInvitePolicy(event.target.value)}
          options={[
            { value: 'admins', label: 'Admins only' },
            { value: 'managers', label: 'Admins and managers' },
            { value: 'everyone', label: 'Everyone' },
          ]}
        />
        <div className="form-actions">
          <Button onClick={handleSave}>Save settings</Button>
        </div>
      </div>
    </section>
  )
}
