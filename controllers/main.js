(() => {

    'use strict';


    angular
    .module('todos')
    .controller('MainController', function(storage) {

        let vm = this;

        vm.todos = storage.getAllTodos();

        // These are our Events
        vm.submitForm = function(content)
        {
            vm.todos = storage.addTodo(content);
            vm.form.content = "";
        }

        vm.markCompleted = function(id)
        {
            vm.todos = storage.updateTodo(id);
        }

        vm.deleteTodo = function(id)
        {
            vm.todos = storage.deleteTodo(id);
        }

        // These are our filters
        vm.showAll = function()
        {
            vm.todos = storage.getAllTodos();
        }

        vm.showActive = function()
        {
            vm.todos = storage.getActive();
        }

        vm.showCompleted = function()
        {
            vm.todos = storage.getCompleted();
        }


    })

})()
