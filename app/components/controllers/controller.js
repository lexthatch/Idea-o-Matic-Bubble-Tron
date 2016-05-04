app.controller('appController', function($scope, $timeout, $location, $firebaseArray, Bubbles) {

    // var myFireBaseRef = new Firebase("https://bubblesbcw.firebaseio.com/");
    
    $scope.bubbles = Bubbles;
    
   
    //Generate bubbles for testing purposes.  
    //Only occurs if there is no bubbles left.
    $scope.bubbles.$loaded(function(){
        if($scope.bubbles.length === 0){        
            for (var i = 0; i < 3; i++) {
             $scope.bubbles.$add({
                idea: chance.name({
                    middle: true,
                    prefix: true
                }),
                location: chance.domain(),
                // count: 2
                count: chance.integer({
                    min: 0,
                    max: 4
                    })
                })
            };
        }
    })
    

    $scope.bumpUp = function(obj, index) {
        $scope.buttonDisabled = true;
        
        //Update Firebase count value        
        var temp = Bubbles.$getRecord(obj)
        temp.count++
        Bubbles.$save(temp)
        
        // obj.count++ (uncomment this to make it local only change)
                        
        $('#' + index).animateCss('bounce')
        if (temp.count >= 5) {
            $scope.commonWall(obj)
            $timeout(function() {
                $scope.pop(obj)
            }, 2000);
        }
        $timeout(function() {
            $scope.buttonDisabled = false
        }, 750);
    }
    $scope.bumpDown = function(obj, index) {
        $scope.buttonDisabled = true;
        
        //Update Firebase count value
        var temp = Bubbles.$getRecord(obj)
        temp.count--
        Bubbles.$save(temp)
        
        // obj.count-- (uncomment this to make it local only change)
        $('#' + index).animateCss('shake')
        $timeout(function() {
            $scope.buttonDisabled = false
        }, 750);
        return;
    }
    $scope.pop = function(obj, index) {
        $scope.buttonDisabled = true;
        $('#' + index).animateCss('fadeOut')
        
        var temp = Bubbles.$getRecord(obj)
        //^^^^^^ remove if want to remove only locally
        $timeout(function() {
            // $scope.bubbles.splice($scope.bubbles.indexOf(obj), 1);
            //Uncomment if want to remove only locally ^^^^^^
            Bubbles.$remove(temp);
            //^^^^ remove if want to remove only locally 
            $scope.buttonDisabled = false
        }, 500)
        return;
    }
    $scope.commonWall = function(thought) {
        swal({
                title: "Common Wall?",
                text: "Do you want to meet with these other people on " + thought.idea + "?!",
                type: "success",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, Lets Do It!",
                cancelButtonText: "No, I changed my mind!",
                closeOnConfirm: true,
                closeOnCancel: false,
                imageUrl: "http://previews.123rf.com/images/Krisdog/Krisdog1210/krisdog121000021/15611120-Illustration-of-a-hand-giving-a-thumbs-up-in-a-woodblock-style-Stock-Vector.jpg"},
            function(isConfirm) {
                if (isConfirm) {
                    $location.path("/view1")
                } else {
                    swal({
                        title: "Sorry",
                        text: "Hope you find a topic you want to talk about",
                        type: "error"
                    });
                }
            });

    }

    $scope.newThoughtLength = 25;
    $scope.newThought = function() {
        if (($scope.newIdea.idea === null) || ($scope.newIdea.idea == "")) {
            alert("Sorry, plese enter in a valid input")
        } else if ($scope.newIdea.idea.length > $scope.newThoughtLength) {
            alert("Sorry, too long. " + $scope.newThoughtLength + " characters or less, you used " + $scope.newIdea.idea.length + " characters")
            $scope.newIdea = "";
        } else {

            Bubbles.$add({
                idea: $scope.newIdea.idea,
                location: $scope.newIdea.location || null,
                count: 0
                // timestamp: Firebase.ServerValue.TIMESTAMP
            })
            $timeout(function() {
                $('#' + $scope.newIdea.idea).animateCss('bounce')
            }, 100)
        }
    }

    $.fn.extend({animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).removeClass('animation').addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName).addClass('animation');
            });
        }
    });
});