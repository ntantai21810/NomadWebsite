import React from "react";
import "./Progress.css";

class Progress extends React.Component {
  render() {
    return <div class="Browse-Places">
    <div class="col col-Browse-Places">Browse Places</div>
    <div class="row row-icon">
      <div class="col-md-2" ><a href="" class="a-icon"><i class="fas fa-star favor"></i><div class="text-underline-icon">Favorite</div></a></div>
      <div class="col-md-2" ><a href="" class="a-icon"><i class="fas fa-fire trend"></i><div class="text-underline-icon">Trending</div></a></div>
      <div class="col-md-2" ><a href="" class="a-icon"><i class="fas fa-map-marker-alt place"></i><div class="text-underline-icon">Places</div></a></div>
      <div class="col-md-2" ><a href="" class="a-icon"><i class="fas fa-users user"></i><div class="text-underline-icon">Users</div></a></div>
      <div class="col-md-2" ><a href="" class="a-icon"><i class="fas fa-money-bill-wave price"></i><div class="text-underline-icon">Prices</div></a></div>
      <div class="col-md-2" ><a href="" class="a-icon"><i class="fas fa-smile rating"></i><div class="text-underline-icon">Rating</div></a></div>
    </div>
  </div>;
  }
}

export default Progress;
