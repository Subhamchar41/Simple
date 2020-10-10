import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dashboard.css";

function Upload() {
    return (
        <div>
         <div class="sidenav">
  <a href="#">Uploads</a>
  <a href="#">Verify Items</a>
  <a href="#">Export</a>
</div>
    <div class="main">
< form >
      <h2>Title</h2>
      <input type="text"></input>
  
       <div>
          <h2>Upload images</h2>
        </div>
        <h3>Images</h3>
        <input type="file" /><br></br>
        <button>Upload</button>
      </form>
</div>
    </div>
    );
  }
  
  export default Upload;
  