import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../../components/Account';
import { Database } from '../../types/supabase';

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <center>
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="light" />
      ) : (
        <Account session={session} />
      )}
    </div>
    </center>
  )
}

export default Home