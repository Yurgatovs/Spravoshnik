import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  return (
      <div>

       
        <div class="btn-group-vertical bnt-group-lg" data-toggle="buttons" style={{float:"Left"}}>
          <li type="button" class="btn btn-primary">
            <Link to="/Техника" style={{color: "white" , margin: "2%" }}>Техника</Link>
          </li>
          <li type="button" class="btn btn-primary">
            <Link to="/Инструменты" style={{color: "white" , margin: "2%" }}>Инструменты</Link>
          </li>
          <li type="button" class="btn btn-primary">
            <Link to="/Прочее" style={{color: "white" , margin: "2%" }}>Прочее</Link>
          </li>
          </div>
  

      
      </div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
