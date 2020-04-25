import React from 'react'
 var cats="";
const Menu = () => {
    

    return (
        <div class="btn-group-vertical bnt-group-lg" data-toggle="buttons">
            <label class="btn btn-primary">
    <input type="button" class="btn btn-primary" onClick={cats='tech'}></input>{"Техника"}</label>
    <label class="btn btn-primary">
    <input type="button" class="btn btn-primary" onClick={cats='inst'}></input>{"Инструменты"}</label>
    <label class="btn btn-primary">
    <input type="button" class="btn btn-primary"  onClick={cats='other'}></input>{"Прочее"}</label>
        </div>
    )
}
export default Menu;    