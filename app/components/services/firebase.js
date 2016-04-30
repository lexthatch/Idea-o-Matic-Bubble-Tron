app.factory('Bubbles', ["$firebaseArray",  
    function($firebaseArray){
     var myFireBaseRef = new Firebase("https://bubblesbcw.firebaseio.com/bubbles");
        return $firebaseArray(myFireBaseRef);
    }
    
]);