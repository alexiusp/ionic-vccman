angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {
  console.log("DashCtrl");
})
.controller('StartCtrl', function($scope, $state, $ionicLoading) {
  console.log("StartCtrl");
  $scope.start = function() {
    $state.go("tab.dash");
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
console.log("ChatsCtrl");
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  console.log("ChatDetailCtrl");
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  console.log("AccountCtrl");
  $scope.settings = {
    enableFriends: true
  };
});
