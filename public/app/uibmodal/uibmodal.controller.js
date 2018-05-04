(function(){
    angular.module('app.uibmodal', [])
    .controller('UIBModalCtrl', UIBModalCtrl);

    UIBModalCtrl.$inject = ['$uibModal','$log'];

    function UIBModalCtrl($uibModal, $log) {
        var vm = this;
        vm.showModal = showModal;

        function showModal() {
            $uibModal.open({
                templateUrl: 'message.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalCtrl',
                size: 'sm',
                resolve: {
                    data: function () {
                        return {
                            title: 'Borrar Silleta',
                            message: 'Está seguro de borrar la silleta (11111111)?'
                        };
                    }
                }
            })
            .result.then(
                function () {
                    $log.debug('UIBModalCtrl - $uibModal - ok')
                },
                function () {
                    $log.debug('UIBModalCtrl - $uibModal - cancel');
                }
            );            
        }
    }
})();