import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dashboard.css";

function Export() {
    return (
        <div className="app">
         <div class="sidenav">
  <a href="#">Uploads</a>
  <a href="#">Verify Items</a>
  <a href="#">Export</a>
  
</div>
<div className="main">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
      <div class="container">
   <div class="row">
      <div class='col-sm-6'>
         <div class="form-group">
            <div class='input-group date' id='datetimepicker1'>
               <input type='text' class="form-control" />
               <span class="input-group-addon">
               <span class="glyphicon glyphicon-calendar"></span>
               </span>
            </div>
         </div>
      </div>
   </div>
</div>
      </th>
      <td>
      <div class="container">
   <div class="row">
      <div class='col-sm-6'>
         <div class="form-group">
            <div class='input-group date' id='datetimepicker1'>
               <input type='text' class="form-control" />
               <span class="input-group-addon">
               <span class="glyphicon glyphicon-calendar"></span>
               </span>
            </div>
         </div>
      </div>
   </div>
</div>
      </td>
      <td><button>Export</button></td>

    </tr>

  </tbody>
</table>
</div>
</div>
    );
  }
  
export default Export;