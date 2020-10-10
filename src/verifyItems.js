import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dashboard.css";

function Verify() {
    return (
      
                <div>
         <div class="sidenav">
  <a href="#">Uploads</a>
  <a href="#">Verify Items</a>
  <a href="#">Export</a>
  
</div>
<div class="main">
     <table class="table">
  <thead>
    <tr>
      <th scope="col">Image Title</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td><button>Verify</button></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td><button>Verify</button></td>
    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td><button>Verify</button></td>
      
    </tr>
  </tbody>
</table>
</div>
</div>
    );
  }
  
export default Verify;
  