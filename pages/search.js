import Head from 'next/head'
import { useRouter } from 'next/router';
import SearchHeader from '../Components/SearchHeader'
import Response from '../Response';

const search = ({results}) => {
  return (
    <div>
        <Head>
            <title>Search page</title>
        </Head>
            <SearchHeader />
    </div>
  )
}



export async function getServerSideProps(context) {
  const mockData = true
  const data =mockData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}`
  ).then((response) => response.json());

  return{
    props:{
      results:data
    }
  }
  };



export default search