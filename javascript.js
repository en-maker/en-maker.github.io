var app = angular.module("shopping-list", [])
app.controller("ctr", function($scope){
    $scope.list = []
    $scope.errMess = ""
    $scope.addItem = function(){
        $scope.errMess = ""
        $scope.item = angular.uppercase($scope.item)
        if(!$scope.item){
            $scope.errMess = 'ERROR! YOU DID NOT ADD ANYMORE.'
            return;
        }
        if($scope.list.indexOf($scope.item) === -1){
            $scope.list.unshift($scope.item)
            $scope.item = ""
        }else{
            $scope.errMess = 'ERROR! YOU HAVE ALREADY ADDED: '+$scope.item+'.'
            $scope.item = ""
        }
    }
    $scope.removeItem = function(x){
        $scope.errMess = ""
        $scope.list.splice(x, 1)
    }
})