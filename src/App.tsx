import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
// ... other imports

function App() {
  // ...
  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          {/*...*/}
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}
