angular
    .module('materialApp')
    .factory('Feedback', feedbackService)
    .factory('LikeDislike', likeDislikeService);

function feedbackService($http) {
    return {
        save: function(data, successCallback, errorCallback) {
            console.log("In Feedback Service")
            console.log(data);
            var url="https://aishwat.com/feedback";
            // var url = "http://localhost:3000/feedback" //testing
            $http({
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data,
                timeout: 11000 //11 sec 
            }).then(successCallback, errorCallback);
        }
    };
}
function likeDislikeService($http) {
    return {
        send: function(url_append, successCallback, errorCallback) {
            console.log("In LikeDislike Service")
            console.log(url_append);
            var url="https://aishwat.com/"+url_append;
            // var url = "http://localhost:3000/"+url_append+"?timestamp="+Date.now(); //testing
            $http({
                method: 'GET',
                url: url,
                timeout: 8000 //8 sec 
            }).then(successCallback, errorCallback);
        }
    };
}