import { supabase } from '../../lib/SupabaseClient'

  function Database({ countries }) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    );
  }

  export async function getServerSideProps() {
    let { data } = await supabase.from('countries').select()

    return {
      props: {
       countries: data
      },
    }
  }
  export default Database;