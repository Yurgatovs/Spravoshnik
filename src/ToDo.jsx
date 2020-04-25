import React from 'react'

class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            works: JSON.parse(localStorage.getItem('works'))
        };

    }




    add() {
        var category = this.refs.category.value;
        var title = this.refs.title.value;
        var discription = this.refs.discription.value;
        var image = this.refs.image.value;
        const arr = [category,title, discription, image];
        if(localStorage.getItem('works') == null) {
        var works = [];
             works.push(arr);
        localStorage.setItem('works', JSON.stringify(works));
        } else {
            var works = JSON.parse(localStorage.getItem('works'));
            works.push(arr);
            localStorage.setItem('works', JSON.stringify(works));
        }
        this.setState({
            works: JSON.parse(localStorage.getItem('works'))
        });
        this.refs.category.value ="";
        this.refs.title.value = "";
        this.refs.discription.value = "";
        this.refs.image.value = "";

    }

    delete(e) {
        var index = e.target.getAttribute('data-key');
        var list = JSON.parse(localStorage.getItem('works'));
        list.splice(index, 1);
        this.setState({
            works: list
        });
        localStorage.setItem('works', JSON.stringify(list));
    }

    update(e) {
        var index = e.target.getAttribute('data-key');
        var list = JSON.parse(localStorage.getItem('works'));
        var lists = list[index];
                this.refs.category.value = lists[0];
                this.refs.title.value = lists[1];
                this.refs.discription.value = lists[2];
                this.refs.image.value = lists[3];
           }


    updates(e) {
        var index = e.target.getAttribute('data-key');
        var category = this.refs.category.value;
        var title = this.refs.title.value;
        var discription = this.refs.discription.value;
        var image = this.refs.image.value;
        const arr = [category,title, discription, image];
        var index = e.target.getAttribute('data-key');   

            var works = JSON.parse(localStorage.getItem('works'));
            works[index]=arr;
            localStorage.setItem('works', JSON.stringify(works));
  
        this.setState({works});
        this.refs.category.value ="";
        this.refs.title.value = "";
        this.refs.discription.value = "";
        this.refs.image.value = "";
       
    }



    render() {
        return (
            <div>
                <div class="container text-center" >

                    <input name="category" list="category" placeholder="Выберите категорию" ref="category" />
                    <datalist id="category">
                        <option value="Техника" />
                        <option value="Инструменты" />
                        <option value="Материалы" />
                    </datalist>
                    <input type="text" placeholder="Заголовок" ref="title" />
                    <input type="text" placeholder="Описание" ref="discription" />
                    <input type="text" placeholder="URL картинки" ref="image" />
                    <input type="button" value="Добавить" onClick={this.add.bind(this)} /></div>
                <br /><br />

                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <table class="table" style={{ align: "center" }}>
                                <tr>
                                    <th>Категория</th>
                                    <th>Заголовок</th>
                                    <th>Описание</th>
                                    <th>Картинка</th>
                                    <th>Удалить</th>
                                    <th>Заполнить для редактирования</th>
                                    <th>Редактировать</th>
                                </tr>

                                {this.state.works.map(function (work, index) {
                                    if (work[0] == this.props.match.params.id) {
                                        return (
                                            <tr key={index}>
                                                <td class="text-center">{work[0]}</td>
                                                <td class="text-center">{work[1]}</td>
                                                <td class="text-justify">{work[2]}</td>
                                                <td><img src={work[3]} class="img-rounded" class="w-100"></img></td>
                                                <td><input class = "container text-center" type="button" value="Удалить" data-key={index} onClick={this.delete.bind(this)}></input></td>
                                                <td><input class = "container text-center" type="button" value="Выбрать" data-key={index} onClick={this.update.bind(this)}></input></td>
                                               <td><input class = "container text-center" type="button" value="Редактировать"  data-key={index} onClick= {this.updates.bind(this)}></input></td></tr>); 
                                    }
                                }, this)}

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default ToDo;


