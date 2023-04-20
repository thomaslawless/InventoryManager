import { supabase } from '../../lib/SupabaseClient';

function Database({ products }) {
  return (
    <ul>
      {products.map((products) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('products').select()

  return {
    props: {
     products: data
    },
  }
}

export default Database;
