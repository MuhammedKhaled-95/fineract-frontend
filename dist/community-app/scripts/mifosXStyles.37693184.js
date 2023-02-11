define(['underscore'], function () {
    var styles = {
        css: [
            'fontawesome.8f41798f.css',
            'styles.c82f6c6b.css'
            ]
    };

    require(_.reduce(_.keys(styles), function (list, pluginName) {
        return list.concat(_.map(styles[pluginName], function (stylename) {
            return pluginName + '!styles/' + stylename;
        }));
    }, []));
});
