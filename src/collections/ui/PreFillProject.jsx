import React, { useMemo, useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import {useField} from 'payload/components/forms'

export default function PreFillProject(){
    // // parses URL search param
    // function useQuery() {
    //     const { search } = useLocation();
    //     return useMemo(() => new URLSearchParams(search), [search]);
    // }
    
    // // parse query
    // let query = useQuery();
    // // Object contains all query parameters as javascript object
    // const params = Object.fromEntries(query);
    
    // // set value of specific field we want to pre fill
    // const { value, setValue } = useField({ path: 'project' })
    // // useEffect Hook :) takes parsed value to check if it exists
    // useEffect(() => {
    //     if (!params.project) return;

    //     setValue(params.project)
    // }, [])

    // return (
    //     ''
    // )
    function useQuery() {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
      }
      
      let query = useQuery();
      const params = Object.fromEntries(query);
      
      
      const { value, setValue } = useField({ path: 'project' })
      
      useEffect(() => {
          if (!params.project) return

          setValue(params.project)
      })
      
      return (
        ''
      )
}

