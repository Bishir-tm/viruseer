import React from 'react'
import Dropzone from "dropzone";

Dropzone.autoDiscover = false;



const DropFile = () => {
    let myDropzone = new Dropzone("#dropzone-form");
    myDropzone.on("addedfile", file => {
      console.log(`File added: ${file.name}`);
    });
  
    return (
        <div>
            <form action="" method="post" id='dropzone-form'>hello
                <input type="file" name="file" placeholder='drp fie here...'/>
            </form>
        </div>
    )
}

export default DropFile