(function(){
    'use strict';

    angular
        .module('app.common.modal', [])
        .controller('ModalInstanceCtrl', ModalInstanceCtrl)

    ModalInstanceCtrl.$inject = ['$uibModalInstance','data'];

    function ModalInstanceCtrl($uibModalInstance, data) {
        var vm = this;
        vm.data = data;
        vm.ok = function () {
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();