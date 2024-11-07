import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import BlogList from '../Component/BlogList'
import { postLatest } from '../APIRequest/APIRequest';
import Loader from '../Component/Loader';

const HomePage = () => {

    let [list,setList] = useState(null);

    useEffect(()=>{
        (async()=>{
            let res = await postLatest();
            setList(res)
        })();
    },[])
    
  return (
    <Layout>
        {list === null ?<Loader/>:<BlogList list={list} />}
    </Layout>
  )
}

export default HomePage