var oView = oView || {};
oView.util = oView.util || {};
oView.view = oView.view || {};
oView.util = {
    getUrlVars: function() {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name) {
        return oView.util.getUrlVars()[name];
    }
};

oView.view.global = function() {
    this.init();
};
oView.view.global.prototype = {
    init: function() {
        console.log('■ import Global');
		this._assignElements();
		this._attachEventHandlers();
        this.ready();
    },
    _assignElements: function() {
        this.welWin = $(window);
		this.welDoc = $(document.body);
    },
    _attachEventHandlers: function() {
        this.welDoc.on('click', 'a[href="#"]', $.proxy(this._onClickEventPrevent, this));
    },
	_onClickEventPrevent: function(event) {
		event.preventDefault();
	},
    ready: function() {
	}
};

var oView = new oView.view.global();