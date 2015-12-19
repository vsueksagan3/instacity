var InstagramAPI = (function() {
    var APIURL = 'https://api.instagram.com/';
    var VERSION = 'v1/';
    var DATA = {
        dataType: 'jsonp',
        type: 'GET'
    }
    
    function _getRoute( endpoint ) {
        return APIURL + VERSION + endpoint;
    }
    
    function InstagramAPI( accessToken ) {
        this.accessToken = accessToken;
        this.defaultOpts = {
            client_id: this.accessToken
        };
    }
    
    InstagramAPI.prototype.endpoint = function( path, opts, onSuccess, onFail ) {
        var endpoint = path;
        
        var url = _getRoute( endpoint );
        var options = $.extend({}, this.defaultOpts, opts);
        var ajaxOpts = $.extend({}, DATA, {
            url: url,
            data: options,
            success: onSuccess,
            error: onFail
        });
        
        $.ajax( ajaxOpts )
    }
    
    return {
        init: function( accessToken ) {
            return new InstagramAPI( accessToken );
        }
    }
})();
