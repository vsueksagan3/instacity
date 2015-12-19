var accessToken = '485596db960641bbab1f7a243c035f85';

var instaSearch = InstagramAPI.init( accessToken );

instaSearch.endpoint(
    'tags/paris/media/recent',
    {
        // lat: 40.707840135059854,
        // lng: -74.01120185852051,
        // distance: 200
    },
    function(data){
        for(x in data.data){
          $('#known-for').append('<div><img src="'+data.data[x].images.low_resolution.url+'"></div>');  
        }
    },
    function(error){
        console.log('failed ', error);
    }
);