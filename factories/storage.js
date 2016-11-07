(() => {

    angular
    .module('todos')
    .factory('storage', function($http) {

        // Todo Constructor 
        function newTodo(description, isCompleted, id) {
          this.isComplete = isCompleted;
          this.description = description;
          this.id = id;
        };


        // Single source of todos
        let todos = [];



        // EVENTS FOR MODIFIYING DATA
        const addTodo = function(content)
        {
          let id = Date.now();
          let todo = new newTodo(content,false,id);
          todos.push(todo);
          localStorage.setItem('todos',JSON.stringify(todos));
          return todos;
        }

        const updateTodo = function(id)
        {
          
          todos.forEach(function(todo){
            if(todo.id === id)
            {
              if(todo.isComplete == true)
              {
                todo.isComplete = false;
              }
              else
              {
                todo.isComplete = true;
              }
            }
          })

          localStorage.setItem('todos',JSON.stringify(todos));
          return todos;

        }


        const deleteTodo = function(id)
        {
          let arrayPosition = null;

          todos.forEach(function(todo,index){
            if(todo.id === id)
            {
              arrayPosition = index;
            }
          })

          todos.splice(arrayPosition,1);
          localStorage.setItem('todos',JSON.stringify(todos));
          return todos;
        }



        // FILTERING OUR DATA FOR DIFFERENT VIEWS
        const getAllTodos = function()
        {
          if(localStorage.getItem('todos'))
          {
            todos = JSON.parse(localStorage.getItem('todos'));
          }

          return todos;
        }

        const getActive = function()
        {
          let newArray = todos.filter(function(todo){
            if(todo.isComplete === false)
            {
              return true;
            }
          })

          return newArray;
        }


        const getCompleted = function()
        {
          let newArray = todos.filter(function(todo){
            if(todo.isComplete === true)
            {
              return true;
            }
          })

          return newArray;
        }

        return {
          addTodo,
          updateTodo,
          deleteTodo,
          getActive,
          getCompleted,
          getAllTodos
        }

    });

})();
