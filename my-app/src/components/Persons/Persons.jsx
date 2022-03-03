import React from "react";

const Person = (props) => {
  return (
    <div class="col-lg-4">
      <div class="text-center card-box">
        <div class="member-card pt-2 pb-2">
          <div class="thumb-lg member-thumb mx-auto">
            <img
              src={props.img}
              class="rounded-circle img"
            />
          </div>
          <div class="">
            <h1>{props.name}</h1>
            <p class="text-muted">{props.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;