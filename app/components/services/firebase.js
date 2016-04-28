app.factory('Bubbles', ["$firebaseArray",  
    function($firebaseArray){
     var myFireBaseRef = new Firebase("https://bubblesbcw.firebaseio.com/bubbles");
        return $firebaseArray(myFireBaseRef);
    }
    
]);





// angular.module("app").controller("SampleCtrl", function($scope, $firebaseArray) {
//   var ref = new Firebase("https://bcw2016winter.firebaseio.com/messages");  
//   $scope.messages = $firebaseArray(ref);
//   // add new items to the array
//   // the message is automatically added to our Firebase database!
//   $scope.addMessage = function() {
//     $scope.messages.$add({
//       text: $scope.newMessageText
//     });
//     // clear out the "old" message
//     //$scope.newMessageText = "";
//   };
// });