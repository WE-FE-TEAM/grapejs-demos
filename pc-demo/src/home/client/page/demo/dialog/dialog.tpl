{% extends 'common:page/layout.tpl' %}

{% block content %}
     <div id="app">

     </div>
{% endblock %}

{% block block_body_js %}

{% script %}
    require.async( ['./app.js'], function( app ){
        app.init();
    } );
{% endscript %}

{% endblock %}