import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
export default function RTE() {
  return (
   <Editor
   initialValue='default '
   init={
    {
        branding:false,
        height:500,
        menubar:true,
        plugins:['advlist autolink lists link image charmap print preview anchor  ',
          

        ]
        
    }
   }



   />
  )
}
